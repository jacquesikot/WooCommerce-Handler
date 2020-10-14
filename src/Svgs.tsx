import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgProps } from './types';
import { theme } from './components';

export function CloseEye({ width, height, color }: SvgProps) {
  return (
    <Svg width={width} height={height ? height : 24 * 0.857} viewBox="0 0 14 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.901.75L1.825 10.826l1.06 1.06L12.963 1.812 11.902.75zM8.88 1.871L7 3.75A2.25 2.25 0 004.75 6L2.145 8.605C.813 7.375.25 6 .25 6S2.09 1.5 7 1.5c.65 0 1.28.14 1.879.371zm3.527 2.515A13.99 13.99 0 0113.75 6S10.682 10.5 7 10.5c-.233 0-.46-.01-.678-.03l6.084-6.084z"
        fill={color ? color : theme.colors.light}
      />
    </Svg>
  );
}

export function Eye({ width, height, color }: SvgProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 10" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .5C2.09.5.25 5 .25 5S2.09 9.5 7 9.5c3.682 0 6.75-4.5 6.75-4.5S10.682.5 7 .5zM4.75 5a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

// AppNav
export function HomeIcon({ width, height, color }: SvgProps) {
  return (
    <Svg width={width ? width : 20} height={height ? height : 20} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.568 6.96l-.001-.002L9.04.432A1.463 1.463 0 008 0c-.394 0-.764.153-1.042.432L.434 6.955l-.007.006a1.475 1.475 0 001.026 2.512h.26v4.803c0 .95.773 1.724 1.724 1.724H5.99c.26 0 .47-.21.47-.469v-3.765c0-.434.352-.787.786-.787h1.506c.434 0 .786.353.786.787v3.765c0 .26.21.469.47.469h2.553c.95 0 1.723-.773 1.723-1.724V9.473h.242c.393 0 .763-.153 1.041-.431a1.475 1.475 0 00.001-2.083z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function ProductsIcon({ width, height, color }: SvgProps) {
  return (
    <Svg width={width ? width : 23} height={height ? height : 15} viewBox="0 0 612 412" fill="none">
      <Path
        d="M289.052 91.691l-36.224 87.974a8.636 8.636 0 01-7.23 5.315L60.311 201.262a8.635 8.635 0 00-7.877 8.826l3.768 145.442a8.64 8.64 0 006.856 8.228l218.13 45.882a77.712 77.712 0 0016.173 1.665l.004-43.135V93.336c-.002-12.006-3.742-12.746-8.313-1.645zm-25.365 271.232l-81.886-13.187v-42.921h81.886v56.108zm-35.805-198.85L9.518 186.138c-6.671.674-11.532-6.18-8.69-12.252L58.973 49.6a8.636 8.636 0 016.262-4.835L305.169.696l-70.262 158.29a8.637 8.637 0 01-7.025 5.087zm323.807 37.189l-185.286-16.281a8.633 8.633 0 01-7.23-5.315l-36.225-87.974c-4.571-11.102-8.312-10.362-8.312 1.644v274.833l.004 43.135a77.668 77.668 0 0016.174-1.665l218.13-45.882a8.636 8.636 0 006.855-8.228l3.768-145.441a8.635 8.635 0 00-7.878-8.826zm-76.252 77.686l-10.233.283-.207 64.406c-.009 2.837-2.891 5.55-6.475 6.065l-16.771 2.412c-3.831.551-6.966-1.412-6.959-4.392l.156-67.651-11.705.324c-5.691.157-9.292-4.406-6.395-8.183l27.837-36.274c2.637-3.438 9.109-3.121 11.651.501l24.435 34.825c2.316 3.303-.613 7.552-5.334 7.684zm127.044-92.81l-218.364-22.065a8.634 8.634 0 01-7.025-5.088L306.831.695l239.934 44.069a8.64 8.64 0 016.263 4.835l58.145 124.286c2.841 6.073-2.021 12.927-8.692 12.253z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function OrdersIcon({ width, height, color }: SvgProps) {
  return (
    <Svg width={width ? width : 20} height={height ? height : 20} viewBox="0 0 512 512" fill="none">
      <Path
        d="M410.779 202.454c55.813 0 101.221-45.408 101.221-101.222C512 45.419 466.593.01 410.779.01c-55.815 0-101.222 45.408-101.222 101.221 0 55.814 45.408 101.223 101.222 101.223zM367.607 82.86l26.706 26.704 56.515-56.514 21.213 21.213-77.728 77.728-47.918-47.919 21.212-21.212z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M118.284 374.284h323.427l15.014-150.14c-14.307 5.366-29.789 8.309-45.946 8.309-72.355 0-131.222-58.866-131.222-131.221 0-11.167 1.407-22.013 4.045-32.372H104.316L97.43.004H0v30h70.28l31.706 317.054c-19.27 6.75-33.13 25.109-33.13 46.654 0 27.254 22.174 49.427 49.428 49.427h23.208a49.144 49.144 0 00-3.984 19.429c0 27.254 22.173 49.428 49.427 49.428 27.255 0 49.428-22.174 49.428-49.428a49.151 49.151 0 00-3.984-19.429h81.664a49.144 49.144 0 00-3.984 19.429c0 27.254 22.174 49.428 49.428 49.428 27.255 0 49.429-22.174 49.429-49.428a49.151 49.151 0 00-3.984-19.429h36.776V413.14H118.284c-10.713 0-19.428-8.715-19.428-19.428 0-10.713 8.715-19.428 19.428-19.428zm208.987-98.855h29.999v29.999h-29.999v-29.999zm-69.06 0h29.999v29.999h-29.999v-29.999zm-69.062 0h30v29.999h-30v-29.999z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function CustomerIcon({ width, height, color }: SvgProps) {
  return (
    <Svg width={width ? width : 20} height={height ? height : 18} viewBox="0 0 512 448" fill="none">
      <Path
        d="M256 174.631c48.049 0 87-38.951 87-87s-38.951-87-87-87-87 38.951-87 87 38.951 87 87 87zM432 174.63c30.376 0 55-24.624 55-55s-24.624-55-55-55-55 24.624-55 55 24.624 55 55 55zM80 174.63c30.376 0 55-24.624 55-55s-24.624-55-55-55-55 24.624-55 55 24.624 55 55 55zM134.19 224.021c-21.65-17.738-41.257-15.39-66.29-15.39-37.44 0-67.9 30.28-67.9 67.49v109.21c0 16.16 13.19 29.3 29.41 29.3 70.026 0 61.59 1.267 61.59-3.02 0-77.386-9.166-134.137 43.19-187.59z"
        fill={color ? color : theme.colors.primary}
      />
      <Path
        d="M279.81 209.03c-43.724-3.647-81.729.042-114.51 27.1-54.857 43.94-44.3 103.103-44.3 175.48 0 19.149 15.58 35.02 35.02 35.02 211.082 0 219.483 6.809 232-20.91 4.105-9.374 2.98-6.395 2.98-96.07 0-71.226-61.673-120.62-111.19-120.62zM444.1 208.63c-25.17 0-44.669-2.324-66.29 15.39C429.775 277.076 421 329.955 421 411.61c0 4.314-7.003 3.02 60.54 3.02 16.8 0 30.46-13.61 30.46-30.34V276.12c0-37.21-30.46-67.49-67.9-67.49z"
        fill={color ? color : theme.colors.primary}
      />
    </Svg>
  );
}

export function CardIcon({ color, width, height }: SvgProps) {
  return (
    <Svg width={width ? width : 20} height={height ? height : 16} viewBox="0 0 20 16" fill="none">
      <Path
        d="M19 1.25H1v13.5h18V1.25zM1 5.75h18"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BankIcon({ color, width, height }: SvgProps) {
  return (
    <Svg width={width ? width : 20} height={height ? height : 20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M1 4.375L10 1l9 3.375M1 19h18M10 14.5V7.75M16.75 14.5V7.75M3.25 14.5V7.75"
        stroke={color ? color : theme.colors.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SearchFilter({ color, width, height }: SvgProps) {
  return (
    <Svg width={width ? width : 21} height={height ? height : 21} viewBox="0 0 21 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0a1 1 0 011 1v1a1 1 0 01-2 0V1a1 1 0 011-1zm0 5a2 2 0 110 4 2 2 0 010-4zm17 3a2 2 0 110 4 2 2 0 010-4zm-9 3a2 2 0 110 4 2 2 0 010-4zm0 6a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-8-6a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1zM19 0a1 1 0 011 1v4a1 1 0 11-2 0V1a1 1 0 011-1zm0 13a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zM10 0a1 1 0 011 1v7a1 1 0 11-2 0V1a1 1 0 011-1z"
        fill={color ? color : theme.colors.white}
      />
    </Svg>
  );
}
