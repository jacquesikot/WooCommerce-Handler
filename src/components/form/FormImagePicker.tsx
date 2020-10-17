import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import { Box, theme, Text } from '../../components';
import ImageInputList from '../ImageInputList';

const styles = StyleSheet.create({
  container: {},
});

interface FormImagePickerProps {
  name: string;
}

const FormImagePicker = ({ name }: FormImagePickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>();
  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };
  return (
    <Box style={styles.container}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Box>
  );
};

export default FormImagePicker;
