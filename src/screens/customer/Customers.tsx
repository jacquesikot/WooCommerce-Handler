import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { Box, theme, Header, ListCard } from '../../components';
import { customers } from '../../data';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
});

interface CustomersProps {}

const Customers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Customers" filter={() => true} />
      <Box style={{ paddingBottom: 95 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={customers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box style={{ marginVertical: 8 }}>
              <ListCard
                title={item.firstName + ' ' + item.lastName}
                subTitle={item.value.toString()}
                onPress={() => true}
                customer
              />
            </Box>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Customers;
