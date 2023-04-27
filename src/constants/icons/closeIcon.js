import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CloseIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    width={30}
    height={30}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21 1 1M21 1 1 21"
    />
  </Svg>
);
export default CloseIcon;
