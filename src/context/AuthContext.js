import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'clear_err':
      return { ...state, errorMessage: '' };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrMessage = dispatch => {
  return () => {
    dispatch({ type: 'clear_err' });
  };
};

const localSignin = dispatch => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: 'signin', payload: token });
      navigate('TrackList');
    } else {
      navigate('loginFlow');
    }
  };
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong!!' });
    }
  };
};

const signin = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      navigate('TrackList');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong!!' });
    }
  };
};

const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
  };
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { signup, signin, signout, clearErrMessage, localSignin },
  { token: null, errorMessage: '' }
);
