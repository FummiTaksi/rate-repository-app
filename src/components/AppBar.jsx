import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
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
  <View>
    <Appbar.Header style={styles.container}>
      <TouchableWithoutFeedback>
        <View>
          <Link to="/" component={RepositoryTab} />    
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View>
          <Link to="/signin" component={SignInTab}/>
        </View>  
      </TouchableWithoutFeedback>   
    </Appbar.Header>
  </View>
);
};

export default AppBar;