import axios from 'axios'

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  }
}

export const postLogin = (username, password) => {
  console.log(username, password)
  return async (dispatch) => {
    try {
      let response = await axios.post(`http://localhost:3000/user`, {
        id: 'null',
        username,
        password,
      })
      let login = response.data
      dispatch(setUser(login))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
}
