import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import { Box, theme, Header, ListCard, Text, Button } from '../../components';
import { ProductNavParamList } from '../../types';
import productsApi from '../../api/products';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
  errorMessage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface ProductsProps {}

const Products = ({
  navigation,
}: StackScreenProps<ProductNavParamList, 'Products'>) => {
  const [products, setProducts] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const response = await productsApi.getProducts();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setProducts(response.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Products"
        filter={() => true}
        plus={() => navigation.navigate('AddProduct')}
      />
      <Box style={{ paddingBottom: 95 }}>
        {error && (
          <Box marginTop="xxxl" style={styles.errorMessage}>
            <Text variant="h4" color="white" marginBottom="l">
              Couldn't retrieve the products.
            </Text>
            <Button
              title="Retry"
              onPress={loadProducts}
              width={SCREEN_WIDTH * 0.7}
            />
          </Box>
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box style={{ marginVertical: 8 }}>
              <ListCard
                title={item.name}
                subTitle={item.price}
                image={item.images[0].src}
                onPress={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                rating={item.rating_count ? item.rating_count : 0}
                remove={() => true}
                product
                edit
              />
            </Box>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Products;
