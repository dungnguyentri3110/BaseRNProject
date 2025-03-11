import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextStyle,
  Platform,
} from 'react-native';
import {Sizing} from '../../themes';

type BaseTextProps = {
  text: string;
  style?: TextStyle;
};

type BaseTextState = {};

class BaseText extends Component<BaseTextProps, BaseTextState> {
  render() {
    return (
      <Text style={[styles.defaultStyle, this.props.style ?? {}]}>
        {this.props.text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily:
      Platform.OS === 'android'
        ? 'hiragino-kaku-gothic-pro-w6'
        : 'Hiragino Kaku Gothic Pro W6',
    fontSize: Sizing.fontSize(12),
    fontWeight: '600',
  },
});

export default BaseText;
