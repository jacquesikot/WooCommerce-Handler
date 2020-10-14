import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { Box, theme, Header, ListCard } from '../../components';
import { products } from '../../data';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
});

interface ProductsProps {}

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Products" filter={() => true} plus={() => true} />
      <Box>
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
                onPress={() => true}
                rating={item.rating}
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
