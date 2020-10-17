import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Box, theme, Text } from '.';
import Donut from './charts/Donut';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: theme.borderRadii.l,
    marginTop: 10,
    marginLeft: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primaryDark,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface HomeCardProps {
  width?: number;
  height?: number;
  card?: 'primary' | 'red' | 'orange' | 'yellow' | 'blue' | 'purple' | 'dark';
  label?: string;
  value?: string;
  percentage?: number;
  radius?: number;
  onPress?: () => void;
}

const HomeCard = ({
  width = 151,
  height = 180,
  card,
  label,
  value,
  percentage,
  radius,
  onPress,
}: HomeCardProps) => {
  const reBorderColorValue = card ? card : 'primary';
  const reBgColor = card ? card : 'dark';
  const borderColorValue = theme.colors[reBorderColorValue];
  const bgColor = theme.colors[reBgColor];
  return (
    <Box
      style={[
        styles.container,
        {
          width: width,
          height: height,
          borderColor: borderColorValue,
          backgroundColor: bgColor,
        },
      ]}
    >
      {!card ? (
        <Box style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={onPress}>
            <Box style={styles.circle}>
              <Icon name="plus" color={theme.colors.white} size={22} />
            </Box>
          </TouchableOpacity>
          <Text variant="h7" color="primary" marginTop="m">
            Add new product
          </Text>
        </Box>
      ) : (
        <Box>
          <Text variant="h6" color="white">
            {label}
          </Text>
          <Text variant="h2" color="white" style={{ marginTop: -5 }}>
            {value}
          </Text>
          <Donut
            percentage={percentage ? percentage : 20}
            radius={radius ? radius : 20}
            color="white"
          />
        </Box>
      )}
    </Box>
  );
};

export default HomeCard;
