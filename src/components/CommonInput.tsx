// @flow
import * as React from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Colors, Sizing} from '../themes';
import BaseText from './BaseText/BaseText.tsx';

type CommonInputProps = {
  title: string;
  placeHolder: string;
  keyboardType?: KeyboardTypeOptions;
  password?: boolean;
};
export const CommonInput = ({
  title,
  placeHolder = '',
  keyboardType = 'default',
  password = false,
}: CommonInputProps) => {
  return (
    <View style={styles.container}>
      <BaseText text={title} style={styles.textTitle} />
      <View style={styles.containerInput}>
        <TextInput
          placeholder={placeHolder}
          keyboardType={keyboardType}
          secureTextEntry={password}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textTitle: {
    fontSize: Sizing.fontSize(16),
    lineHeight: Sizing.size(22),
    marginBottom: Sizing.size(8),
    color: Colors.textGray,
  },
  textInput: {
    fontSize: Sizing.fontSize(14),
    lineHeight: Sizing.size(20),
    color: Colors.textGray,
    paddingVertical: Sizing.size(9),
    textAlignVertical: 'top',
    fontFamily:
      Platform.OS === 'android'
        ? 'hiragino-kaku-gothic-pro-w6'
        : 'Hiragino Kaku Gothic Pro W6',
  },
  containerInput: {
    height: Sizing.size(48),
    borderWidth: 1,
    borderColor: Colors.grayBorder,
    borderRadius: 8,
    paddingHorizontal: Sizing.size(12),
    justifyContent: 'center',
  },
});
