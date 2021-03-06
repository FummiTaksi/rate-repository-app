import React from 'react';

import { Formik  } from 'formik';
import { Button, View } from 'react-native';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';

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

  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data) {
        history.push("/");
      }     
      console.log('Sign in data', data);
    } catch (e) {
      console.log('error when signing in:', e);
    }
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