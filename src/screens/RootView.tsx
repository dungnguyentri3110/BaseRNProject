
import React from 'react'
import { RootStack } from '../navigations/MainNavigation'
import HomeScreen from './homeScreen/HomeScreen'
import AccountScreen from './AccountScreen/AccountScreen'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../navigations/Navigation'

export default function RootView() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={'HomeScreen'} screenOptions={{
        headerShown: false
      }}>
        <RootStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <RootStack.Screen name={'AccountScreen'} component={AccountScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
