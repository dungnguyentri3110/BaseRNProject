import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Sizing} from '../../themes';
import IconBack from '../../assets/svg/icons/ic_arrow_back.svg';
import Navigation from '../../navigations/Navigation.ts';
import BaseText from '../BaseText/BaseText.tsx';

interface CommonHeaderProps {
  showBackIcon?: boolean;
  onBackPress?: () => void;
  title?: string;
}

const CommonHeader = ({
  showBackIcon = true,
  onBackPress,
  title = '',
}: CommonHeaderProps) => {
  const safeArea = useSafeAreaInsets();

  const onLeftPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      Navigation.pop();
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          height: Sizing.size(32) + safeArea.top + Sizing.size(12),
          paddingTop: safeArea.top + Sizing.size(12),
        },
      ]}>
      {showBackIcon ? (
        <TouchableOpacity onPress={onLeftPress}>
          <IconBack width={Sizing.size(32)} height={Sizing.size(32)} />
        </TouchableOpacity>
      ) : (
        <View style={styles.right} />
      )}
      <BaseText text={title ?? ''} style={styles.titleStyle} />
      <View style={styles.right} />
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    paddingHorizontal: Sizing.size(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: Sizing.fontSize(16),
    lineHeight: Sizing.size(22),
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  right: {
    width: Sizing.size(32),
    height: Sizing.size(32),
  },
});
