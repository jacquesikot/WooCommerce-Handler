import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';

import { Box, theme, Text, OnboardingCard, Button } from '../../components';
import { onboardingBanners } from '../../data';
import { AuthNavParamList } from '../../types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  pagination: {
    position: 'absolute',
    bottom: 160,
    width: '100%',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: 7,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 80,
  },
});

interface OnboardingProps {}

const Onboarding = ({navigation}: StackScreenProps<AuthNavParamList, 'Onboarding'>) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        data={onboardingBanners}
        snapToInterval={width}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OnboardingCard onboardingCard={item} />}
      />
      <Box style={styles.pagination}>
        {onboardingBanners.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={{ ...styles.dot, opacity, transform: [{ scale }] }}
            />
          );
        })}
      </Box>
      <Box style={styles.buttonContainer}>
        <Button
          arrowRight
          title="Get started"
          width={width - 80}
          height={58}
          onPress={() => navigation.navigate('Welcome')}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Onboarding;
