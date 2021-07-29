import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong!!' });
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {};
};

const signout = dispatch => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { signup, signin, signout },
  { isSignedIn: true, errorMessage: '' }
);