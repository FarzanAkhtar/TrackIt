import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const AuthNavLink = ({ navigation, text, routeName }) => {
  return (
    <>
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
          <Text style={styles.navigate}>{text}</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  navigate: {
    color: 'blue',
    fontSize: 16
  }
});

export default withNavigation(AuthNavLink);
