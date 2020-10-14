import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { Box, theme, Text, Header, OrderItem } from '../../components';
import { orders } from '../../data';
import { OrderNavParamList } from '../../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
});

interface OrdersProps {}

const Orders = ({ navigation }: StackScreenProps<OrderNavParamList, 'Orders'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Orders" filter={() => true} />
      <Box style={{ paddingBottom: 95 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box style={{ marginVertical: 8 }}>
              <OrderItem
                order={item}
                onPress={() => navigation.navigate('OrderDetail', { order: item })}
              />
            </Box>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Orders;
