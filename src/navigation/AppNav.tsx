import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppNavParamList } from '../types';
import { Box, theme } from '../components';
import { HomeIcon, OrdersIcon, CustomerIcon, ProductsIcon } from '../Svgs';
import HomeNav from './HomeNav';
import OrderNav from './OrderNav';
import ProductNav from './ProductNav';
import CustomerNav from './CustomerNav';

const AppStack = createBottomTabNavigator<AppNavParamList>();

const AppNav = () => {
  return (
    <AppStack.Navigator
      tabBarOptions={{
        style: { borderTopLeftRadius: 12 },
        keyboardHidesTabBar: true,
        labelStyle: {
          fontFamily: 'SFProDisplay-Bold',
          fontSize: 10,
        },
        tabStyle: {
          backgroundColor: theme.colors.dark,
        },
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.light,
      }}
    >
      <AppStack.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Orders"
        component={OrderNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <OrdersIcon color={color} />;
          },
        }}
      />
      <AppStack.Screen
        name="Products"
        component={ProductNav}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Box>
                <ProductsIcon color={color} />
              </Box>
            );
          },
        }}
      />
      <AppStack.Screen
        name="Customers"
        component={CustomerNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <CustomerIcon color={color} />;
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNav;
