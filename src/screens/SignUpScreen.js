import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import AuthNavLink from '../components/AuthNavLink';

const SignUpScreen = () => {
  const { state, signup, clearErrMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMessage} />
      <AuthForm
        headerText="Sign Up for TrackIt"
        errorMessage={state.errorMessage}
        buttonText="Sign Up"
        onSubmit={signup}
      />
      <AuthNavLink text={`Already have an account?\nSign In instead!`} routeName="SignIn" />
    </View>
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignUpScreen;
