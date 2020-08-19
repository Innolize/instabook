export const signIn = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        try {
            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            )
            dispatch({ type: "LOGIN_SUCCESS" })
        } catch (error) {
            dispatch({ type: "LOGIN_ERROR", payload: error })
        }

    }

}

export const logout = () => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        try {
            await firebase.auth().signOut()
            dispatch({ type: "LOGOUT_SUCCESS" })
        } catch (error) {
            dispatch({ type: "LOGOUT_SUCCESS", payload: error })
        }
    }
}

export const createAccount = (payload) => {
    const [email, password] = payload
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch({ type: "ACCOUNT_CREATED" })
        } catch (error) {
            dispatch({ type: "CREATE_ACCOUNT_FAILED", payload: error })
        }
    }
}