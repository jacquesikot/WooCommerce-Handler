import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { Box, theme, Header, ListCard } from '../../components';
import { ProductNavParamList } from '../../types';
import productsApi from '../../api/products';
// import { products } from '../../data';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
});

interface ProductsProps {}

const Products = ({
  navigation,
}: StackScreenProps<ProductNavParamList, 'Products'>) => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await productsApi.getProducts();
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
                // rating={item.rating_count}
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
