import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { Link, TouchableWithoutFeedBack } from 'react-router-native';
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
    <TouchableWithoutFeedBack>
      <View>
        <Appbar.Content title= "Repositories">
          <Link to="/" component={RepositoryList} />
        </Appbar.Content>
      </View>
    </TouchableWithoutFeedBack>
      <TouchableWithoutFeedBack>
        <View>
          <Appbar.Content title= "Sign in">
            <Link to="/signin" component={SignIn} />
          </Appbar.Content>
        </View>
      </TouchableWithoutFeedBack>
    </Appbar.Header>
  </View>
);
};

export default AppBar;