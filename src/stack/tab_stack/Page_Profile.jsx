import { View, Text, TouchableOpacity, Button, Image } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Page_Profile = (props) => {
  const { navigation } = props;

  const { users, setUsers } = useContext(AppContext); // Lấy thông tin người dùng từ Context

  // Hàm đăng xuất
  const onLogout = async () => {
    setUsers(null); // Xóa thông tin người dùng trong Context
    await AsyncStorage.removeItem('userInfo');
  }

  return (
    <View>
      <Text>Page_Profile</Text>

      {users ? (
        <View>
          <Image
            source={{uri: users.avatar}}
            style={{width: 100, height: 100}}/>
          <Text>{users.name}</Text>
          <Text>{users.email}</Text>
          <Text>{users.phone}</Text>

          <Button title='Đăng xuất' onPress={() => onLogout()}/>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Đăng nhập/Đăng ký</Text>
        </TouchableOpacity>
      )}

    </View>
  )
}

export default Page_Profile