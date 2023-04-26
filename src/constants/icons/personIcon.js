import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PersonIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.954 7.923c-.282 3.813-3.173 6.923-6.346 6.923s-6.068-3.11-6.346-6.923C8.974 3.957 11.786 1 15.608 1s6.635 3.029 6.346 6.923Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M15.608 19.462c-6.274 0-12.642 3.461-13.82 9.995-.142.787.304 1.543 1.128 1.543H28.3c.825 0 1.271-.756 1.13-1.543-1.18-6.534-7.548-9.995-13.822-9.995Z"
    />
  </Svg>
);
export default PersonIcon;
