import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, FlatList, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Style_MyOders from '../../styles/Style_MyOders'
import colors from '../../styles/colors'
import { AppContext } from '../../context'
import { api_getListOrder } from '../../helper/ApiHelper'

const Page_MyOrders = (props) => {
    const { navigation } = props;
    const [orders, setOrders] = useState([]);
    const { users } = useContext(AppContext);
    const [filterStatus, setFilterStatus] = useState('Tất cả');

    // Danh sách trạng thái đơn hàng
    const statusFilter = [
        { label: 'Tất cả', value: 'Tất cả' },
        { label: 'Đang xử lý', value: 'Đang xử lý' },
        { label: 'Đang giao hàng', value: 'Đang giao hàng' },
        { label: 'Đã giao', value: 'Đã giao' },
    ];

    // Hàm lọc danh sách đơn hàng
    const filteredOrders = orders.filter(order =>
        filterStatus === 'Tất cả' || order.status === filterStatus
    )

    // Hàm lấy dữ liệu đơn hàng
    const getOrderUser = async () => {
        if (!users || !users._id) return;

        try {
            const response = await api_getListOrder(users._id);
            if (response.status == true) {
                setOrders(response.data)
            }
        } catch (e) {
            console.log(e);
        }
    };

    // Hàm gọi getOrderUser
    useEffect(() => {
        getOrderUser();
    }, [users]);

    // Hàm render danh sách lọc
    const renderLabel = ({ item }) => {
        return (
            <TouchableOpacity
                style={[
                    Style_MyOders.btn_filter,
                    filterStatus === item.value && Style_MyOders.btn_active_filter
                ]}
                onPress={() => setFilterStatus(item.value)}>

                <Text
                    style={[
                        Style_MyOders.text_filter,
                        filterStatus === item.value && Style_MyOders.text_active_filter
                    ]}>
                    {item.label}
                </Text>
            </TouchableOpacity>
        )
    }

    // Hàm render đơn hàng
    const renderOrder = ({ item }) => {
        const { _id, total_price, status, date } = item

        // Định nghĩa màu cho status
        const statusColors = {
            "Đang xử lý": colors.Blue,
            "Đang giao hàng": colors.Orange,
            "Đã giao": colors.Green
        }

        return (
            <TouchableOpacity
                style={Style_MyOders.container_order}
                onPress={() => navigation.navigate('DetailOrder', { order: item, user: users })}>
                <View style={[Style_MyOders.container_content, { marginBottom: 8 }]}>
                    <Text
                        style={Style_MyOders.oderId}
                        numberOfLines={1}
                        ellipsizeMode='tail'>
                        #{_id}
                    </Text>
                    <Text style={Style_MyOders.date}>{date}</Text>
                </View>

                <View style={Style_MyOders.container_content}>
                    <View style={{ gap: 4 }}>
                        <Text style={[Style_MyOders.body, { color: colors.Grey }]}>
                            Tổng tiền: <Text style={[Style_MyOders.body, { color: colors.Black }]}>{total_price.toLocaleString('vi-VN')}đ</Text>
                        </Text>

                        <Text style={[Style_MyOders.body, { color: statusColors[status] }]}>
                            {status}
                        </Text>
                    </View>

                    <View style={Style_MyOders.btn_detail}>
                        <Text style={Style_MyOders.text_detail}>Chi tiết</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.White }}>
            <View>
                <TouchableOpacity
                    style={Style_MyOders.navigation}
                    onPress={() => navigation.navigate('Tab', { screen: 'Profile' })}>
                    <Image
                        source={require('../../assets/icon/icon_long_arrow.png')}
                        style={Style_MyOders.img_icon} />

                    <Text style={Style_MyOders.text_navigation}>Đơn hàng của tôi</Text>
                </TouchableOpacity>

                {/* <View style={Style_MyOders.contain_text_input}>
                <Image
                    source={require('../../assets/icon/icon_search.png')}
                    style={Style_MyOders.img_icon} />

                <TextInput
                    style={Style_MyOders.text_input}
                    placeholder='Tìm kiếm'
                    placeholderTextColor={colors.Black} />
            </View> */}

                <FlatList
                    data={statusFilter}
                    renderItem={renderLabel}
                    keyExtractor={item => item.value}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginStart: 20 }} />

                <FlatList
                    data={filteredOrders}
                    renderItem={renderOrder}
                    keyExtractor={item => item._id.toString()}
                    scrollEnabled={false} />
            </View>
        </View>
    )
}

export default Page_MyOrders