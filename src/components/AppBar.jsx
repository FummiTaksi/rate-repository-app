import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';

import { Link } from 'react-router-native';
import SignInTab from './SignInTab';
import RepositoryTab from './RepositoryTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e'
  }
});

const AppBar = () => {
return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Appbar.Header style={styles.container}>
        <Link to="/">
          <RepositoryTab />
        </Link>    
        <Link to="/signin">
          <SignInTab />
        </Link>
      </Appbar.Header>
    </ScrollView>
  </View>
);
};

export default AppBar;