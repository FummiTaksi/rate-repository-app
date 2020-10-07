import React from 'react';
import { StyleSheet} from 'react-native';
import { useField } from 'formik';
import Text from './Text';

import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "red"
  },
  normalInput: {
      borderBottomColor: 'black',
      borderBottomWidth: 1
  },
  errorInput: {
      borderBottomColor: 'red',
      borderBottomWidth: 1
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style = {showError ? styles.errorInput : styles.normalInput}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;