import React from 'react'
import { makeStyles, Card, CardContent, Typography, Container, CircularProgress} from '@material-ui/core'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NoAvatar from './NoAvatar'
import Avatar from './Avatar'


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

}))

const Perfil = () => {
    const { userID } = useParams()
    const classes = useStyles()
    useFirestoreConnect({
        collection: "usuarios",
        doc: userID
    })

    const user = useSelector(state => state.firestore.data.usuarios[userID])
    const test = useSelector(state => state.firestore.data.usuarios)
    const test2 = useSelector(state => state.firebase.auth.uid)
    console.log("usuarios: " + test)
    console.log("logeado: " + test2)
    if (!isLoaded(user))
        return <CircularProgress className={classes.spinnerContainer}>loading...</CircularProgress>


    return (
        <Card className={classes.root}>
            <Container className={classes.contenedor}>
                {user.avatar ?
                    <Avatar avatar={user.avatar} /> : <NoAvatar />}
            </Container>
            <CardContent>
                <Typography align="center" variant="h3">{user.firstName + " " + user.lastName}</Typography>
                <Typography variant="body1">{user.descripcion}</Typography>
            </CardContent>
        </Card>
    )
}

export default Perfil
