import React, { useRef } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';

import { Box, theme, Text } from '.';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 160,
    width: '100%',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: 7,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
});

interface DotProps {
  index: number;
  scrollX: Animated.Value;
}

const Dot = ({ index, scrollX }: DotProps) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });
  return (
    <Box style={styles.container}>
      <Animated.View style={{ ...styles.dot, opacity }} />
    </Box>
  );
};

export default Dot;
