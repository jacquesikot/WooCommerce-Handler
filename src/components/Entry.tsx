import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.s,
    alignItems: 'center',
  },
});

interface EntryProps {
  title: string;
  value: string;
}

const Entry = ({ title, value }: EntryProps) => {
  return (
    <Box style={styles.container}>
      <Icon name="chevron-right" color={theme.colors.red} size={16} />
      <Text variant="h6" color="dark">
        {title + ':'}
      </Text>
      <Text variant="b2" color="dark">
        {' ' + value}
      </Text>
    </Box>
  );
};

export default Entry;
