import { View, Text } from 'react-native'
import React, { useState } from 'react'

import Tab_Navigation from './Tab_Navigation'
import Page_Splash from '../stack/page_stack/Page_Splash'
import Page_Login from '../stack/page_stack/Page_Login'
import Page_SignUp from '../stack/page_stack/Page_SignUp'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Page_Search from '../stack/page_stack/Page_Search'
const Stack = createNativeStackNavigator();

const Stack_Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      {/* Các màn hình chung */}
      <Stack.Screen name='Splash' component={Page_Splash} />
      <Stack.Screen name='Tab' component={Tab_Navigation} />
      <Stack.Screen name='Login' component={Page_Login} />
      <Stack.Screen name='SignUp' component={Page_SignUp} />
      <Stack.Screen name='Search' component={Page_Search} />
    </Stack.Navigator>
  )
}

export default Stack_Navigation