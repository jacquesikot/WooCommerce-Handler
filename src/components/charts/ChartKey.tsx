import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, theme, Text } from '../../components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  color: {
    width: 15,
    height: 10,
    borderRadius: 6,
    marginRight: 5,
  },
});

interface ChartKeyProps {
  label: string;
  color: 'primary' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple' | 'dark';
  value: number;
}

const ChartKey = ({ label, color, value }: ChartKeyProps) => {
  const reBgColor = color ? color : 'primary';
  const bgColor = theme.colors[reBgColor];
  return (
    <Box style={styles.container}>
      <Box style={[styles.color, { backgroundColor: bgColor }]} />
      <Text variant="b4" color="light">
        {label + `(${value})`}
      </Text>
    </Box>
  );
};

export default ChartKey;
