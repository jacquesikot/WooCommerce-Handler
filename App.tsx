import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import { Button, LoadAssets, theme } from './src/components';
import AppNav from './src/navigation/AppNav';

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
  'SFProDisplay-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
};

const assets = [
  require('./assets/banners/onboarding1.png'),
  require('./assets/banners/onboarding2.png'),
  require('./assets/banners/onboarding3.png'),
];
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets fonts={fonts} assets={assets}>
        <AppNav />
      </LoadAssets>
    </ThemeProvider>
  );
}
