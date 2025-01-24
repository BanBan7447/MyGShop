import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import Style_Login from '../../styles/Style_Login'

const Page_Login = () => {
  return (
    <View style={Style_Login.container}>
      <Image
        source={require('../../assets/image/logo_app_2.png')}
        style={Style_Login.img_logo} />

      <View style={Style_Login.container_form}>
        <Text style={Style_Login.title_page}>Đăng Nhập</Text>

        <Text style={Style_Login.title_input}>Email hoặc số điện thoại</Text>
        <TextInput
          style={Style_Login.text_input} />

        <Text style={Style_Login.title_input}>Mật khẩu</Text>
        <TextInput
          style={Style_Login.text_input} />

        <Text style={Style_Login.text_forgot}>Quên mật khẩu?</Text>

        <TouchableOpacity style={Style_Login.btn_login}>
          <Text style={Style_Login.text_btn}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={Style_Login.text_caption}>Bạn mới sử dụng GShop?</Text>
        <TouchableOpacity style={Style_Login.btn_signUp}>
          <Text style={Style_Login.text_btn}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page_Login