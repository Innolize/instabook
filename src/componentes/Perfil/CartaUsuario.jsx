import React from 'react'
import { makeStyles, Card, CardContent, CardMedia, Typography, Container, CircularProgress } from '@material-ui/core'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import moduleName from 'react-router-firestore'


const useStyles = makeStyles(() => ({
    root: {
        minWidth: 480,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px 10px 0px",
        padding: "15px 0px 15px 0px",
        backgroundColor: "white"
    },
    media: {
        height: 300,
        width: 450,
        display: "flex",
        alignSelf: 'center',

    },
    contenedor: {
        minWidth: 480,
        minHeight: 320,
        backgroundColor: 'gray'
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '400px'
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
                <Typography variant='h3' align='center'> No Avatar</Typography>
            </Container>
            {/* <CardMedia className={classes.media}
                image="https://picsum.photos/480/320"
            /> */}
            <CardContent>
                <Typography align="center" variant="h3">{user.firstName + " " + user.lastName}</Typography>
                <Typography variant="body1">{user.descripcion}</Typography>
            </CardContent>
        </Card>
    )
}

export default Perfil
