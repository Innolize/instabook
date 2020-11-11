import React, { useState } from 'react'
import { Avatar, Input, Box, makeStyles, Button, IconButton, Divider } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { agregaComentario } from '../../redux/actions/index.js'
import { isLoaded } from 'react-redux-firebase'

const useStyles = makeStyles({
    root: {
        display: "flex",
        margin: "8px",
    },
    inputText: {
        flexGrow: 1
    }
})


const CrearComentario = ({ postID }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [comentario, setComentario] = useState("")


    const currentUserID = useSelector(state => state.firebase.auth.uid)
    const users = useSelector(state => state.firestore.data.usuarios)

    const crearComentario = () => {
        dispatch(agregaComentario({ postID, comment: comentario, commentAuthor: currentUserID }))
        setComentario("")
    }


    if (!currentUserID) {
        return null
    }

    if (!isLoaded(users)) {
        return <div>loading...</div>
    }
    const currentUser = users[currentUserID]


    return (
        <>
            <Divider variant="middle" />
            <Box className={classes.root}>
                <Button>
                    <Avatar alt="Remy Sharp" src={currentUser.avatar} />
                </Button>
                <Input
                    className={classes.inputText}
                    multiline
                    placeholder='Leave a comment...'
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                />
                <IconButton onClick={crearComentario}>
                    <Send />
                </IconButton>
            </Box>
        </>
    )
}

export default CrearComentario
