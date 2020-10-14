import React from 'react';
import { Dimensions, Image, ImageRequireSource, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon, Feather } from '@expo/vector-icons';

import { Box, theme, Text, Rating } from '../../components';
import { numberWithCommas } from '../../utils';
const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xxl * 2;
const IMAGE_WIDTH = 70;
const IMAGE_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 105,
    backgroundColor: theme.colors.primaryDark,
    borderRadius: theme.borderRadii.l,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  innerBox: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: theme.borderRadii.m,
    backgroundColor: theme.colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  innerText: {
    marginLeft: theme.spacing.m,
  },
  cardIcons: {
    flexDirection: 'row',
    marginTop: theme.spacing.s,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: theme.colors.primary,
    top: 7.5,
    marginLeft: theme.spacing.s,
  },
  chevron: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ListCardProps {
  title: string;
  subTitle: string;
  image?: ImageRequireSource;
  onPress: () => void;
  product?: boolean;
  rating?: number;
  edit?: boolean;
  customer?: boolean;
}

const ListCard = ({
  title,
  subTitle,
  image,
  onPress,
  product,
  rating,
  edit,
  customer,
}: ListCardProps) => {
  const noOfLines = product ? 2 : 1;
  return (
    <Box style={styles.container}>
      <Box style={styles.innerBox}>
        {image ? (
          <Image source={image} style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }} />
        ) : (
          <Feather name="user" size={50} color={theme.colors.light} />
        )}
      </Box>
      <Box style={styles.innerText}>
        <Text
          variant="h7"
          color="primary"
          numberOfLines={noOfLines}
          style={{ width: SCREEN_WIDTH * 0.45 }}
        >
          {title}
        </Text>
        <Text variant="h8" color="primary" marginTop="s">
          {product
            ? 'NGN' + ' ' + numberWithCommas(Number(subTitle))
            : customer
            ? 'Value:' + ' NGN' + ' ' + numberWithCommas(Number(subTitle))
            : subTitle}
        </Text>
        {rating && (
          <Box style={{ marginTop: 3 }}>
            <Rating rating={rating} color={theme.colors.yellow} />
          </Box>
        )}
      </Box>
      <Box style={{ flex: 1 }} />
      <TouchableOpacity onPress={onPress}>
        <Box style={styles.chevron}>
          {edit ? (
            <Feather name="edit-3" size={20} color={theme.colors.white} />
          ) : (
            <Icon name="chevron-right" color={theme.colors.white} size={30} />
          )}
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default ListCard;
