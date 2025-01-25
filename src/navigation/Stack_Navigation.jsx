import { View, Text } from 'react-native'
import React, { useState } from 'react'

import Tab_Navigation from './Tab_Navigation'
import Page_Splash from '../stack/page_stack/Page_Splash'
import Page_Login from '../stack/page_stack/Page_Login'
import Page_SignUp from '../stack/page_stack/Page_SignUp'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

const Stack_Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignUp'>
      {/* Các màn hình chung */}
      <Stack.Screen name='Splash' component={Page_Splash} />
      <Stack.Screen name='Tab' component={Tab_Navigation} />
      <Stack.Screen name='Login' component={Page_Login}/>
      <Stack.Screen name='SignUp' component={Page_SignUp}/>

      {/* Màn hình Đăng Nhập & Đăng Ký */}
      {/* Nếu chưa đăng nhập thì hiện 2 màn hình, và ngược lại */}
      {
        // !isLoggedIn && (
        //   <>
        //     {/* Render Component Đăng Nhập & Đăng Ký */}
        //     {/* Truyền hàm callback onLogin & onSignUp để thay đổi trạng thái */}
        //     <Stack.Screen name="Login">
        //       {() => <Page_Login onLogin={() => setIsLoggedIn(true)} />}
        //     </Stack.Screen>

        //     <Stack.Screen name="SignUp">
        //       {() => <Page_SignUp onSignUp={() => setIsLoggedIn(true)} />}
        //     </Stack.Screen>
        //   </>
        // )
      }
    </Stack.Navigator>
  )
}

export default Stack_Navigation