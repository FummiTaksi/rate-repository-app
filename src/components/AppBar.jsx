import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e'
  }
});

const AppBarComponent = () => {
return (
  <View>
    <Appbar.Header style={styles.container}>
      <Appbar.Content title= "Repositories" />
    </Appbar.Header>
  </View>
);
};

export default AppBarComponent;