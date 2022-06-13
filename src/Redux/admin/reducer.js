const intialstate = {
  admin: {},
}

export const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case 'SET_LOGIN_ADMIN':
      return {
        ...state,
        admin: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
