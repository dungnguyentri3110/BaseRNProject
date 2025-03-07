import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {RootParamList} from './MainNavigation';

export const navigationRef = createNavigationContainerRef<RootParamList>();

export default class Navigation {
  static instance = navigationRef !== null && navigationRef !== undefined;

  static navigate = (screen: string, params?: any) => {
    if (!Navigation.instance) {
      return;
    }
    navigationRef.current?.dispatch(StackActions.push(screen, params));
  };

  static pop = (numScreenToPop: number = 1) => {
    if (!Navigation.instance) {
      return;
    }
    navigationRef.current?.dispatch(StackActions.pop(numScreenToPop));
  };

  static popTo = (screenName: string) => {
    if (!Navigation.instance) {
      return;
    }
    navigationRef.current?.dispatch(StackActions.popTo(screenName));
  };

  static popToTop = () => {
    if (!Navigation.instance) {
      return;
    }
    navigationRef.current?.dispatch(StackActions.popToTop());
  };

  static replace = (newScreen: string, params?: any) => {
    if (!Navigation.instance) {
      return;
    }
    navigationRef.current?.dispatch(StackActions.replace(newScreen, params));
  };

  static reset = (newScreen: string, params?: any) => {
    if (!Navigation.instance) {
      return;
    }
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: newScreen,
            params,
          },
        ],
      }),
    );
  };
}
