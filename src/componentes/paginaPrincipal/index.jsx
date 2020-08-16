import React from 'react'
import { Grid } from '@material-ui/core'
import Publicacion from './Publicacion'
import ListaFeed from './List'
import CrearComentario from './CrearComentario'

const PaginaPrincipal = () => {
    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
                <ListaFeed />
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CrearComentario></CrearComentario>
                <Publicacion />
                <Publicacion />
                <Publicacion />
                <Publicacion />
                <Publicacion />
                <Publicacion />
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default PaginaPrincipal