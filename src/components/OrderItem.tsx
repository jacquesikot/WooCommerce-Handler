import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '.';
import { OrderProps, ProductProps } from '../types';
import { capitalize, numberWithCommas } from '../utils';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xxl * 2;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 105,
    backgroundColor: theme.colors.primaryDark,
    borderRadius: theme.borderRadii.l,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },
  innerBox: {
    width: 59,
    height: 57,
    borderRadius: theme.borderRadii.m,
    backgroundColor: theme.colors.primary,
  },
  innerText: {
    marginLeft: theme.spacing.m,
  },
  cardIcons: {
    flexDirection: 'row',
    marginTop: theme.spacing.s,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: theme.colors.primary,
    top: 7.5,
    marginLeft: theme.spacing.s,
  },
  chevron: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface OrderItemProps {
  order: OrderProps;
  onPress: () => void;
}

const OrderItem = ({ order, onPress }: OrderItemProps) => {
  const { name, amount, payment, products } = order;
  const iconValue = payment === 'cash' ? 'cash' : 'credit-card-outline';
  return (
    <Box style={styles.container}>
      <Box style={styles.innerBox} />
      <Box style={styles.innerText}>
        <Text variant="h7" color="primary">
          {name}
        </Text>
        <Text variant="h8" color="primary" marginTop="s">
          {'NGN' + ' ' + numberWithCommas(amount)}
        </Text>
        <Box style={styles.cardIcons}>
          <Icon name={iconValue} color={theme.colors.primary} size={14} />
          <Text color="primary" variant="b4" marginLeft="s">
            {capitalize(payment)}
          </Text>
          <Box style={styles.dot} />
          <Text color="primary" variant="b4" marginLeft="s">
            {products.length + ' item(s)'}
          </Text>
        </Box>
      </Box>
      <Box style={{ flex: 1 }} />
      <TouchableOpacity onPress={onPress}>
        <Box style={styles.chevron}>
          <Icon name="chevron-right" color={theme.colors.white} size={30} />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default OrderItem;
