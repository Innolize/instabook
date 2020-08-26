import React from 'react'
import { Grid } from '@material-ui/core'
import CartaUsuario from './CartaUsuario'
import { useParams } from 'react-router-dom'
import ListaPublicaciones from '../paginaPrincipal/ListaPublicaciones'

const Index = () => {
    const { userID } = useParams()
    const propiedadesLista = {
        collection: "publicaciones",
        where: ['userID', '==', userID],
        orderBy: ['date', 'desc']
    }

    return (
        <Grid container>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <CartaUsuario></CartaUsuario>
                <ListaPublicaciones objeto={propiedadesLista}></ListaPublicaciones>
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default Index
