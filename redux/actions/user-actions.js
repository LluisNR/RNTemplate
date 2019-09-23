export const USER_ACTIONS = {
  LOGIN: 'UserAction.LOGIN',
}

export const login = () => {
  console.log('in login action');
  return {
    type: USER_ACTIONS.LOGIN
  }
}