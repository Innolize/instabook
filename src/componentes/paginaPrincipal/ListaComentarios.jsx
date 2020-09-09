import React from 'react'
import CrearComentario from './CrearComentario'
import Comentario from './Comentario'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const ListaComentarios = ({ postID }) => {

    useFirestoreConnect([{
        collection: `publicaciones/${postID}/comentarios`,
        orderBy: ['date', 'asc'],
        storeAs: `publicacion_${postID}_comentarios`
    }]);

    const comentarios = useSelector(state => state.firestore.ordered[`publicacion_${postID}_comentarios`])
    return (
        <div>
            {comentarios && comentarios.map((comentario, i) => <Comentario key={i} props={comentario}></Comentario>)}
            <CrearComentario
                postID={postID}
            ></CrearComentario>
        </div >
    )
}

export default ListaComentarios
