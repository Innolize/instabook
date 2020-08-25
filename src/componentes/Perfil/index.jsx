import React from 'react'
import { Grid } from '@material-ui/core'
import CartaUsuario from './CartaUsuario'
import Publicacion from '../paginaPrincipal/Publicacion'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'

const Index = () => {
    const { userID } = useParams()
    console.log(userID)
    useFirestoreConnect([
        {
            collection: "publicaciones",
            where: ['userID', '==', userID],
            orderBy: ['date', 'desc']
        }
    ])
    const publicaciones = useSelector(state => state.firestore.ordered.publicaciones)
    console.log(publicaciones)

    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CartaUsuario></CartaUsuario>
                {publicaciones && publicaciones.map(x => <Publicacion props={x} key={x.date} />)}
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default Index
