import React from 'react'
import { useFirestoreConnect, isLoaded, isEmpty, useFirebase } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { CircularProgress, makeStyles } from '@material-ui/core'
import Publicacion from './Publicacion'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 480,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        marginBotton: "10px",
        paddingTop: "15px",
        paddingBottom: "15px",
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        },
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
    console.log(publicaciones)
    if (!isLoaded(publicaciones)) {
        return <div className={classes.spinnerContainer}><CircularProgress>loading...</CircularProgress></div>
    }

    if (isEmpty(publicaciones)) {
        return null
    }

    return (
        <div className={classes.root}>
            {publicaciones && publicaciones.map((publicacion) => <Publicacion props={publicacion} key={publicacion.id} />)}
        </div>
    )
}

export default ListaPublicaciones
