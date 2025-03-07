import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import { hideLoading, showLoading } from '../../components/Loading/Loading'
import { useHomeController } from '../../controllers/homeController/useHomeController'
import { useAppSelector } from '../../data/locals/redux/hooks'
import { MusicModel } from '../../data/models/MusicModel'
import { RootParamList } from '../../navigations/MainNavigation'
import { Sizing } from '../../themes'


type Props = NativeStackScreenProps<RootParamList, 'HomeScreen'>
export default function HomeScreen({ navigation, route }: Props) {

  const [loading, setLoading] = useState(false)

  const { getListMusic, incrementCount } = useHomeController()

  const count = useAppSelector(state => state.listMusic.counter)

  const listMusicSuccess = useAppSelector(state => state.listMusic.listMusic);

  useEffect(() => {
    if (loading) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [loading])

  useEffect(() => {
    // getList()
  }, [])

  const getList = async () => {
    setLoading(true)
    await getListMusic()
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  const renderItem: ListRenderItem<MusicModel> = ({ item, index }) => {
    return (
      <Text style={{ margin: Sizing.size(20) }} key={item.id.toString()}>{item.name}</Text>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: Sizing.fontSize(30), marginBottom: Sizing.size(20) }}>{`HomeScreen ${count}`}</Text>
      <View style={{
        width: Sizing.size(100),
        height: Sizing.size(100),
        backgroundColor: 'red',
        borderRadius: Sizing.size(10)
      }} />
      <Text style={{ fontSize: Sizing.fontSize(21), marginBottom: Sizing.size(20) }}>{`InCrement`}</Text>
      <Text style={{ fontSize: Sizing.fontSize(21), marginBottom: Sizing.size(20) }}>{`DeCrement`}</Text>

      {/* <Button onPress={() => {
        dispatch(increment())
      }} title='InCrement' /> */}
      <Button onPress={() => {
        getList()
      }} title='DeCrement' />
      <Button onPress={() => {
        incrementCount()
        // const param: AccountScreenProps = {
        //   name: count.toString()
        // }
        // Navigation.navigate('AccountScreen', param)
        // navigation.navigate('AccountScreen', param)
      }} title='DeCrement' />
      {listMusicSuccess.data && listMusicSuccess.data!.length > 0 ? (
        <FlatList data={listMusicSuccess.data!} keyExtractor={(item, index) => item.id.toString()} renderItem={renderItem} />
      ) : <></>}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})