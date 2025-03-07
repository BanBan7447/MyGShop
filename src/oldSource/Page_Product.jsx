import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import Style_Page_Product from '../oldSource/Style_Page_Product';
import colors from '../styles/colors';
import { CartContext } from './CartContext';

const Page_Product = ({ navigation }) => {
    // Data sản phẩm
    const {cart, setCart} = useContext(CartContext);

    const [product, setProduct] = useState([
        {
            id: 1, image: require('../assets/image/img_1.png'),
            name: 'MSN 04 SAZABI - Real Grade 1/144',
            price: 890000, rate: 43, state: "Còn hàng"
        },

        {
            id: 2, image: require('../assets/image/img_2.png'),
            name: 'Gundam Epyon (Mobile Suit Gundam Wing) - Real Grade 1/144',
            price: 829000, rate: 40, state: "Còn hàng"
        },

        {
            id: 3, image: require('../assets/image/img_3.png'),
            name: 'Gundam Astray Gold Frame Amatsu Mina - Real Grade 1/144',
            price: 529000, rate: 40, state: "Hết hàng"
        },

        {
            id: 4, image: require('../assets/image/img_4.png'),
            name: 'Tallgeese EW - Real Grade 1/144',
            price: 429000, rate: 40, state: "Còn hàng"
        },
    ]);

    // Trạng thái giỏ hàng
    const [showNotification, setNotification] = useState(false);

    // Hàm xử lý thêm vào giỏ hàng
    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItems => cartItems.id === item.id);
            if(existingItem) {
                // Nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng
                const updatedCart = [...prevCart];
                updatedCart[updatedCart.findIndex(cartItems => cartItems.id === item.id)].quantity += 1;
                return updatedCart;
            }else{
                // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng với số lượng là 1
                return [...prevCart, {...item, quantity: 1}];
            }
        });

        
        setNotification(true) // Hiển thị thông báo khi thêm vào giỏ

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    }

    // Render sản phẩm
    const renderProduct = ({ item }) => {
        const { image, name, price, rate, state } = item;

        // Xác định màu sắc cho trạng thái
        const stateColor = state === "Còn hàng" ? colors.Green : colors.Red;

        // Định dạng giá
        const formatPrice = price.toLocaleString('vi-VN')

        // Xác định màu của nút thêm vào giỏ hàng
        const buttonText = state === "Hết hàng" ? 'Hết hàng' : 'Thêm vào giỏ hàng';
        const buttonColor = state === "Còn hàng" ? colors.Red : colors.Black
        const isDisabled = state !== "Còn hàng"

        return (
            <View>
                <Image style={Style_Page_Product.img} source={image} />
                <Text style={Style_Page_Product.name}>{name}</Text>
                <Text style={Style_Page_Product.price}>{formatPrice}đ</Text>

                <Text style={Style_Page_Product.state}>
                    Trạng thái: <Text style={{ color: stateColor }}>{state}</Text>
                </Text>

                <TouchableOpacity
                    style={[Style_Page_Product.btn, { backgroundColor: buttonColor }]}
                    onPress={isDisabled ? null : () => addToCart(item)}
                    disabled={isDisabled}>
                    <Text style={Style_Page_Product.btn_text}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={Style_Page_Product.container}>
            <View style={Style_Page_Product.title}>
                <Text style={Style_Page_Product.title_text}>Sản phẩm</Text>

                <TouchableOpacity style={Style_Page_Product.cart}
                    onPress={() => navigation.navigate('Cart')}>

                    <Image style={Style_Page_Product.icon} source={require('../assets/icon/icon_shopping_cart.png')} />
                    <Text style={Style_Page_Product.title_text}>{cart.length}</Text>
                </TouchableOpacity>
            </View>

            {
                showNotification && (
                    <View style={Style_Page_Product.Card}>
                        <Image style={Style_Page_Product.icon_tick} source={require('../assets/icon/icon_check_white.png')} />
                        <Text style={Style_Page_Product.Card_Text}>Đã thêm vào giỏ hàng</Text>
                    </View>
                )
            }

            <FlatList
                data={product}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}  // Ẩn thanh cuộn dọc
                showsHorizontalScrollIndicator={false}  // Ẩn thanh cuộn ngang
            />
        </View>
    )
}

export default Page_Product