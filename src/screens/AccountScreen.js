import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Account Screen</Text>
      <Button title="SignOut" onPress={() => navigation.navigate('loginFlow')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
