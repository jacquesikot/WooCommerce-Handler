import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
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
import useApi from '../../hooks/useApi';
import categoriesApi from '../../api/categories';
import productsApi from '../../api/products';
import UploadScreen from '../UploadScreen';

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
  price: Yup.number().min(1).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().nullable().required().label('Category'),
  images: Yup.array(),
});

interface AddProductsProps {}

const AddProducts = () => {
  const [uploadVisible, setUploadVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    setUploadVisible(true);
    getCategoriesApi.request();
    setUploadVisible(false);
  }, []);

  return (
    <>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
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
            onSubmit={async (values, { resetForm }) => {
              setProgress(0);
              setUploadVisible(true);
              const result = await productsApi.addProduct(
                values,
                (progress: any) => setProgress(progress)
              );
              if (!result.ok) {
                setUploadVisible(false);
                return alert('Could not add the product');
              }
              resetForm();
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
                  {errors.images && (
                    <Box>
                      <Text variant="b4" color="red">
                        {errors.images}
                      </Text>
                    </Box>
                  )}
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconName="alpha-n-box-outline"
                    placeholder="Name"
                    name="name"
                    value={values['name']}
                    error={errors.name}
                    touched={touched.name}
                    width={SCREEN_WIDTH}

                    // use Formik Context to shoreten the props passed here
                  />
                  {errors.name && (
                    <Box marginTop="s">
                      <Text variant="b4" color="red">
                        {errors.name}
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box style={styles.input}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    iconName="cash"
                    iconBgColor={theme.colors.redDark}
                    iconColor={theme.colors.red}
                    placeholder="Price"
                    name="price"
                    value={values['price']}
                    error={errors.price}
                    touched={touched.price}
                    width={SCREEN_WIDTH}
                  />
                  {errors.price && (
                    <Box marginTop="s">
                      <Text variant="b4" color="red">
                        {errors.price}
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box style={styles.input}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    iconName="note-multiple-outline"
                    placeholder="Description"
                    numberOfLines={2}
                    name="description"
                    value={values['description']}
                    error={errors.description}
                    touched={touched.description}
                    width={SCREEN_WIDTH}
                  />
                  {errors.description && (
                    <Box>
                      <Text variant="b4" color="red">
                        {errors.description}
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box
                  style={{
                    flexDirection: 'row',
                    width: SCREEN_WIDTH,
                  }}
                >
                  <Picker
                    placeholder="Select Category"
                    options={getCategoriesApi.data}
                    name="category"
                  />
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
    </>
  );
};

export default AddProducts;
