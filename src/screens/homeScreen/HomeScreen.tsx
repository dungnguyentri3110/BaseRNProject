import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {hideLoading, showLoading} from '../../components/Loading/Loading';
import {useHomeController} from '../../controllers/homeController/useHomeController';
import {useAppSelector} from '../../data/locals/redux/hooks';
import {MusicModel} from '../../data/models/MusicModel';
import {RootParamList} from '../../navigations/MainNavigation';
import {Sizing} from '../../themes';
import {useTranslation} from 'react-i18next';
import configLanguage from '../../resources/Language.ts';
import IconPerson from '../../assets/svg/images/icon_person.svg';

type Props = NativeStackScreenProps<RootParamList, 'HomeScreen'>;
export default function HomeScreen({navigation, route}: Props) {
  const [loading, setLoading] = useState(false);

  const {getListMusic, incrementCount} = useHomeController();

  const count = useAppSelector(state => state.listMusic.counter);

  const listMusicSuccess = useAppSelector(state => state.listMusic.listMusic);
  const {t} = useTranslation();

  useEffect(() => {
    if (loading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [loading]);

  useEffect(() => {
    // getList()
  }, []);

  const getList = async () => {
    setLoading(true);
    await getListMusic();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const renderItem: ListRenderItem<MusicModel> = ({item, index}) => {
    return (
      <Text style={{margin: Sizing.size(20)}} key={item.id.toString()}>
        {item.name}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: Sizing.fontSize(30),
          marginBottom: Sizing.size(20),
        }}>{`HomeScreen ${count}`}</Text>
      <Text
        style={{fontSize: Sizing.fontSize(30), marginBottom: Sizing.size(20)}}>
        {t('title')}
      </Text>
      <IconPerson width={Sizing.size(20)} height={Sizing.size(20)} />
      <View
        style={{
          width: Sizing.size(100),
          height: Sizing.size(100),
          backgroundColor: 'red',
          borderRadius: Sizing.size(10),
        }}
      />
      <Text
        style={{
          fontSize: Sizing.fontSize(21),
          marginBottom: Sizing.size(20),
        }}>{`InCrement`}</Text>
      <Text
        style={{
          fontSize: Sizing.fontSize(21),
          marginBottom: Sizing.size(20),
        }}>{`DeCrement`}</Text>

      {/* <Button onPress={() => {
        dispatch(increment())
      }} title='InCrement' /> */}
      <Button
        onPress={() => {
          getList();
        }}
        title="DeCrement"
      />
      <Button
        onPress={() => {
          incrementCount();
          // const param: AccountScreenProps = {
          //   name: count.toString()
          // }
          // Navigation.navigate('AccountScreen', param)
          // navigation.navigate('AccountScreen', param)
        }}
        title="DeCrement"
      />
      <Button
        onPress={() => {
          console.log('Get language,', configLanguage.language);
          if (configLanguage.language === 'en') {
            configLanguage.changeLanguage('vi');
          } else {
            configLanguage.changeLanguage('en');
          }
        }}
        title="Change language"
      />
      {listMusicSuccess.data && listMusicSuccess.data!.length > 0 ? (
        <FlatList
          data={listMusicSuccess.data!}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
