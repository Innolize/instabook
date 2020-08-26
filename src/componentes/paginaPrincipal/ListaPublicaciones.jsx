import React from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { CircularProgress, makeStyles } from '@material-ui/core'
import Publicacion from './Publicacion'

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

const ListaPublicaciones = ({ objeto }) => {
    const classes = useStyles()
    useFirestoreConnect([
        objeto
    ])

    const publicaciones = useSelector((state) => state.firestore.ordered.publicaciones)

    if (!isLoaded(publicaciones)) {
        return <div className={classes.spinnerContainer}><CircularProgress className={classes.root}>loading...</CircularProgress></div>
    }

    if (isEmpty(publicaciones)) {
        return null
    }

    return (
        publicaciones.map((publicacion) => <Publicacion props={publicacion} key={publicacion.id} />)
    )
}

export default ListaPublicaciones
