import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Dimensions,
} from 'react-native';
import {
  FontAwesome5 as Icon,
  MaterialCommunityIcons as Icon2,
} from '@expo/vector-icons';
import { useFormikContext } from 'formik';

import { Box, theme, Text } from '..';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xxl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.dark,
    borderRadius: theme.borderRadii.m,
    padding: theme.spacing.s,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowRadius: theme.spacing.s,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  icon: {
    width: 38,
    borderRadius: theme.borderRadii.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface TextInputProps extends RNTextInputProps {
  width?: number;
  height?: number;
  iconName: string;
  iconColor?: string;
  iconBgColor?: string;
  error?: string;
  touched?: boolean;
  name?: string;
}

const TextInput = ({
  width,
  height,
  iconName,
  iconColor,
  iconBgColor,
  name = 'demo',
  ...props
}: TextInputProps) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  const widthNo = width ? width : SCREEN_WIDTH;
  const heightNo = height ? height : 54;
  const iconColorValue = iconColor ? iconColor : theme.colors.yellow;
  const iconBgColorValue = iconBgColor ? iconBgColor : theme.colors.yellowDark;
  return (
    <Box
      style={[
        styles.container,
        styles.shadow,
        { width: widthNo, height: heightNo },
      ]}
    >
      <Box style={[styles.icon, { backgroundColor: iconBgColorValue }]}>
        {iconName === 'user-alt' ? (
          <Icon name={iconName} color={iconColorValue} size={16} />
        ) : (
          <Icon2 name={iconName} color={iconColorValue} size={16} />
        )}
      </Box>
      <Box style={[styles.textInput]}>
        <RNTextInput
          underlineColorAndroid="transparent"
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          placeholderTextColor={theme.colors.light}
          {...props}
          style={{ color: theme.colors.light }}
        />
      </Box>
    </Box>
  );
};

export default TextInput;
