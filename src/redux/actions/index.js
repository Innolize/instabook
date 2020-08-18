export const agregaPublicacion = (payload) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        await firestore.collection("publicaciones").add({
            ...payload
        })
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