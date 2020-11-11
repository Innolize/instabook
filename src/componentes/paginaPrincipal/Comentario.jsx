import React, { useState } from 'react'
import { makeStyles, Box, Avatar, Typography, IconButton, Card, CardHeader, CardContent } from '@material-ui/core'
import { ThumbUp } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import momment from 'moment'
import { darLikeComentario, quitarLikeComentario } from '../../redux/actions'
import { Opciones } from './Publicacion'
import { eliminarComentario } from '../../redux/actions'

const useStyles = makeStyles({
    root: {
        margin: "8px",
        padding: 0
    },
    cardHeader: {
        padding: 8
    },
    inputText: {
        flexGrow: 1
    },
    username: {
        fontWeight: "bold"
    },
    centeredText: {
        margin: 'auto 0px'
    }
})

const Comentario = ({ props }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { postID, comment, commentAuthor, date, id, likes } = props

    const time = momment(new Date(date), 'YYYYMMDD').fromNow();


    const [showOptions, setShowOptions] = useState(false)

    const commentAuthorUser = useSelector(state => state.firestore.data.usuarios[commentAuthor])

    const userLogged = useSelector(state => state.firebase.auth.uid)

    const userLike = likes.includes(userLogged)

    const selfComment = (commentAuthor === userLogged)


    const darLike = () => {
        dispatch(darLikeComentario({ userID: userLogged, postID, commentID: id }))
    }

    const quitarLike = () => {
        dispatch(quitarLikeComentario({ userID: userLogged, postID, commentID: id }))
    }

    return (
            <Card className={classes.root}
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
            >
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar} src={commentAuthorUser.avatar} />
                    }
                    action={showOptions && userLogged &&
                        <Opciones
                            self={selfComment}
                            payload={{ postID, commentID: id }}
                            callbackAction={eliminarComentario}
                        />}
                    title={<Typography variant="h6">{`${commentAuthorUser.firstName} ${commentAuthorUser.lastName}`}</Typography>}

                />
                <CardContent>
                    <Typography variant="body2" >
                        {comment}
                    </Typography>
                </CardContent>
                <Box display='flex' justifyContent='space-around'>
                    <IconButton onClick={userLogged ? (userLike ? quitarLike : darLike) : () => console.log("usuario no logeado")}>
                        <ThumbUp color={userLike ? 'primary' : 'inherit'} />
                        {likes.length > 0 ? likes.length : null}
                    </IconButton>
                    <Typography className={classes.centeredText}>
                        {time}
                    </Typography>
                </Box>
            </Card>
    )
}

export default Comentario