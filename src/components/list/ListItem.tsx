import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { Box, theme, Text } from '../../components';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: 56,
    justifyContent: 'center',
    paddingLeft: theme.spacing.xl,
  },
});

interface ListItemProps {
  label: string;
}

const ListItem = ({ label }: ListItemProps) => {
  return (
    <Box style={styles.container}>
      <Text variant="b4" color="white">
        {label}
      </Text>
    </Box>
  );
};

export default ListItem;
