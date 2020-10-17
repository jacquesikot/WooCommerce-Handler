import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.s,
    alignItems: 'center',
    // backgroundColor: theme.colors.primary,
    width: '70%',
    height: 37,
    borderRadius: theme.borderRadii.m,
  },
});

interface EntryProps {
  title: string;
  value: string;
}

const Entry = ({ title, value }: EntryProps) => {
  return (
    <Box style={styles.container}>
      <Text variant="h6" color="white" marginLeft="m">
        {title + ':'}
      </Text>
      <Text variant="h6" color="white">
        {' ' + value}
      </Text>
    </Box>
  );
};

export default Entry;
