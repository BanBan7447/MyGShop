import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import Style_Page_Cart from './Style_Page_Cart';
import { CartContext } from './CartContext';

const Page_Cart = ({ route }) => {
  const { cart, setCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]); // Quản lý các sản phẩm được chọn
  const [totalItems, setTotalItems] = useState(0); // Tổng số lượng sản phẩm trong giỏ hàng
  const [totalPrice, setTotalPrice] = useState(0); // Tổng giá trị của các sản phẩm đã chọn
  const [isCheckedAll, setIsCheckedAll] = useState(false); // Quản lý checkbox "Chọn tất cả"

  // Tự động chọn tất cả sản phẩm lần đầu khi vào giỏ hàng
  useEffect(() => {
    if (cart.length > 0 && selectedItems.length === 0) {
      setSelectedItems(cart.map(item => item.id)); // chọn tất cả sản phẩm
      setIsCheckedAll(true); // đánh dấu là đã chọn tất cả
    }
  }, [cart])

  // Tính tổng số sản phẩm giỏ hàng
  useEffect(() => {
    const ValueTotalItems = cart.length
    setTotalItems(ValueTotalItems);
  }, [cart]);

  // Tính tổng giá trị của các sản phẩm được chọn
  useEffect(() => {
    const totalSelectedPrice = cart
      .filter(item => selectedItems.includes(item.id)) // Lọc sản phẩm đã chọn
      .reduce((total, item) => total + item.quantity * item.price, 0); // Tính tổng giá trị
    setTotalPrice(totalSelectedPrice.toLocaleString('vi-VN')); // Cập nhật tổng giá
  }, [selectedItems, cart])

  // Hàm xử lý khi checkbox được chọn hoặc bỏ chọn
  const toggleSelectItems = (itemId) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        // Nếu item đã được chọn, bỏ chọn
        const updateItems = prevSelectedItems.filter(id => id !== itemId);
        setIsCheckedAll(false); // Nếu bỏ chọn 1 sản phẩm thì không còn "Chọn tất cả"
        return updateItems
      } else {
        // Nếu item chưa được chọn, thêm vào danh sách
        const updateItems = [...prevSelectedItems, itemId];
        if (updateItems.length === cart.length) {
          setIsCheckedAll(true); // Nếu chọn đủ sản phẩm thì đánh dấu "Chọn tất cả"
        }
        return updateItems;
      }
    })
  }

  // Hàm xử lý checkbox chọn tất cả
  const togggleSelectAll = () => {
    if (isCheckedAll) {
      // Nếu "Chọn tất cả" đang bật, bỏ chọn tất cả
      setSelectedItems([]);
    } else {
      // Nếu "Chọn tất cả" đang tắt, chọn tất cả sản phẩm
      setSelectedItems(cart.map(item => item.id));
    }
    setIsCheckedAll(!isCheckedAll);
  }

  // Đồng bộ trạng thái chọn tất cả
  useEffect(() => {
    setIsCheckedAll(selectedItems.length === cart.length && cart.length > 0);
  }, [selectedItems, cart])

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId))
  }

  // Hàm giảm số lượng sản phẩm
  const minusItem = (itemId) => {
    setCart(prevCart => {
      const updateCart = prevCart.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Kiểm tra nếu số lượng sản phẩm là 1 sau khi giảm
      const productToDelete = updateCart.find(item => item.id === itemId && item.quantity === 1);
      if (productToDelete) {
        // Xóa sản phẩm khỏi giỏ hàng nếu số lượng dưới 1
        return updateCart.filter(item => item.id !== itemId);
      }
      return updateCart;
    });
  };

  // Hàm tăng số lượng sản phẩm
  const plusItem = (itemId) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }

  // Hàm render
  const renderCartItems = ({ item }) => {
    const isChecked = selectedItems.includes(item.id); // Kiểm tra sản phẩm đã được chọn chưa

    return (
      <View style={Style_Page_Cart.container_checkbox}>
        {/* Checkbox */}
        <TouchableOpacity
          onPress={() => toggleSelectItems(item.id)}
          style={[Style_Page_Cart.checkbox, isChecked && Style_Page_Cart.checkbox_selected]}>

          {isChecked && <Image style={Style_Page_Cart.icon_tick} source={require('../assets/icon/icon_tick_white.png')} />}
        </TouchableOpacity>

        {/* Hiển thị sản phẩm */}
        <Image source={item.image} style={Style_Page_Cart.img_product} />
        <View style={{ marginLeft: 10 }}>
          <Text>{item.name}</Text>
          <Text>{item.price.toLocaleString('vi-VN')}đ</Text>

          {/* Hiển thị số lượng */}
          <View style={Style_Page_Cart.container_quantity}>
            <TouchableOpacity style={Style_Page_Cart.btn_quantity} onPress={() => minusItem(item.id)}>
              <Image style={Style_Page_Cart.icon_quantity} source={require('../assets/icon/icon_minus.png')} />
            </TouchableOpacity>

            <Text>{item.quantity}</Text>

            <TouchableOpacity style={Style_Page_Cart.btn_quantity} onPress={() => plusItem(item.id)}>
              <Image style={Style_Page_Cart.icon_quantity} source={require('../assets/icon/icon_plus.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Nút xóa */}
        <TouchableOpacity style={Style_Page_Cart.btn_delete} onPress={() => removeItem(item.id)}>
          <Image style={Style_Page_Cart.icon_delete} source={require('../assets/icon/icon_x_black.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={Style_Page_Cart.container}>
      <Text style={Style_Page_Cart.title}>
        Giỏ hàng (<Text>{totalItems}</Text>)
      </Text>

      <FlatList
        data={cart}
        renderItem={renderCartItems}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false} />

      <View style={Style_Page_Cart.PaymentContainer}>
        <View style={Style_Page_Cart.Container_checkBoxAll}>
          <View style={Style_Page_Cart.CheckBoxAll}>
            {/* Checkbox */}
            <TouchableOpacity
              onPress={togggleSelectAll}
              style={[Style_Page_Cart.checkbox, isCheckedAll && Style_Page_Cart.checkbox_selected]}>

              {isCheckedAll && <Image style={Style_Page_Cart.icon_tick} source={require('../assets/icon/icon_tick_white.png')} />}
            </TouchableOpacity>

            <Text>Tất cả</Text>
          </View>

          <Text style={Style_Page_Cart.text_totalPrice}>{totalPrice}đ</Text>
        </View>

        <TouchableOpacity style={Style_Page_Cart.btn_payment}>
          <Text style={Style_Page_Cart.text_payment}>Thanh toán</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Page_Cart