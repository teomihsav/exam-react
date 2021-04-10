

import { combineReducers } from 'redux'
import authReducer from './authReducer'
import menuReducer from './menuReducer'
import coordsReducer from './coordsReducer'

export default combineReducers({
    auth: authReducer,
    menu: menuReducer,
    coordinats: coordsReducer
})