import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, theme, Text } from '.';

const styles = StyleSheet.create({
  container: {},
});

interface ButtonProps {}

const Button = () => {
  return (
    <Box style={styles.container}>
      <Text>hi</Text>
    </Box>
  );
};

export default Button;
