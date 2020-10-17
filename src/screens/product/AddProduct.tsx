import { Formik } from 'formik';
import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import * as Yup from 'yup';

import {
  Box,
  theme,
  Text,
  ImageInputList,
  TextInput,
  Button,
  Header,
  ListItem,
  Picker,
} from '../../components';
import FormImagePicker from '../../components/form/FormImagePicker';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    alignItems: 'center',
  },
  imagePicker: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    marginBottom: theme.spacing.s,
  },
  button: {
    marginTop: theme.spacing.m,
  },
  input: {
    marginBottom: 15,
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

interface AddProductsProps {}

const AddProducts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Box>
        <Header title="Add Product" />
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <Box style={{ alignItems: 'center' }}>
              <Box style={styles.input}>
                <Box style={styles.imagePicker}>
                  <FormImagePicker name="images" />
                </Box>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  textContentType="none"
                  iconName="alpha-n-box-outline"
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={errors.name}
                  touched={touched.name}
                  width={SCREEN_WIDTH}
                />
              </Box>
              <Box style={styles.input}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="number-pad"
                  textContentType="none"
                  iconName="cash"
                  iconBgColor={theme.colors.redDark}
                  iconColor={theme.colors.red}
                  placeholder="Price"
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  error={errors.price}
                  touched={touched.price}
                  width={SCREEN_WIDTH}
                />
              </Box>
              <Box style={styles.input}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  textContentType="name"
                  iconName="note-multiple-outline"
                  placeholder="Description"
                  numberOfLines={2}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  error={errors.description}
                  touched={touched.description}
                  width={SCREEN_WIDTH}
                />
              </Box>
              <Box
                style={{
                  flexDirection: 'row',
                  width: SCREEN_WIDTH,
                  marginVertical: 10,
                }}
              >
                <Picker placeholder="Select Category" />
              </Box>
              <Box style={styles.button}>
                <Button
                  width={SCREEN_WIDTH}
                  title="Add Product"
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </SafeAreaView>
  );
};

export default AddProducts;
