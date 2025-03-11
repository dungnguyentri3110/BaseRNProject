import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width} = Dimensions.get('screen');

const baseWidth = 375;

const size = (size: number) => {
  const ratioWidth = width / baseWidth;
  return size * ratioWidth;
};

const fontSize = (size: number) => {
  const ratioWidth = width / baseWidth;

  const newSize = size * ratioWidth;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default {
  size,
  fontSize,
};
