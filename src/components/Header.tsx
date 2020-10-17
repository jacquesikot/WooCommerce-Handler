import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '.';
import { SearchFilter } from '../Svgs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height: wHeight } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xxl * 2;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    marginTop: theme.spacing.xxl,
    paddingVertical: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface HeaderProps {
  title: string;
  filter?: () => void;
  plus?: () => void;
}

const Header = ({ title, filter, plus }: HeaderProps) => {
  return (
    <Box style={styles.container}>
      <Text variant="h1" color="white">
        {title}
      </Text>
      <Box style={{ flex: 1 }} />
      {filter && (
        <TouchableOpacity onPress={filter}>
          <SearchFilter width={24} height={24} />
        </TouchableOpacity>
      )}
      {plus && (
        <TouchableOpacity onPress={plus} style={{ marginLeft: 20 }}>
          <Icon name="plus" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      )}
    </Box>
  );
};

export default Header;
