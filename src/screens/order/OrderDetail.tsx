import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Box,
  theme,
  Text,
  StackHeader,
  ProductSliderItem,
  ListModal,
  Entry,
  Picker,
  Button,
} from '../../components';
import { OrderNavParamList } from '../../types';
import { numberWithCommas } from '../../utils';

const { width, height: wHeight } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;
const CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    flex: 1,
    alignItems: 'center',
  },
  top: {
    width,
    flex: 0.25,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
  bottom: {
    width,
    flex: 0.75,
    backgroundColor: theme.colors.dark,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
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
  card: {
    width: SCREEN_WIDTH,
    height: 120,
    borderRadius: theme.borderRadii.l,
    position: 'absolute',
    top: '15%',
    zIndex: 1,
    backgroundColor: theme.colors.lightDark,
    paddingLeft: theme.spacing.xl,
    justifyContent: 'center',
  },
});

const statusValues = [
  {
    id: 1,
    name: 'Completed',
    color: 'primary',
  },
  {
    id: 2,
    name: 'Pending',
    color: 'yellow',
  },
  {
    id: 3,
    name: 'Processing',
    color: 'red',
  },
];

interface OrderDetailProps {}

const OrderDetail = ({
  navigation,
  route,
}: StackScreenProps<OrderNavParamList, 'OrderDetail'>) => {
  const { order } = route.params;
  const { name, amount, products, status } = order;
  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.top}>
        <StackHeader
          back={() => navigation.goBack()}
          bgColor={theme.colors.primary}
        />
      </Box>
      <Box style={styles.card}>
        <Entry title="Name" value={name} />
        <Entry title="Total" value={'NGN' + numberWithCommas(amount)} />
      </Box>
      <Box style={styles.bottom}>
        <Text variant="h7" color="white" marginTop="xxxl">
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
          <ListModal label="Billing Details" onPress={() => true} height={57} />
        </Box>
        <ListModal label="Shipping Address" onPress={() => true} height={57} />
        <Text variant="h7" color="white" marginTop="l">
          Set Order Status
        </Text>
        <Box marginTop="s" style={{ flexDirection: 'row' }}>
          <Picker placeholder={status} options={statusValues} />
          <Button
            title="Update"
            onPress={() => true}
            height={47}
            width={SCREEN_WIDTH * 0.4}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default OrderDetail;
