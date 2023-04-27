import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
    width={20}
    height={20}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 7.05a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2A59FE"
      fillOpacity={0.3}
      fillRule="evenodd"
      d="M12 7.05a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M12 7.05a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SearchIcon;
