import {AccountScreenProps} from './NavigatorProps';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootParamList = {
  HomeScreen: undefined;
  AccountScreen: AccountScreenProps;
};

export const RootStack = createNativeStackNavigator<RootParamList>();
