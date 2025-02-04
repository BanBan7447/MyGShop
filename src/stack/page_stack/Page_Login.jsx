import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useContext, useState } from 'react'

import Style_Login from '../../styles/Style_Login'

import { login } from '../../helper/ApiHelper'
import { AppContext } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Page_Login = (props) => {
  const { navigation } = props;
  const { users, setUsers } = useContext(AppContext);

  const [email_phone, setEmail_Phone] = useState("tranbichngoc@gmail.com");
  const [password, setPassword] = useState("Ngoc1234");
  const [hidePassword, setHidePassword] = useState("false");

  // Hàm đăng nhập
  const onLogin = async () => {
    // Kiểm tra đã nhập thông tin chưa
    if (!email_phone || !password) {
      Alert.alert("Chưa nhập thông tin", "Vui lòng nhập thông tin đầy đủ");
      return;
    }

    try {
      const body = {
        email: email_phone.includes('@') ? email_phone : null, // Trả về email nếu có @ và ngược lại
        phone: email_phone.includes('@') ? null : email_phone,
        password: password,
      }

      const response = await login(body);

      if (response) {
        setUsers(response); // Lưu thông tin người dùng vào user context

        // Lưu thông tin người dùng vào AsyncStorage.
        await AsyncStorage.setItem('userInfo', JSON.stringify(response));

        ToastAndroid.show('Đăng nhập thành công', ToastAndroid.LONG);
        navigation.navigate('Tab', { screen: 'Profile' });
        return;
      }

    } catch (e) {
      Alert.alert('Sai thông tin', 'Email/SĐT hoặc Mật khẩu không đúng')
    }
  }

  return (
    <View style={Style_Login.container}>
      <Image
        source={require('../../assets/image/logo_app_2.png')}
        style={Style_Login.img_logo} />

      <View style={Style_Login.container_form}>
        <Text style={Style_Login.title_page}>Đăng Nhập</Text>

        <Text style={Style_Login.title_input}>Email hoặc số điện thoại</Text>
        <TextInput
          style={Style_Login.text_input}
          value={email_phone}
          onChangeText={text => setEmail_Phone(text)} />

        <Text style={Style_Login.title_input}>Mật khẩu</Text>
        <View style={Style_Login.container_Password}>
          <TextInput
            style={Style_Login.text_input}
            value={password}
            secureTextEntry={!hidePassword}
            onChangeText={text => setPassword(text)} />

          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={Style_Login.eye_icon}>
            <Image
              source={hidePassword
                ? require('../../assets/icon/icon_show.png')
                : require('../../assets/icon/icon_hide.png')}
                style={Style_Login.img_icon} />
          </TouchableOpacity>
        </View>

        <Text style={Style_Login.text_forgot}>Quên mật khẩu?</Text>

        <TouchableOpacity
          style={Style_Login.btn_login}
          onPress={() => onLogin()}>
          <Text style={Style_Login.text_btn}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={Style_Login.text_caption}>Bạn mới sử dụng GShop?</Text>
        <TouchableOpacity
          style={Style_Login.btn_signUp}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={Style_Login.text_btn}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page_Login