import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    width={32.31}
    height={32}>
    <Path fill="#fff" d="M1 1h32.309v30H1z" />
    <Path
      stroke="#000"
      fill={props.focused ? '#000' : null}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.462 12.826v17.02A1.154 1.154 0 0 0 5.616 31h6.923v-9.808a1.73 1.73 0 0 1 1.73-1.731h5.77a1.73 1.73 0 0 1 1.731 1.73V31h6.924a1.154 1.154 0 0 0 1.153-1.154v-17.02"
    />
    <Path
      stroke="#000"
      fill={props.focused ? '#000' : null}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M33.309 16 17.939 1.286c-.36-.38-1.203-.385-1.57 0L1 16M27.54 10.446V2.153h-3.462v4.976"
    />
  </Svg>
);
export default HomeIcon;
