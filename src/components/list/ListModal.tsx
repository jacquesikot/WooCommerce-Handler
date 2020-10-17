import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Box, theme, Text } from '..';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    backgroundColor: '#30444E',
    borderRadius: theme.borderRadii.m,
    alignItems: 'center',
    paddingLeft: theme.spacing.xl,
    paddingRight: theme.spacing.xl,
  },
});

interface ListModalProps {
  label: string;
  onPress: () => void;
  height?: number;
  icon?: string;
}

const ListModal = ({
  label,
  onPress,
  height = 67,
  icon = 'account-details',
}: ListModalProps) => {
  return (
    <Box style={[styles.container, { height }]}>
      <Icon name={icon} color="white" size={29} />
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

export default ListModal;
