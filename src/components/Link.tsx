import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Box, Text } from './Theme';

const styles = StyleSheet.create({
  container: {},
});

interface LinkProps {
  label: string;
  onPress: () => void;
}

const Link = ({ label, onPress }: LinkProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={styles.container}>
        <Text variant="b3" color="light">
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Link;
