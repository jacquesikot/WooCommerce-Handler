import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { Box, theme, Text, TextInput, Button, ErrorMsg, Link } from '../../components';
import { CloseEye, Eye } from '../../Svgs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 45,
    height: 43,
    borderRadius: theme.borderRadii.m,
    backgroundColor: theme.colors.primary,
  },
  logoContainer: {
    marginLeft: theme.spacing.xxl,
  },
  welcomeContainer: {
    marginLeft: theme.spacing.xxl,
  },
  input: {
    marginTop: theme.spacing.xxl,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 40,
  },
});

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width - theme.spacing.xl * 2;
const LoginSchema = Yup.object().shape({
  password: Yup.string().min(4).max(50).required(),
  email: Yup.string().email().required(),
});

interface WelcomeProps {}

const Welcome = () => {
  const [passwordVissible, setPasswordVissible] = useState<boolean>(false);
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.logoContainer}>
        <Box style={styles.logo} />
      </Box>
      <Box style={styles.welcomeContainer}>
        <Text variant="h1" color="white" marginTop="xl">
          Welcome!
        </Text>
        <Text variant="b1" color="light" marginTop="m">
          Sign in to continue
        </Text>
      </Box>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Box style={styles.input}>
            <Box style={{ marginBottom: 30 }}>
              <Box style={{ marginBottom: 10 }}>
                <ErrorMsg error="Invalid email and/or password" visible={errorVisible} />
              </Box>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                iconName="mail"
                placeholder="Your Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
                width={SCREEN_WIDTH}
              />
            </Box>
            <Box style={{ flexDirection: 'row' }}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={!passwordVissible}
                textContentType="password"
                iconName="lock"
                iconBgColor={theme.colors.redDark}
                iconColor={theme.colors.red}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
                width={SCREEN_WIDTH}
              />
              <Box style={{ position: 'absolute', left: width - 80, top: 16 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setPasswordVissible(!passwordVissible)}
                >
                  {passwordVissible ? <Eye width={18} /> : <CloseEye width={18} />}
                </TouchableOpacity>
              </Box>
            </Box>
            <Box style={styles.buttonContainer}>
              <Button width={SCREEN_WIDTH} arrowRight title="Sign In" onPress={handleSubmit} />
            </Box>
            <Box style={{ marginTop: 20 }}>
              <Link label="Forgot password?" onPress={() => true} />
            </Box>
            <Box style={{ marginTop: 40 }}>
              <Button
                width={SCREEN_WIDTH}
                title="Create an account"
                onPress={() => true}
                bgColor={theme.colors.darkGreen}
                textColor="primary"
              />
            </Box>
          </Box>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Welcome;
