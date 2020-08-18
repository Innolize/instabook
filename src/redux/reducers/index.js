import appReducer from './appReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    appReducer: appReducer,
    firestore: firestoreReducer
})

export default rootReducer