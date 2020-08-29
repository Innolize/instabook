import React, { useState } from 'react'
import { Avatar, Input, Box, makeStyles, Button, IconButton, Divider } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { agregaComentario } from '../../redux/actions/index.js'

const useStyles = makeStyles({
    root: {
        display: "flex",
        margin: "8px",
    },
    inputText: {
        flexGrow: 1
    }
})


const CrearComentario = ({ userID, postID }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [comentario, setComentario] = useState("")
    console.log(comentario)

    const crearComentario = () => {
        dispatch(agregaComentario({ userID, postID, comment: comentario })
        )
    }

    return (
        <>
            <Divider variant="middle" />
            <Box className={classes.root}>
                <Button>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
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
