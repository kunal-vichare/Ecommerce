import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation'
import { NavigationContainer } from '@react-navigation/native'



const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default App