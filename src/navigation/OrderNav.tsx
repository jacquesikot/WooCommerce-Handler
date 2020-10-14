import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { OrderNavParamList } from '../types';
import { Orders, OrderDetail } from '../screens';

const OrderStack = createStackNavigator<OrderNavParamList>();

const OrderNav = () => {
  return (
    <OrderStack.Navigator headerMode="none">
      <OrderStack.Screen name="Orders" component={Orders} />
      <OrderStack.Screen name="OrderDetail" component={OrderDetail} />
    </OrderStack.Navigator>
  );
};

export default OrderNav;
