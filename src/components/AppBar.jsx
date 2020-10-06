import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { Link } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e'
  }
});

const AppBar = () => {
return (
  <View>
    <Appbar.Header style={styles.container}>
      <Appbar.Content title= "Repositories">
        <Link to="/" component={RepositoryList} />
      </Appbar.Content>
      <Appbar.Content title= "Sign in">
        <Link to="/signin" component={SignIn} />
      </Appbar.Content>
    </Appbar.Header>
  </View>
);
};

export default AppBar;