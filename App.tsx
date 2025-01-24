import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Page_Splash from './src/stack/page_stack/Page_Splash'
import Page_Login from './src/stack/page_stack/Page_Login'
import Page_SignUp from './src/stack/page_stack/Page_SignUp'

const App = () => {
  return (
    <View style={style.container}>
      <Page_SignUp></Page_SignUp>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App