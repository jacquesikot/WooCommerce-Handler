import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, theme, Text, Donut } from '../../components';

const styles = StyleSheet.create({
  container: {},
});

interface DonutRingsProps {}

const DonutRings = () => {
  return (
    <Box>
      <Donut percentage={55} radius={20} color="orange" />
    </Box>
  );
};

export default DonutRings;
