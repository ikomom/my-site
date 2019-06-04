import Immutable from "immutable";
import axios from 'axios';

const initialState = Immutable.fromJS({
  isAuthenticated: false,// 是否登陆
  user: null, // 当前用户
});

export const types = {
  SIGN_IN: 'AUTH/SIGN_IN',
  SIGN_UP: 'AUTH/SIGN_UP',
  SIGN_OUT: 'APP/SIGN_OUT'
};

export const actions = {
  signIn: (values = {}) => {
    return async dispatch => {
      let response = await axios.post('http://localhost:7000/signin', values);
      if (response.status === 200) {
        dispatch({type: types.SIGN_IN, response: response.data})
      }else {
        dispatch({type: types.SIGN_IN, response: null})
      }

    }
  },
  signUp: (values = {}) => {
    return async dispatch => {
      let response = await axios.post('http://localhost:7000/signup', values);
      if (response.status === 200) {
        dispatch({type: types.SIGN_UP, response: response.data})
      }else {
        dispatch({type: types.SIGN_UP, response: null})
      }
    }
  },
  signOut: () => ({
    type: types.SIGN_OUT
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return state.merge({isAuthenticated: true, user: {}});
    case types.SIGN_OUT:
      return state.merge({isAuthenticated: false, user: null});
    default:
      return state;
  }
};

export default reducer;

// selectors
export const getAuthState = state => {
  return state.getIn(["auth", "isAuthenticated"]);
};
