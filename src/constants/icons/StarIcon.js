import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const StarIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill={props.bgColor ? '#FFB800' : '#D9D9D9'}
      d="m12 0 2.694 8.292h8.719l-7.054 5.124 2.694 8.292L12 16.584l-7.053 5.124 2.694-8.292L.587 8.292h8.719L12 0Z"
    />
  </Svg>
);
export default StarIcon;
