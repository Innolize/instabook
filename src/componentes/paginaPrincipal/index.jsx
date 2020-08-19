import React from 'react'
import { Grid } from '@material-ui/core'
import Publicacion from './Publicacion'
import ListaFeed from './List'
import CrearComentario from './CrearComentario'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const PaginaPrincipal = () => {

    useFirestoreConnect(['publicaciones'])
    const publicaciones = useSelector((state) => state.firestore.ordered.publicaciones)

    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
                <ListaFeed />
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CrearComentario></CrearComentario>
                {publicaciones && publicaciones.map((publicacion) => <Publicacion props={publicacion} key={publicacion.id} />)}
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default PaginaPrincipal