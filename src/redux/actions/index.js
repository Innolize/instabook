export const actionName = (payload) => {
    return (dispatch, getState) => {

        dispatch({ type: "TEST", payload })

    }
}


export const agregaPublicacion = (payload) => {
    return (dispatch, getState) => {
        dispatch({
            type: "AGREGAR_PUBLICACION",
            payload
        })

    }
}


export const eliminaPublicacion = (payload) => ({
    type: "ELIMINA_PUBLICACION",
    payload
})