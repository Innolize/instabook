const initialState = {
    authError: null,
    isLogged: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "LOGIN_SUCCESS":
            console.log('login success')
            return { ...state, authError: null, isLogged: true }
        case "LOGIN_ERROR":
            console.log('login error')
            return { ...state, authError: payload.message }
        case "LOGOUT_SUCCESS":
            console.log('logout success')
            return { ...state, isLogged: false }
        case "LOGOUT_ERROR":
            console.log(payload)
            return state
        case "ACCOUNT_CREATED":
            console.log("account created")
            return { ...state, isLogged: true }
        default:
            return state
    }
}
