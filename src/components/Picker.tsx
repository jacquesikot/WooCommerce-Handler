import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme, Text } from '.';
import { categories } from '../data';
import ListItem from './list/ListItem';
import { CategoriesProps } from '../types';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#30444E',
    height: 47,
    borderRadius: theme.borderRadii.m,
    alignItems: 'center',
    paddingLeft: theme.spacing.l,
    paddingRight: theme.spacing.l,
    flexDirection: 'row',
  },
  modal: {
    backgroundColor: theme.colors.dark,
    height: '100%',
    width: '100%',
  },
  statusColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

interface optionsProps {
  id: number;
  name: string;
  color: string;
}

interface PickerProps {
  placeholder: string;
  options: optionsProps[];
}

const Picker = ({ placeholder, options }: PickerProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<CategoriesProps>();
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Box style={styles.container}>
          {!selectedItem ? (
            <>
              <Text variant="b2" color="white" marginRight="m" marginLeft="m">
                {placeholder}
              </Text>
            </>
          ) : (
            <>
              <Text variant="b2" color="white" marginRight="m">
                {selectedItem.name}
              </Text>
            </>
          )}
          <Box style={{ flex: 1 }} />
          <Icon name="chevron-down" color="white" size={18} />
        </Box>
      </TouchableWithoutFeedback>

      <Modal animationType="slide" visible={modalVisible}>
        <SafeAreaView style={styles.modal}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <Box marginTop="xl" marginLeft="xl" marginBottom="m">
              <Icon
                name="arrow-left-circle"
                size={30}
                color={theme.colors.white}
              />
            </Box>
          </TouchableWithoutFeedback>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor={theme.colors.light}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              >
                <ListItem label={item.name} />
              </TouchableHighlight>
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Picker;
