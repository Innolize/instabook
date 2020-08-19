const initialState = {}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AGREGAR_PUBLICACION":
            return {
                ...state, publicaciones: [...state.publicaciones, payload]
            }


        default:
            return state
    }
}

export default appReducer