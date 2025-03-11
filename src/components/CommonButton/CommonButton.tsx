// @flow
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Sizing} from '../../themes';
import {Component, JSX} from 'react';
import BaseText from '../BaseText/BaseText.tsx';

export enum ButtonType {
  outline,
  noBackground,
  default,
}

interface CommonButtonProps {
  children?: JSX.Element;
  textButton?: string;
  buttonType?: ButtonType;
  onPress: () => void;
  disable?: boolean;
  backgroundColor?: string;
}

interface CommonButtonState {}

class CommonButton extends Component<CommonButtonProps, CommonButtonState> {
  constructor(props: CommonButtonProps) {
    super(props);
  }

  buttonStyle = () => {
    switch (this.props.buttonType) {
      case ButtonType.outline: {
        return {
          ...styles.containerOutline,
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : Colors.transparent,
        };
      }
      case ButtonType.noBackground: {
        return {...styles.container, backgroundColor: Colors.transparent};
      }
      default: {
        return {
          ...styles.container,
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : Colors.bluePrimary,
        };
      }
    }
  };

  titleButtonStyle = () => {
    switch (this.props.buttonType) {
      case ButtonType.outline: {
        return styles.textButtonOutline;
      }
      case ButtonType.noBackground: {
        return {...styles.textButton, color: Colors.textGray};
      }
      default: {
        return styles.textButton;
      }
    }
  };

  render() {
    const {textButton, onPress, disable} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.3}
        disabled={disable}>
        <View style={this.buttonStyle()}>
          <BaseText text={textButton ?? ''} style={this.titleButtonStyle()} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default CommonButton;

const styles = StyleSheet.create({
  container: {
    height: Sizing.size(49),
    backgroundColor: Colors.bluePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  containerOutline: {
    height: Sizing.size(49),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.bluePrimary,
  },
  textButton: {
    fontSize: Sizing.fontSize(12),
    color: Colors.white,
  },
  textButtonOutline: {
    fontSize: Sizing.fontSize(12),
    color: Colors.bluePrimary,
  },
});
