import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Page_Profile = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Text>Page_Profile</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Đăng nhập/Đăng ký</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Page_Profile