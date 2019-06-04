import Immutable from "immutable";

const initialState = Immutable.fromJS({
  chatNumber: 0,
});

export const types = {
  ADD_NUMBER: 'APP/ADD_NUMBER',
  RESET_NUMBER: 'APP/RESET_NUMBER'
};

export const actions = {
  addNumber: () => ({
    type: types.ADD_NUMBER
  }),
  resetNumber: () => ({
    type: types.RESET_NUMBER
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NUMBER:
      return state.merge({chatNumber: state.get('chatNumber') + 1});
    case types.RESET_NUMBER:
      return state.merge({chatNumber: 0});
    default:
      return state;
  }
};

export default reducer;

// selectors
export const getNumber = state => {
  return state.getIn(["chat", "chatNumber"]);
};
