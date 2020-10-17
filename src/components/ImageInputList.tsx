import React, { useRef } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';

import { Box, theme, Text } from '.';
import ImageInput from './ImageInput';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});

interface ImageInputListProps {
  imageUris: string[];
  onRemoveImage: any;
  onAddImage: any;
}

const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) => {
  const scrollView = useRef<any>();
  return (
    <Box>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView?.current.scrollToEnd()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <Box style={styles.container}>
          {imageUris.map((uri) => (
            <Box key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </Box>
          ))}
          <ImageInput onChangeImage={(uri: string) => onAddImage(uri)} />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ImageInputList;
