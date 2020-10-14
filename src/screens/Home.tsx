import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import { Box, theme, HomeCard, Header } from '../components';
import { HomeNavParamList } from '../types';

const { width, height: wHeight } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xxl * 2;
const HOME_CARD_HEIGHT = wHeight * 0.2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    width: SCREEN_WIDTH,
    marginTop: theme.spacing.xxl,
    paddingVertical: theme.spacing.m,
  },
  topRow: {
    width: SCREEN_WIDTH,
    marginBottom: theme.spacing.m,
  },
  topCard: {
    width: SCREEN_WIDTH,
    height: 150,
    backgroundColor: theme.colors.red,
    borderRadius: theme.borderRadii.l,
    justifyContent: 'center',
    paddingTop: theme.spacing.xl,
    flexDirection: 'row',
  },
  bottomRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: theme.spacing.xl,
    marginTop: theme.spacing.m,
  },
});

interface HomeProps {}

const Home = ({ navigation }: StackScreenProps<HomeNavParamList, 'Home'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <Box style={styles.topRow}>
        <Box style={styles.topCard}></Box>
      </Box>
      <Box style={styles.bottomRow}>
        <HomeCard
          card="primary"
          width={150}
          height={HOME_CARD_HEIGHT}
          label="Conversion Rate"
          value="0.85%"
          percentage={20}
          radius={25}
        />
        <HomeCard
          card="yellow"
          width={150}
          height={HOME_CARD_HEIGHT}
          label="Return Rate"
          value="4%"
          percentage={4}
          radius={25}
        />
        <HomeCard
          card="red"
          width={150}
          height={HOME_CARD_HEIGHT}
          label="Retention Rate"
          value="63%"
          percentage={63}
          radius={25}
        />
        <HomeCard width={150} height={HOME_CARD_HEIGHT} />
      </Box>
    </SafeAreaView>
  );
};

export default Home;
