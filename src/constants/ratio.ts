import {Dimensions} from 'react-native';
let width = Dimensions.get('window').width;

export const ratio = width / 393;
export const Size: {[key: string]: number} = {};

for (let i = -20; i < 700; i++) {
  Size[`size${i}`] = i * ratio > i ? i : i * ratio;
}

export const Sizes = (size: number) => {
  return Size[`size${size}`];
};
