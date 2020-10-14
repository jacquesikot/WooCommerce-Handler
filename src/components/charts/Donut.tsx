import React, { useEffect, useRef } from 'react';
import { StyleSheet, Easing, Animated } from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';

import { Box, theme, Text } from '../../components';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {},
});

interface DonutProps {
  percentage: number;
  max?: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  color: 'primary' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple' | 'white';
  delay?: number;
}

const Donut = ({
  percentage,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color,
  delay = 0,
  max = 100,
}: DonutProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef<any>();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const reColorValue = color ? color : 'primary';
  const colorValue = theme.colors[reColorValue];

  const animation = (toValue: any) => {
    return Animated.timing(animatedValue, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
    animatedValue.addListener((v) => {
      const maxPerc = (100 * v.value) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;

      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  });

  return (
    <Box style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={colorValue}
            strokeWidth={strokeWidth}
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={colorValue}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </Box>
  );
};

export default Donut;
