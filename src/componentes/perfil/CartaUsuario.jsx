import React from 'react'
import { makeStyles, Card, CardContent, Typography, Container, CircularProgress, Input, Button } from '@material-ui/core'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NoAvatar from './NoAvatar'
// import moduleName from 'react-router-firestore'


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
        minHeight: 250,
        backgroundColor: 'gray'
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '400px'
    },
    avatar: {
        maxWidth: 480,
        [theme.breakpoints.up('lg')]: {
            maxWidth: '100%'
        },
    }
}))

const Perfil = () => {
    const { userID } = useParams()
    const classes = useStyles()
    useFirestoreConnect({
        collection: "usuarios",
        doc: userID
    })

    const user = useSelector(state => state.firestore.data.usuarios[userID])

    if (!isLoaded(user))
        return <CircularProgress className={classes.spinnerContainer}>loading...</CircularProgress>


    return (
        <Card className={classes.root}>
            <Container className={classes.contenedor}>
                {user.avatar ? <img className={classes.avatar} alt={user.avatar} src={user.avatar} /> : <NoAvatar></NoAvatar>}
            </Container>
            <CardContent>
                <Typography align="center" variant="h3">{user.firstName + " " + user.lastName}</Typography>
                <Typography variant="body1">{user.descripcion}</Typography>
            </CardContent>
        </Card>
    )
}

export default Perfil
