import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    color: '#24292e'
  }
});

const AppBarComponent = () => {
return <View style={styles.container}><AppBar position="static"><Toolbar><Text>Repositories</Text></Toolbar></AppBar></View>;
};

export default AppBarComponent;