import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useContext } from 'react'

import Style_Cart from '../../styles/Style_Cart'
import { AppContext } from '../../context'

const Page_Cart = (props) => {
  const { navigation } = props

  const { cart } = useContext(AppContext)
  return (
    <View style={Style_Cart.container}>
      <Text style={Style_Cart.title_cart}>
        Giỏ hàng (<Text>{cart ? cart.length : 0}</Text>)
      </Text>

      {
        cart && cart.length > 0 ? (
          <View style={Style_Cart.container_cart}>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
              renderItem={({ item }) => (
                <View>
                  {
                    item.image && item.image.length > 0 && (
                      <Image
                        source={{ uri: item.image[0] }}
                        style={{ width: 60, height: 60 }} />
                    )
                  }

                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                  <Text>{item.quantity}</Text>


                </View>
              )}
            />

            <View style={Style_Cart.container_bottom}>
              <TouchableOpacity style={Style_Cart.btn_payment}>
                <Text style={Style_Cart.text_payment}>Thanh Toán</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={Style_Cart.container_empty}>
            <Image
              source={require('../../assets/icon/icon_empty_cart.png')}
              style={Style_Cart.img_icon_empty} />
            <Text style={Style_Cart.title_empty}>Giỏ hàng của bạn trống</Text>
            <Text style={Style_Cart.text_empty}>Hãy làm đầy giỏ hàng với các sản phẩm bạn yêu thích</Text>

            <TouchableOpacity
              style={Style_Cart.btn_shopping}
              onPress={() => navigation.navigate('Tab', { screen: 'Home' })}>
              <Text style={Style_Cart.text_shopping}>Bắt đầu mua sắm</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  )
}

export default Page_Cart