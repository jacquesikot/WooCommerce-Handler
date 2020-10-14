import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavParamList } from '../types';
import { Home, AddProduct } from '../screens';

const HomeStack = createStackNavigator<HomeNavParamList>();

const HomeNav = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AddProduct" component={AddProduct} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
