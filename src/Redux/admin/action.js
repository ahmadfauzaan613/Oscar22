import axios from 'axios'

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}

export const loginadmin = (admin) => {
  return {
    type: 'SET_LOGIN_ADMIN',
    payload: admin,
  }
}

export const postAdmin = (username, password) => {
  console.log(username, password)
  return async (dispatch) => {
    try {
      let response = await axios.post(`http://localhost:3000/admin`, {
        username,
        password,
      })
      let login = response.data
      dispatch(loginadmin(login))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
}
