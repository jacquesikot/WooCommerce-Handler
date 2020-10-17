import React, { useEffect } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Image,
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { Box, theme, Text } from '.';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.light,
    borderRadius: theme.borderRadii.m,
    height: 100,
    width: 100,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

interface ImageInputProps {
  imageUri?: string;
  onChangeImage: any;
}

const ImageInput = ({ imageUri, onChangeImage }: ImageInputProps) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading an Image', error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Box style={styles.container}>
        {!imageUri && (
          <Icon
            name="camera-plus-outline"
            color={theme.colors.white}
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;
