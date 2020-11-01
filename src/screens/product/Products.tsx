import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Dimensions } from 'react-native';

import {
  Box,
  theme,
  Header,
  ListCard,
  Text,
  Button,
  ActivityIndicator,
} from '../../components';
import { ProductNavParamList } from '../../types';
import productsApi from '../../api/products';
import useApi from '../../hooks/useApi';

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
  const { data: products, error, loading, request: loadProducts } = useApi(
    productsApi.getProducts
  );

  const deleteProduct = useApi(productsApi.deleteProduct);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Products"
        filter={() => true}
        plus={() => navigation.navigate('AddProduct')}
      />
      <ActivityIndicator visible={loading} />
      <Box style={{ paddingBottom: 95 }} visible={!loading}>
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
                // image={item.images[0].src}
                onPress={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                rating={item.rating_count ? item.rating_count : 0}
                remove={() => {
                  deleteProduct.request(item.id);
                  loadProducts();
                }}
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
