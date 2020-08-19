import React, { useState } from 'react'
import { Card, CardContent, CardHeader, makeStyles, TextField, Button, CardActions, Avatar } from '@material-ui/core'
import { agregaPublicacion } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 480,
        width: '100%',
        marginTop: '15px'
    },
    cardContainer: {
        height: 300,
    },
    styledTextfield: {
        width: '100%',
    }
}))


const CrearComentario = () => {
    const [value, setvalue] = useState("")
    const user = "testcomentario"
    const youtube = "https://www.youtube.com/embed/x5uF0-7M9vk"
    const classes = useStyles()
    const dispatch = useDispatch()

    const auth = useSelector(state => state.firebase.auth.uid)

    if (!auth)
        return null




    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatarLarge} alt="avatar" src="https://picsum.photos/200/300"> </Avatar>
                }
                title="test test test"
            />
            <CardContent>
                <TextField
                    className={classes.styledTextfield}
                    size="medium"
                    multiline
                    onChange={(e) => setvalue(e.target.value)}
                />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={() => dispatch(agregaPublicacion({ comment: value, user, youtube }))}>Send</Button>
            </CardActions>

        </Card>
    )
}

export default CrearComentario
