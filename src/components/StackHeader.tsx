import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '.';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: theme.spacing.xl,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface StackHeaderProps {
  back: () => void;
  bgColor: string;
}

const StackHeader = ({ back, bgColor }: StackHeaderProps) => {
  return (
    <Box style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity style={styles.back} onPress={back}>
        <Icon name="chevron-left" size={19} color={theme.colors.white} />
        <Text variant="h7" color="white">
          Back
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default StackHeader;
