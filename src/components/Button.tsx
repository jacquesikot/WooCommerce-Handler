import React from 'react';
import { StyleSheet, Button as RNButton, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '../components';

const { width } = Dimensions.get('window');
const BUTTON_WIDTH = width - theme.spacing.xxl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadii.m,
  },
});

interface ButtonProps {
  width?: number;
  height?: number;
  arrowRight?: boolean;
  arrowLeft?: boolean;
  arrowColor?: string;
  bgColor?: string;
  textColor?: 'white' | 'primary';
  title?: string;
  onPress: () => void;
}

const Button = ({
  arrowRight,
  arrowLeft,
  arrowColor,
  width,
  height,
  title,
  onPress,
  bgColor,
  textColor,
}: ButtonProps) => {
  const widthValue = width ? width : BUTTON_WIDTH;
  const heightValue = height ? height : 58;
  const arrowColorValue = arrowColor ? arrowColor : 'white';
  const bgColorValue = bgColor ? bgColor : theme.colors.primary;
  const textColorValue = textColor ? textColor : 'white';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          width: widthValue,
          height: heightValue,
          backgroundColor: bgColorValue,
        },
      ]}
    >
      {title && (
        <Text variant="button" color={textColorValue} marginRight="m">
          {title}
        </Text>
      )}
      {arrowRight && <Icon name="ios-arrow-round-forward" color={arrowColorValue} size={30} />}
      {arrowLeft && <Icon name="ios-arrow-round-back" color={arrowColorValue} size={30} />}
    </TouchableOpacity>
  );
};

export default Button;
