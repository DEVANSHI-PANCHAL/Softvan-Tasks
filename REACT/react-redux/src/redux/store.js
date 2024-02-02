import {createStore, legacy_createStore} from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = legacy_createStore(cakeReducer)

export default store