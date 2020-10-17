import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, theme, Text, Donut } from '../../components';

const styles = StyleSheet.create({
  container: {},
});

interface DonutRingsProps {
  p1: number;
  p2: number;
  p3: number;
  c1: 'primary' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple' | 'white';
  c2: 'primary' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple' | 'white';
  c3: 'primary' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple' | 'white';
}

const DonutRings = ({ p1, p2, p3, c1, c2, c3 }: DonutRingsProps) => {
  return (
    <>
      <Box style={{ position: 'absolute', left: 70 }}>
        <Donut percentage={p1} radius={20} color={c1} />
      </Box>
      <Box style={{ position: 'absolute', left: 50 }}>
        <Donut percentage={p2} radius={40} color={c2} />
      </Box>
      <Box style={{ position: 'absolute', left: 30 }}>
        <Donut percentage={p3} radius={60} color={c3} />
      </Box>
    </>
  );
};

export default DonutRings;
