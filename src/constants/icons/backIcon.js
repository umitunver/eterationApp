import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    width={22}
    height={24}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12 22 2 12 12 2M3.389 12h20.278"
    />
  </Svg>
);
export default BackIcon;
