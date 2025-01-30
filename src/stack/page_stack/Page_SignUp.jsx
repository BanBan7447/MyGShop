import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ToastAndroid, Alert } from 'react-native'
import React, { useContext, useState } from 'react'

import Style_SignUp from '../../styles/Style_SignUp'

import { signUp } from '../../helper/ApiHelper'
import { AppContext } from '../../context'
import AxiosInstance from '../../helper/AxiosInstance'

const Page_SignUp = (props) => {
  const { navigation } = props;
  const { users, setUsers } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Hàm đăng ký
  const onSignUp = async () => {
    try {
      const body = {
        name: name,
        email: email,
        phone: phone,
        password: password
      }

      // Kiểm tra mật khẩu (ít nhất 1 chữ hoa, 1 chữ thường và 1 số)
      const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!checkPassword.test(password)) {
        Alert.alert('Sai mật khẩu', 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số')
        return; // Dừng hàm nếu mật khẩu không hợp lệ
      }

      const response = await signUp(body);

      if (response) {
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.LONG);
      } else {
        Alert.alert('Đăng ký thất bại', 'Email hoặc SĐT đã tồn tại')
      }

    } catch (e) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra trong quá trình đăng ký.');
    }
  }

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
            style={Style_SignUp.text_input}
            value={name}
            onChangeText={text => setName(text)} />

          <Text style={Style_SignUp.title_input}>Số điện thoại</Text>
          <TextInput
            style={Style_SignUp.text_input}
            keyboardType='phone-pad'
            maxLength={10}
            value={phone}
            onChangeText={text => setPhone(text)} />

          <Text style={Style_SignUp.title_input}>Email</Text>
          <TextInput
            style={Style_SignUp.text_input}
            value={email}
            onChangeText={text => setEmail(text)} />

          <Text style={Style_SignUp.title_input}>Mật khẩu</Text>
          <TextInput
            style={Style_SignUp.text_input}
            value={password}
            onChangeText={text => setPassword(text)} />

          <TouchableOpacity
            style={[Style_SignUp.btn_signUp, { marginTop: 8 }]}
            onPress={() => onSignUp()}>
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