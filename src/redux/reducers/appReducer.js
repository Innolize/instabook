const initialState = {}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AGREGAR_PUBLICACION":
            console.log("AGREGAR_PUBLICACION")
            return state
        case "ELIMINAR_PUBLICACION":
            console.log("PUBLICACION_ELIMINADA")
            return state
        case "DAR_LIKE":
            console.log("DA LIKE")
            return state
        case "QUITAR_LIKE":
            console.log("QUITAR_LIKE")
            return state
        case "AGREGAR_COMENTARIO":
            console.log("COMENTARIO_AGREGADO")
            return state
        case "DAR_LIKE_COMENTARIO":
            console.log("DAR_LIKE_COMENTARIO")
            return state
        default:
            return state
    }
}

export default appReducer