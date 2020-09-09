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
                avatar: imagenURL,
                imageLocation: referencia
            })

            debugger
            dispatch({ type: "ADDED_IMAGE", imagenURL });
        } catch (error) {
            console.log("upload error: ", error)
        }
    };
};

export const agregaComentario = (payload) => {
    console.log(payload)
    const { postID } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {

        try {
            const firestore = getFirestore();
            const ref = await firestore.collection("publicaciones").doc(postID).collection('comentarios')
            debugger
            ref.add
                ({
                    ...payload,
                    likes: [],
                    date: Date.now()
                })
            dispatch({
                type: "AGREGAR_COMENTARIO",
                payload
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const darLikeComentario = (payload) => {
    debugger
    const { postID, userID, commentID } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {

            const firestore = await getFirestore()
            const doc = firestore.collection("publicaciones").doc(postID).collection('comentarios').doc(commentID)
            debugger
            doc.update({
                likes: firestore.FieldValue.arrayUnion(userID)
            })
            dispatch({ type: "DAR_LIKE_COMENTARIO" })
        } catch (error) {
            console.log(error)
        }
    }
}

export const quitarLikeComentario = (payload) => {
    const { postID, userID, commentID } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            debugger
            const firestore = await getFirestore()
            const doc = firestore.collection("publicaciones").doc(postID).collection('comentarios').doc(commentID)
            debugger
            doc.update({
                likes: firestore.FieldValue.arrayRemove(userID)
            })
            dispatch({ type: "QUITAR_LIKE_COMENTARIO" })
        } catch (error) {
            console.log(error)
        }
    }
}

export const eliminarComentario = (payload) => {
    const { postID, commentID } = payload
    return async (dispatch, getState, { getFirebase, getFirestore }) => {

        try {
            const firestore = getFirestore();
            await firestore.collection("publicaciones").doc(postID).collection('comentarios').doc(commentID).delete()

            dispatch({
                type: "ELIMINA_COMENTARIO",
                payload
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const actualizarPerfilCompleto = (payload) => {
    const { info, image, oldPathImage } = payload
    const { userID } = info
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore()
        const imagesPath = "perfil";

        try {
            debugger
            if (image) {
                debugger
                const respuesta = await firebase.uploadFile(imagesPath, image)
                const referencia = respuesta.uploadTaskSnapshot.ref.location.path_
                const storage = firebase.storage();
                const pathReference = storage.ref(referencia);
                const imageURL = await pathReference.getDownloadURL()

                firestore.collection("usuarios").doc(userID).update({
                    ...info,
                    avatar: imageURL,
                    imageLocation: referencia
                })
                debugger
                firebase.deleteFile(oldPathImage)
                console.log("exito!")
                dispatch({ type: "PROFILE_UPDATE_WITH_IMAGE" });
            } else {
                debugger
                firestore.collection("usuarios").doc(userID).update({
                    ...info,
                })
                dispatch({ type: "PROFILE_UPDATE_W/O_IMAGE" });
            }

        } catch (error) {
            console.log("upload error: ", error)
        }

    }
}