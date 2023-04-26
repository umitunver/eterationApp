import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BasketIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    width={38}
    height={33}>
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.984 11.506a1.673 1.673 0 0 0-1.675 1.658c-.002.153.02.305.066.452l4.243 14.963A3.32 3.32 0 0 0 8.828 31h19.108a3.356 3.356 0 0 0 3.225-2.421l4.244-14.963.05-.452a1.673 1.673 0 0 0-1.675-1.658H2.984ZM18.85 24.645a3.453 3.453 0 1 1 3.47-3.453 3.47 3.47 0 0 1-3.47 3.453Z"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.502 11.506 18.382 1l7.88 10.506"
    />
  </Svg>
);
export default BasketIcon;
