import React from 'react';

import { Formik } from 'formik';
import { Button, View } from 'react-native';

import FormikTextInput from './FormikTextInput';

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
        <FormikTextInput name="username" placeholder="Username"/>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
        <Button onPress={onSubmit} title="Log in"/>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log('values', values);
  };

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;