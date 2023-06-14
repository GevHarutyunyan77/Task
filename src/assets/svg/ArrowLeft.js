import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../../constants/ratio';

function ArrowLeft({size}) {
  return (
    <Svg
      width={Sizes(size)}
      height={Sizes(size)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 12H5m0 0l6 6m-6-6l6-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowLeft;
