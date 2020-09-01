import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CartaUsuario from './CartaUsuario'
import ListaPublicaciones from '../paginaPrincipal/ListaPublicaciones'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    posicionamientoPrincipal: {
        paddingTop: 65
    }
}))



const Profile = () => {
    const classes = useStyles()

    const { userID } = useParams()
    useFirestoreConnect({
        collection: "publicaciones",
        where: ['userID', '==', userID],
        orderBy: ['date', 'desc'],
        storeAs: 'publicacionesPerfil'
    })

    return (
        <Grid container className={classes.posicionamientoPrincipal}>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CartaUsuario></CartaUsuario>
                <ListaPublicaciones></ListaPublicaciones>
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default Profile
