import React from 'react'
import { Grid } from '@material-ui/core'
import Publicacion from './Publicacion'
import ListaFeed from './UserList'
import CrearComentario from './CrearComentario'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { makeStyles, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 480,
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px 10px 0px",
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '400px'

    }
}))

const PaginaPrincipal = () => {

    const classes = useStyles()
    useFirestoreConnect(['publicaciones'])
    const publicaciones = useSelector((state) => state.firestore.ordered.publicaciones)
    console.log(publicaciones)
    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
                <ListaFeed />
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CrearComentario></CrearComentario>
                {publicaciones ? publicaciones.map((publicacion) => <Publicacion props={publicacion} key={publicacion.id} />) : <div className={classes.spinnerContainer}><CircularProgress className={classes.root}>loading...</CircularProgress></div>}
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default PaginaPrincipal