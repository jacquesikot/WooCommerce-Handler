import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CustomerNavParamList } from '../types';
import { Customers, CustomerDetail } from '../screens';

const CustomerStack = createStackNavigator<CustomerNavParamList>();

const CustomerNav = () => {
  return (
    <CustomerStack.Navigator headerMode="none">
      <CustomerStack.Screen name="Customers" component={Customers} />
      <CustomerStack.Screen name="CustomerDetail" component={CustomerDetail} />
    </CustomerStack.Navigator>
  );
};

export default CustomerNav;
