import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Style_Cart from '../../styles/Style_Cart'

const Page_Cart = () => {
  return (
    <View style={Style_Cart.container}>
      <Text style={Style_Cart.title_cart}>
        Giỏ hàng (<Text>0</Text>)
      </Text>

      <TouchableOpacity style={Style_Cart.btn_payment}>
        <Text style={Style_Cart.text_payment}>Thanh Toán</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Page_Cart