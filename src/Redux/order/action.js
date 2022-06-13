import axios from 'axios'

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}
