import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const FavIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    width={38}
    height={33}>
    <Path
      stroke="#000"
      fill={props.focused ? '#000' : null}
      strokeLinejoin="round"
      strokeWidth={2}
      d="M33.762 12.539H21.358L17.608 1l-3.75 11.539H1.454l10.096 6.923L7.656 31l9.952-7.212L27.56 31l-3.894-11.538 10.096-6.923Z"
    />
  </Svg>
);
export default FavIcon;
