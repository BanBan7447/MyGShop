import { View, Text, Image, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { getDetailProduct } from '../../helper/ApiHelper';

import Style_Detail from '../../styles/Style_Detail';
import colors from '../../styles/colors';

import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';

import { AppContext } from '../../context';

const Page_Detail = (props) => {
    const { navigation, route } = props;

    const { productId } = route?.params;
    const [product, setProduct] = useState(null);
    const { cart, setCart } = useContext(AppContext);

    // Trạng thái giỏ hàng
    const [showNotification, setShowNotification] = useState(false);

    const screenWidth = Dimensions.get('window').width; // Lấy chiều rộng màn hình

    // Thêm trạng thái để kiểm tra nếu sản phẩm đã hết hàng
    const isOutStock = product?.state === 'Hết hàng';

    // Hàm lấy dữ liệu sản phẩm
    const funGetDetailProduct = async () => {
        try {
            const dataProduct = await getDetailProduct(productId);
            if (dataProduct) {
                setProduct(dataProduct);
            }
        } catch (e) {
            console.log(e);
        }
    };

    // Gọi hàm funGetDetailProduct khi render
    useEffect(() => {
        funGetDetailProduct();
    }, [productId]);

    const imageProduct = product?.image?.[0] || '';

    const addToCart = () => {
        if (product && product._id) {
            setCart((prevCart) => {
                const newCart = prevCart ? [...prevCart] : [];

                // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
                const existingIndex = newCart.findIndex(item => item._id === product._id);
                if (existingIndex !== -1) {
                    // Nếu đã có thì tăng số lượng
                    newCart[existingIndex].quantity += 1;
                } else {
                    newCart.push({ ...product, quantity: 1 });
                }

                return newCart;
            });
        }

        setShowNotification(true) // Hiển thị thông báo khi thêm vào giỏ hàng

        // Ẩn sau 3 giây
        setTimeout(() => {
            setShowNotification(false);
        }, 3000)
    };

    return (
        <ScrollView style={Style_Detail.container}>
            {/* {
                showNotification && (
                    <View style={[
                        Style_Detail.card,
                    ]}>
                        <Image
                            style={Style_Detail.img_icon}
                            source={require('../../assets/icon/icon_check_white.png')} />
                        <Text style={Style_Detail.text_card}>Đã thêm vào giỏ hàng</Text>
                    </View>
                )
            } */}

            <View style={Style_Detail.container_title}>
                <TouchableOpacity
                    style={Style_Detail.navigation}
                    onPress={() => navigation.navigate('Tab')}>
                    <Image
                        source={require('../../assets/icon/icon_long_arrow.png')}
                        style={Style_Detail.img_icon} />

                    <Text style={Style_Detail.text_navigation}>Sản phẩm</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Style_Detail.cart}
                    onPress={() => navigation.navigate('Tab', { screen: 'Cart' })}>
                    <Image
                        source={require('../../assets/icon/icon_shopping_cart.png')}
                        style={Style_Detail.img_icon_cart} />

                    <Text style={Style_Detail.text_cart}>{cart ? cart.length : 0}</Text>
                </TouchableOpacity>
            </View>

            {product ? (
                <>
                    <FlatList
                        data={product.image}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        initialNumToRender={5}
                        renderItem={({ item }) => (
                            <FastImage
                                style={{
                                    width: screenWidth * 1,
                                    height: 240,
                                    backgroundColor: colors.Black
                                }}
                                source={{
                                    uri: item,
                                    priority: FastImage.priority.high,
                                    cache: FastImage.cacheControl.immutable,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        )}
                    />

                    <View style={Style_Detail.container_info}>
                        <Text style={Style_Detail.text_name}>{product.name}</Text>
                        <Text style={Style_Detail.text_price}>{product.price.toLocaleString('vi-VN')}đ</Text>

                        <Text style={Style_Detail.text_title_state}>
                            Trạng thái: <Text style={{
                                color: product.state === 'Hết hàng' ? colors.Red :
                                    (product.state.startsWith('Chỉ còn') ? colors.Orange : colors.Green)
                            }}>
                                {product.state}
                            </Text>
                        </Text>

                        <Text style={Style_Detail.text_title_describe}>Mô tả</Text>

                        <Text style={Style_Detail.text_describe}>{product.describe}</Text>

                        <TouchableOpacity
                            style={[
                                Style_Detail.btn_AddCart,
                                { backgroundColor: isOutStock ? colors.Black : colors.Red }
                            ]}
                            disabled={isOutStock}
                            onPress={addToCart}>

                            <Text style={Style_Detail.text_AddCart}>
                                {isOutStock ? 'Sản phẩm đã hết hàng' : 'Thêm vào giỏ hàng'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </>
            ) : (
                <Text>Không tìm thấy sản phẩm</Text>
            )}

        </ScrollView>
    )
}

export default Page_Detail