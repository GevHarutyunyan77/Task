import * as React from 'react';
import Svg, {Rect, ClipPath, Use, G, Path, Circle} from 'react-native-svg';
import {Sizes} from '../../constants/ratio';

function MapSVG({size}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="Google Maps"
      viewBox="0 0 512 512"
      width={Sizes(size)}
      height={Sizes(size)}>
      <Rect id="a" width={512} height={512} x={0} y={0} rx="15%" fill="#fff" />
      <ClipPath id="b">
        <Use xlinkHref="#a" />
      </ClipPath>
      <G clipPath="url(#b)">
        <Path fill="#35a85b" d="M0 512V0h512z" />
        <Path fill="#5881ca" d="M256 288L32 512h448z" />
        <Path fill="#c1c0be" d="M288 256L512 32v448z" />
        <Path stroke="#fadb2a" strokeWidth={71} d="M0 512L512 0" />
        <Path
          fill="none"
          stroke="#f2f2f2"
          strokeWidth={22}
          d="M175 173h50a50 54 0 11-15-41"
        />
        <Path
          fill="#de3738"
          d="M353 85a70 70 0 01140 0c0 70-70 70-70 157 0-87-70-87-70-157"
        />
        <Circle cx={423} cy={89} r={25} fill="#7d2426" />
      </G>
    </Svg>
  );
}

export default MapSVG;
