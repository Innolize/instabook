import React from 'react'
import { makeStyles, Card, CardContent, Typography, Container, CircularProgress } from '@material-ui/core'
import { isLoaded } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Avatar from './Avatar'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 480,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        marginBotton: "10px",
        paddingTop: "15px",
        paddingBottom: "15px",
        backgroundColor: "white",
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        },
    },
    media: {
        height: 300,
        width: 450,
        display: "flex",
        alignSelf: 'center',

    },
    contenedor: {
        minWidth: 480,
        backgroundColor: 'gray'
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '400px'
    },

}))

const Perfil = () => {
    const { userID } = useParams()
    const classes = useStyles()

    const usuarios = useSelector(state => state.firestore.data.usuarios)

    if (!isLoaded(usuarios))
        return <CircularProgress className={classes.spinnerContainer}>loading...</CircularProgress>

    const usuario = usuarios[userID]


    return (
        <Card className={classes.root}>
            <Container className={classes.contenedor}>
                <Avatar avatar={usuario.avatar} />
            </Container>
            <CardContent>
                <Typography align="center" variant="h3">{usuario.firstName + " " + usuario.lastName}</Typography>
                <Typography variant="body1">{usuario.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default Perfil
