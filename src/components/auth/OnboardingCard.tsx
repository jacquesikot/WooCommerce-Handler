import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

import { Box, theme, Text } from '..';
import { OnboardingBannerProps } from '../../types';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width - 40;
const IMG_WIDTH = 1013;
const IMG_HEIGHT = 1210;
const ASPECT_RATIO = IMG_WIDTH / IMG_HEIGHT;
const NEW_HEIGHT = SCREEN_WIDTH * ASPECT_RATIO;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width,
    top: 70,
    height: height * 0.61,
  },
});

interface OnboardingCardProps {
  onboardingCard: OnboardingBannerProps;
}

const OnboardingCard = ({ onboardingCard }: OnboardingCardProps) => {
  const { image, title, subtitle } = onboardingCard;
  return (
    <Box style={styles.container}>
      <Image source={image} style={{ width: SCREEN_WIDTH, height: NEW_HEIGHT }} />
      <Text variant="h5" color="white" style={{width: SCREEN_WIDTH, textAlign: 'center'}}>
        {title}
      </Text>
      <Text
        variant="b3"
        color="light"
        style={{ textAlign: 'center', width: width * 0.7 }}
        marginTop="m"
      >
        {subtitle}
      </Text>
    </Box>
  );
};

export default OnboardingCard;
