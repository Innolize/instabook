export const signIn = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        debugger
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
    debugger
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
    const [firstName, lastName, email, password] = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        try {
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
            debugger
            console.log(resp)
            await firestore.collection("usuarios").doc(resp.user.uid).set({
                firstName,
                lastName,
                email,
                avatar: '',
                description: ""
            })
            dispatch({ type: "USER_CREATED" })
        } catch (error) {
            console.log(error)
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(
                email,
                password
            )
            dispatch({ type: "LOGIN_SUCCESS" })
        } catch (error) {
            dispatch({ type: "LOGIN_ERROR", payload: error })
        }
    }
}