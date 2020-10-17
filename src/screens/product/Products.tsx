import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { Box, theme, Header, ListCard } from '../../components';
import { products } from '../../data';
import { ProductNavParamList } from '../../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
});

interface ProductsProps {}

const Products = ({ navigation }: StackScreenProps<ProductNavParamList, 'Products'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Products" filter={() => true} plus={() => navigation.navigate('AddProduct')} />
      <Box style={{ paddingBottom: 95 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box style={{ marginVertical: 8 }}>
              <ListCard
                title={item.name}
                subTitle={item.price.toString()}
                image={item.image}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
                rating={item.rating}
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
