export const agregaPublicacion = (payload) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        await firestore.collection("publicaciones").add({
            ...payload,
            likes: [],
            date: Date.now()
        })
        dispatch({
            type: "AGREGAR_PUBLICACION",
            payload
        })

    }
}

export const eliminaPublicacion = (payload) => {
    const docToRemove = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        await firestore.collection("publicaciones").doc(docToRemove).delete()

        dispatch({
            type: "ELIMINA_PUBLICACION"
        })
    }

}

export const unirArray = () => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = await getFirestore()
            const test = firestore.collection("test").doc("sk7BY9G9xFmTIsDfuB2H")
            await test.update({
                array: firestore.FieldValue.arrayRemove(1)
            });
        } catch (e) {
            console.log(e)
        }
        debugger
        //     type: "ELIMINA_PUBLICACION"
    }

}

export const darLike = (payload) => {
    console.log(payload)
    const { publicacionID, IDUsuario } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = await getFirestore()
            const doc = firestore.collection("publicaciones").doc(publicacionID)
            doc.update({
                likes: firestore.FieldValue.arrayUnion(IDUsuario)
            })
            dispatch({ type: "DAR_LIKE" })
        } catch (error) {
            console.log(error)
        }
    }
}


export const quitarLike = (payload) => {
    const { publicacionID, IDUsuario } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = await getFirestore()
            const doc = firestore.collection("publicaciones").doc(publicacionID)
            doc.update({
                likes: firestore.FieldValue.arrayRemove(IDUsuario)
            })
            dispatch({ type: "QUITAR_LIKE" })
        } catch (error) {
            console.log(error)
        }
    }
}