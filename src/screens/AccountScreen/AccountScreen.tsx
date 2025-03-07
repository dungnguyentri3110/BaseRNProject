import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { RootParamList } from '../../navigations/MainNavigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootParamList, 'AccountScreen'>


export default function AccountScreen({ navigation, route }: Props) {
  

  const params = route.params

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'black' }}>{`AccountScreen: ${params?.name ?? ''}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})