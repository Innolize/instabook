import React from 'react'
import { makeStyles, Card, CardHeader, CardContent, Avatar, CardMedia, Typography } from '@material-ui/core'


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
    console.log("asd")
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media}
                image="https://picsum.photos/480/320"
            />
            <CardContent>
                <Typography align="center" variant="h3">Test</Typography>
                <Typography variant="body1">Irure aliqua aliquip mollit officia elit aliqua laboris occaecat. Labore minim laboris irure officia et aliqua in ex est amet. Voluptate ex et incididunt in sint commodo officia eu fugiat est ipsum minim.</Typography>
            </CardContent>
        </Card>
    )
}

export default Perfil
