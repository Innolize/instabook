import React from 'react'
import { Grid } from '@material-ui/core'
import Publicacion from './Publicacion'
import ListaFeed from './List'
import CrearComentario from './CrearComentario'
import { useSelector } from 'react-redux' 

const PaginaPrincipal = () => {
    const publicaciones = useSelector(state => state.publicaciones)
    console.log(publicaciones)

    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
                <ListaFeed />
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CrearComentario></CrearComentario>
                {publicaciones.map((publicacion, i) => <Publicacion props={publicacion} key={i} />)}
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default PaginaPrincipal