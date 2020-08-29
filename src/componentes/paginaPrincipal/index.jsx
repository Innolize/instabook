import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import ListaFeed from './UserList'
import CrearComentario from './CrearPublicacion'
import ListaPublicaciones from './ListaPublicaciones'

const PaginaPrincipal = () => {
    const propiedadesLista = {
        collection: "publicaciones",
        orderBy: ['date', 'desc']
    }
    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
                <Hidden smDown>
                    <ListaFeed />
                </Hidden>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CrearComentario></CrearComentario>
                <ListaPublicaciones objeto={propiedadesLista} />
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default PaginaPrincipal