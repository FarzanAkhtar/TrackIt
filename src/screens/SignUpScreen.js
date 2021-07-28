import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignUp Screen</Text>
      <Button title="Go to SignIn" onPress={() => navigation.navigate('SignIn')} />
      <Button title="Go to mainflow" onPress={() => navigation.navigate('mainFlow')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
