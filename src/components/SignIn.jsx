import React from 'react';

import { Formik, yupToFormErrors } from 'formik';
import { Button, View } from 'react-native';
import * as yup from 'yup';

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

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignIn = () => {
  const onSubmit = values => {
    console.log('values', values);
  };

  return (
    <View>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;