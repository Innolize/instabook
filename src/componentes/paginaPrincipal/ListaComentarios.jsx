import React from 'react'
import CrearComentario from './CrearComentario'
import Comentario from './MuestraComentario'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const ListaComentarios = (props) => {
    console.log(props)
    const userID = props.userID
    const postID = props.postID

    useFirestoreConnect([{
        collection: `publicaciones/${postID}/comentarios`,
        orderBy: ['date', 'asc'],
        storeAs: `publicacion_${postID}_comentarios`
    }]);

    const comentarios = useSelector(state => state.firestore.ordered[`publicacion_${postID}_comentarios`])

    return (
        <div>
            {comentarios && comentarios.map((x, i) => <Comentario key={i} props={x}></Comentario>)}
            <CrearComentario
                props={{ userID, postID }}
            ></CrearComentario>
        </div >
    )
}

export default ListaComentarios
