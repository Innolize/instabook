import React from 'react'
import { makeStyles, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { useFirestoreConnect } from 'react-redux-firebase'
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

    }
}))

const Perfil = () => {
    const { userID } = useParams()
    useFirestoreConnect(["usuarios"])

    const user = useSelector(state => state.firestore.data.usuarios)
    let test = user ? user[userID] : ''
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                image="https://picsum.photos/480/320"
            />
            <CardContent>
                {test && <Typography align="center" variant="h3">{test.firstName + " " + test.lastName}</Typography>}
                {test && <Typography variant="body1">{test.descripcion}</Typography>}
            </CardContent>
        </Card>
    )
}

export default Perfil
