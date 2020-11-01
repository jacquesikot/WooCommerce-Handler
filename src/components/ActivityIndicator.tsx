import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import { Box, Text } from '../components';

const styles = StyleSheet.create({
  container: {},
});

interface ActivityIndicatorProps {
  visible: boolean;
}
const ActivityIndicator = ({ visible }: ActivityIndicatorProps) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require('../../assets/animations/loader.json')}
    />
  );
};

export default ActivityIndicator;
