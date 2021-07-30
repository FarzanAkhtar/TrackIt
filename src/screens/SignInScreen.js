import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import AuthNavLink from '../components/AuthNavLink';

const SignInScreen = () => {
  const { state, signin, clearErrMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMessage} />
      <AuthForm
        headerText="Sign In to TrackIt"
        errorMessage={state.errorMessage}
        buttonText="Sign In"
        onSubmit={signin}
      />
      <AuthNavLink text={`Don't have an account?\nSign Up instead!`} routeName="SignUp" />
    </View>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignInScreen;
