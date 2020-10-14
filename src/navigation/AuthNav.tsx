import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthNavParamList } from '../types';
import { Welcome, OnBoarding } from '../screens';

const AuthStack = createStackNavigator<AuthNavParamList>();

const AuthNav = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Onboarding" component={OnBoarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
};

export default AuthNav;
