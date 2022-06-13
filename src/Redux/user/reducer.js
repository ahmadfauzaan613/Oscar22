const intialstate = {
  user: {},
}

export const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
