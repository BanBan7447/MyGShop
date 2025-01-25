import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import Style_SignUp from '../../styles/Style_SignUp'

const Page_SignUp = (props) => {
  const { navigation } = props;

  return (
    <ScrollView>
      <View style={Style_SignUp.container}>
        <Image
          source={require('../../assets/image/logo_app_2.png')}
          style={Style_SignUp.img_logo} />

        <View>
          <Text style={Style_SignUp.title_page}>Đăng Ký</Text>

          <Text style={Style_SignUp.title_input}>Họ tên</Text>
          <TextInput
            style={Style_SignUp.text_input} />

          <Text style={Style_SignUp.title_input}>Số điện thoại</Text>
          <TextInput
            style={Style_SignUp.text_input}
            keyboardType='phone-pad'
            maxLength={10} />

          <Text style={Style_SignUp.title_input}>Email</Text>
          <TextInput
            style={Style_SignUp.text_input} />

          <Text style={Style_SignUp.title_input}>Mật khẩu</Text>
          <TextInput
            style={Style_SignUp.text_input} />

          <TouchableOpacity style={[Style_SignUp.btn_signUp, { marginTop: 8 }]}>
            <Text style={Style_SignUp.text_btn}>Đăng Ký</Text>
          </TouchableOpacity>

          <Text style={Style_SignUp.text_caption}>Bạn đã sử dụng GShop?</Text>
          <TouchableOpacity
            style={Style_SignUp.btn_login}
            onPress={() => navigation.navigate('Login')}>
            <Text style={Style_SignUp.text_btn}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Page_SignUp