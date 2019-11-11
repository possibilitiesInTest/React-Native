import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({ email, password }) => {
    // make api request to sugnup with email|password
    // if we sign up, modify state, say we are authed
    // if sign up fials, return err
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // try to signin
    // handle success by updating state
    // handle failure by showing error message
  };
};

const signout = dispatch => {
  return () => {
    // signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
