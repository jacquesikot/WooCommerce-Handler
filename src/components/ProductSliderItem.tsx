import React from 'react';
import { StyleSheet, Image, ImageRequireSource } from 'react-native';

import { Box, theme, Text } from '.';

const styles = StyleSheet.create({
  container: {
    width: 67,
    borderTopLeftRadius: theme.borderRadii.m,
    borderTopRightRadius: theme.borderRadii.m,
    alignItems: 'center',
    height: 100,
  },
  image: {
    width: 67,
    height: 65,
    borderRadius: theme.borderRadii.m,
  },
  text: {
    width: 67,
    textAlign: 'left',
    marginTop: theme.spacing.s,
  },
});

interface ProductSliderItemProps {
  image: ImageRequireSource;
  title: string;
}

const ProductSliderItem = ({ image, title }: ProductSliderItemProps) => {
  return (
    <Box style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text variant="h7" color="white" style={styles.text} numberOfLines={2}>
        {title}
      </Text>
    </Box>
  );
};

export default ProductSliderItem;
