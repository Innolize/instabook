import appReducer from './appReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    appReducer: appReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
})

export default rootReducer