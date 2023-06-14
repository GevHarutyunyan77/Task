import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../../constants/ratio';
import colors from '../colors';

function CarSVG({size, active}) {
  return (
    <Svg
      width={Sizes(size)}
      height={Sizes(size)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 00.74-.627L5.5 19h13l.395 2.373a.75.75 0 00.74.627h1.615a.75.75 0 00.75-.75v-6.447a5.954 5.954 0 00-1-3.303l-.78-1.17a1.994 1.994 0 01-.178-.33h.994a.75.75 0 00.671-.415l.25-.5A.75.75 0 0021.287 8H19.6l-.31-1.546a2.5 2.5 0 00-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 00-1.886 1.944L4.399 8H2.714a.75.75 0 00-.67 1.085l.25.5a.75.75 0 00.67.415h.995a1.999 1.999 0 01-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 00.34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 01.377-.39C8.346 6.157 10 6 12 6s3.654.156 4.952.458a.5.5 0 01.378.389l.631 3.157zM5.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={active ? colors.blue : '#000'}
      />
    </Svg>
  );
}

export default CarSVG;
