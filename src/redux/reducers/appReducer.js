const initialState = {}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AGREGAR_PUBLICACION":
            console.log("AGREGAR_PUBLICACION")
            return state


        default:
            return state
    }
}

export default appReducer