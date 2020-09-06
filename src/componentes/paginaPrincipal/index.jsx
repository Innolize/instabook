import React from 'react'
import { Grid, Hidden, makeStyles } from '@material-ui/core'
import ListaFeed from './UserList'
import CrearComentario from './CrearPublicacion'
import ListaPublicaciones from './ListaPublicaciones'

const useStyles = makeStyles(() => ({
    posicionamientoPrincipal: {
        paddingTop: 65
    }
}))

const PaginaPrincipal = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.posicionamientoPrincipal}>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
                <Hidden smDown>
                    <ListaFeed />
                </Hidden>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CrearComentario></CrearComentario>
                <ListaPublicaciones />
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default PaginaPrincipal