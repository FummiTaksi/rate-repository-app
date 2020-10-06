import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    color: '#24292e'
  }
});

const AppBarComponent = () => {
return (
  <View style={styles.container}>
    <Appbar.Header>
      <Appbar.Content title= "Repositories"/>
    </Appbar.Header>
  </View>
);
};

export default AppBarComponent;