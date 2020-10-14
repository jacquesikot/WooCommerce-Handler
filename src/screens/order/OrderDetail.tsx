import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, FlatList, TouchableOpacity } from 'react-native';

import { Box, theme, Text, StackHeader, ProductSliderItem, ListItem } from '../../components';
import { OrderNavParamList } from '../../types';
import { numberWithCommas } from '../../utils';

const { width, height: wHeight } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    alignItems: 'center',
  },
  top: {
    width,
    flex: 0.45,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
  bottom: {
    width,
    flex: 0.55,
    backgroundColor: theme.colors.dark,
    borderTopLeftRadius: 40,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
  },
  customerCard: {
    width: SCREEN_WIDTH,
    height: 156,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadii.l,
    marginTop: theme.spacing.xxl,
    paddingLeft: theme.spacing.xl,
    justifyContent: 'center',
  },
  quantity: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 55,
    bottom: 90,
  },
});

interface OrderDetailProps {}

const OrderDetail = ({ navigation, route }: StackScreenProps<OrderNavParamList, 'OrderDetail'>) => {
  const { order } = route.params;
  const { name, amount, products } = order;
  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.top}>
        <StackHeader back={() => navigation.goBack()} bgColor={theme.colors.primary} />
      </Box>
      <Box style={styles.bottom}>
        <Text variant="h7" color="white" marginLeft="xl">
          Orderd Product(s)
        </Text>
        <Box marginTop="l" marginBottom="xl">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Box style={{ marginHorizontal: 10 }}>
                <TouchableOpacity onPress={() => true}>
                  <ProductSliderItem image={item.image} title={item.name} />
                </TouchableOpacity>
              </Box>
            )}
          />
        </Box>
        <Box style={{ marginBottom: 15 }}>
          <ListItem label="Billing Details" onPress={() => true} />
        </Box>
        <ListItem label="Shipping Address" onPress={() => true} />
      </Box>
    </SafeAreaView>
  );
};

export default OrderDetail;
