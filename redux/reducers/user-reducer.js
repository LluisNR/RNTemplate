import { USER_ACTIONS } from '../actions/user-actions'

const initialState = {
  name: 'John',
  logins: 4,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case USER_ACTIONS.LOGIN:
      return {
        ...state,
        logins: ++state.logins
      };

    default:
      return state
  }
};
