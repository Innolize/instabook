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


export const subirImagen = (payload) => {
    console.log(payload)
    const { imagen, userID } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        debugger
        const firebase = getFirebase();
        const firestore = getFirestore()
        const imagesPath = "perfil";

        try {
            debugger
            const respuesta = await firebase.uploadFile(imagesPath, imagen)
            debugger
            const referencia = respuesta.uploadTaskSnapshot.ref.location.path_
            const storage = firebase.storage();
            const pathReference = storage.ref(referencia);
            const imagenURL = await pathReference.getDownloadURL()
            firestore.collection("usuarios").doc(userID).update({
                avatar: imagenURL
            })

            debugger
            dispatch({ type: "ADDED_IMAGE", imagenURL });
        } catch (error) {
            console.log("upload error: ", error)
        }
    };
};
