import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as adminReducer } from './admin/reducer'
import { reducer as userReducer } from './user/reducer'
import thunk from 'redux-thunk'

export const reducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))
