import React from 'react'
import { makeStyles, Box, Button, Avatar, Typography, Divider, IconButton } from '@material-ui/core'
import { ThumbUp } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import momment from 'moment'
import { darLikeComentario, quitarLikeComentario } from '../../redux/actions'

const useStyles = makeStyles({
    root: {
        display: "flex",
        margin: "8px",
    },
    inputText: {
        flexGrow: 1
    },
    username: {
        fontWeight: "bold"
    }
})

const MuestraComentario = ({ props }) => {
    console.log(props)
    const { postID, userID, comment, date, id, likes } = props
    const time = momment(new Date(date), 'YYYYMMDD').fromNow();
    const userLike = props.likes.includes(userID)
    const classes = useStyles()
    const dispatch = useDispatch()

    const user = useSelector(state => state.firestore.data.usuarios[userID])

    const darLike = () => {
        dispatch(darLikeComentario({ userID, postID, commentID: id }))
    }

    const quitarLike = () => {
        dispatch(quitarLikeComentario({ userID, postID, commentID: id }))
    }

    return (
        <>
            <Box className={classes.root}>
                <Button>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
                </Button>
                <Box>
                    <Typography
                        className={classes.username}
                        variant="subtitle1"
                    >
                        {`${user.firstName} ${user.lastName}`}
                    </Typography>

                    <Typography variant="body2">
                        {comment}
                    </Typography>
                </Box>

            </Box>
            <Box display='flex' justifyContent='space-around'>
                <IconButton onClick={userLike ? quitarLike : darLike}>
                    <ThumbUp color={userLike ? 'primary' : 'inherit'} />
                    {likes.length > 0 ? likes.length : null}
                </IconButton>
                <Typography variant='caption'>{time}</Typography>
            </Box>
            <Divider></Divider>
        </>
    )
}

export default MuestraComentario