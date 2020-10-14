import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Box, theme, Text } from '.';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
  },
});

interface RatingProps {
  rating: number;
  size?: number;
  color?: string;
}

const Rating = ({ rating, size, color }: RatingProps) => {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill('staro');
  const r = [...Array(filledStars).fill('star'), ...maxStars];

  return (
    <Box style={styles.container}>
      {r.map((type, index) => {
        return (
          <AntDesign
            key={index}
            name={type}
            size={size ? size : 12}
            color={color ? color : theme.colors.yellow}
          />
        );
      })}
    </Box>
  );
};

export default Rating;
