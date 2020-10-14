import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductNavParamList } from '../types';
import { Products, ProductDetail } from '../screens';

const ProductStack = createStackNavigator<ProductNavParamList>();

const ProductNav = () => {
  return (
    <ProductStack.Navigator headerMode="none">
      <ProductStack.Screen name="Products" component={Products} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
    </ProductStack.Navigator>
  );
};

export default ProductNav;
