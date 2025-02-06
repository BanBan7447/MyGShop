import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getDetailProduct } from '../../helper/ApiHelper';

import Style_Detail from '../../styles/Style_Detail';
import colors from '../../styles/colors';
import FastImage from 'react-native-fast-image';

const Page_Detail = (props) => {
    const { navigation, route } = props;

    const { productId } = route?.params;
    const [product, setProduct] = useState(null);

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
    // const imageUrls = product?.image?.map((image) => ({ url: image })) || [];

    // Mở model xem ảnh
    const openImageModel = (index) => {
        setImageIndex(index);
        setIsModelVisible(true);
    };

    // Đóng model xem ảnh
    const closeImageModel = () => {
        setIsModelVisible(false);
    };

    return (
        <ScrollView style={Style_Detail.container}>
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

                    <Text style={Style_Detail.text_cart}>0</Text>
                </TouchableOpacity>
            </View>

            {product ? (
                <>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            product.image.map((image, index) => (
                                <FastImage
                                    key={index}
                                    style={Style_Detail.img_product}
                                    source={{
                                        uri: image,
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode='contain'
                                />
                            ))
                        }
                    </ScrollView>

                    {/* <Image
                        style={Style_Detail.img_product}
                        source={{ uri: imageProduct }} /> */}

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
                            disabled={isOutStock}>

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