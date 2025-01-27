import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Page_Splash from './src/stack/page_stack/Page_Splash'
import Page_Login from './src/stack/page_stack/Page_Login'
import Page_SignUp from './src/stack/page_stack/Page_SignUp'
import { NavigationContainer } from '@react-navigation/native'
import Stack_Navigation from './src/navigation/Stack_Navigation'
import { index as AppContext } from './src/context'

const App = () => {
  return (
    <AppContext>
      <NavigationContainer>
        <View style={style.container}>
          <Stack_Navigation />
        </View>
      </NavigationContainer>
    </AppContext>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App