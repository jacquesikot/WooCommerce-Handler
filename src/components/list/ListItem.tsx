import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '../../components';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    height: 67,
    backgroundColor: '#30444E',
    borderRadius: theme.borderRadii.m,
    alignItems: 'center',
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
});

interface ListItemProps {
  label: string;
  onPress: () => void;
}

const ListItem = ({ label, onPress }: ListItemProps) => {
  return (
    <Box style={styles.container}>
      <Icon name="account-details" color="white" size={29} />
      <Text variant="b3" color="white" marginLeft="m">
        {label}
      </Text>
      <Box style={{ flex: 1 }} />
      <TouchableOpacity onPress={onPress}>
        <Box>
          <Icon name="chevron-down" color={theme.colors.white} size={20} />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default ListItem;
