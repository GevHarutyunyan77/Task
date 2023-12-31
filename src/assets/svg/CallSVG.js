import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../../constants/ratio';
import colors from '../colors';

function CallSVG({size}) {
  return (
    <Svg
      width={Sizes(size)}
      height={Sizes(size)}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M61.73 7173.996c-.463 1.407-2.277 2.109-3.573 1.992-1.77-.16-3.696-1.099-5.158-2.133-2.149-1.52-4.162-3.871-5.335-6.366-.829-1.763-1.015-3.931.218-5.538.456-.594.95-.911 1.69-.948 1.028-.05 1.172.538 1.525 1.454.263.685.614 1.384.81 2.094.367 1.325-.916 1.38-1.078 2.463-.1.683.727 1.599 1.101 2.086a10.105 10.105 0 002.608 2.403c.57.359 1.488 1.006 2.14.649 1.004-.55.91-2.243 2.313-1.67.727.296 1.431.723 2.125 1.097 1.073.577 1.023 1.175.614 2.417-.306.928.306-.928 0 0"
        transform="translate(-103 -7321) translate(56 160)"
        fill={colors.blue}
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default CallSVG;
