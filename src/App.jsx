import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  StatusBar,
  useColorScheme
} from 'react-native'
import MainNavigator from './navigation/navigator'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
