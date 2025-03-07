import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { api_getDetailOrder, api_getAddressUser } from '../../helper/ApiHelper'
import { AppContext } from '../../context';
import Style_Detail_Order from '../../styles/Style_Detail_Order';
import colors from '../../styles/colors';

const Page_Detail_Order = (props) => {
  const { navigation, route } = props;
  const { order, user } = route.params
  const { users } = useContext(AppContext);
  const [address, setAddress] = useState([]);

  // Định nghĩa màu cho từng status
  const statusColors = {
    "Đang xử lý": colors.Blue,
    "Đang giao hàng": colors.Orange,
    "Đã giao": colors.Green
  };

  // Hàm lấy dữ liệu địa chỉ của user
  const getAddressUser = async () => {
    if (!users || !users._id) return;

    try {
      const response = await api_getAddressUser(users._id);
      if (response.status == true && response.data.length > 0) {
        setAddress(response.data[0]);
      }
      console.log('data địa chỉ: ', response)
    } catch (e) {
      console.log(e);
    }
  };

  // Hàm gọi getAddressUser
  useEffect(() => {
    getAddressUser();
  }, [users]);

  // Hàm render address
  const renderAddress = () => {
    return (
      <Text>
        Địa chỉ: <Text>
          {address.detail}, {address.commune}, {address.district}, {address.province}
        </Text>
      </Text>
    )
  };

  return (
    <ScrollView style={Style_Detail_Order.container}>
      <TouchableOpacity
        style={Style_Detail_Order.navigation}
        onPress={() => navigation.navigate('MyOrders')}>
        <Image
          source={require('../../assets/icon/icon_long_arrow.png')}
          style={Style_Detail_Order.img_icon} />

        <Text style={Style_Detail_Order.text_navigation}>Chi tiết đơn hàng</Text>
      </TouchableOpacity>

      <Text style={Style_Detail_Order.title}>Đơn hàng #{order._id}</Text>

      <View style={Style_Detail_Order.container_title}>
        <Text
          style={[Style_Detail_Order.status, { color: statusColors[order.status] }]}>
          {order.status}
        </Text>

        <Text style={Style_Detail_Order.date}>{order.date}</Text>
      </View>

      <View>
        <Text>Người nhận</Text>
        <Text>{users.name}</Text>
        <Text>{users.phone_number}</Text>
        {renderAddress()}
      </View>

    </ScrollView>
  )
}

export default Page_Detail_Order