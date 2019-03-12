import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import LoginReducer from './LoginReducer'

const todoApp = combineReducers({
  AppReducer,LoginReducer
})

export default todoApp