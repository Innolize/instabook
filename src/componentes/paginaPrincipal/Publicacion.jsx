import React, { useState } from 'react'
import { Card, CardContent, Typography, makeStyles, Avatar, IconButton, CardHeader, CardActions, Menu, MenuItem, CardMedia, Divider } from '@material-ui/core'
import { Share, FavoriteBorder, MoreVert, Favorite } from '@material-ui/icons'
import { eliminaPublicacion, darLike, quitarLike } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import ListaComentarios from './ListaComentarios'
import { isLoaded } from 'react-redux-firebase'

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px 10px 0px",
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        },
    },
    avatarLarge: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    tituloCarta: {
        flexGrow: '1',
    },
    cardVideo: {
        height: 320,
        width: 480,
        display: "flex",
        alignSelf: 'center',
    },
    linkSinDecoracion: {
        textDecoration: 'none',
        color: 'black'
    },
    cardImage: {
        height: 320,
        backgroundSize: "contain"
    }
}))

export const Publicacion = ({ props }) => {
    const { userID } = props
    const dispatch = useDispatch()
    const currentUserID = useSelector(state => state.firebase.auth.uid)
    const users = useSelector(state => state.firestore.data.usuarios)



    const userLike = props.likes.includes(currentUserID)
    const selfpost = (currentUserID === userID)
    const classes = useStyle()
    const time = moment(new Date(props.date), 'YYYYMMDD').fromNow();

    if (!isLoaded(users)) {
        return <div>loading...</div>
    }
    
    const authorPost = users[userID]

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <NavLink to={`/profile/${props.userID}`}>
                            <Avatar className={classes.avatarLarge} alt="avatar" src={authorPost ? authorPost.avatar : ""} />
                        </NavLink>
                    }

                    title={
                        <NavLink to={`/profile/${props.userID}`} className={classes.linkSinDecoracion}>
                            <Typography variant="h6">{authorPost.firstName + " " + authorPost.lastName}</Typography>
                        </NavLink>
                    }
                    subheader={time}
                    action={currentUserID &&
                        <Opciones
                            self={selfpost}
                            payload={props.id}
                            callbackAction={eliminaPublicacion}
                        ></Opciones>
                    }

                />
                <CardContent >
                    <Typography variant="body1">
                        {props.comment}
                    </Typography>
                </CardContent >
                {props.youtube && <CardMedia
                    className={classes.cardVideo}
                    component="iframe"
                    src={props.youtube}
                    title="test"
                />}
                {props.image && <CardMedia
                    className={classes.cardImage}
                    image={"https://i.picsum.photos/id/401/200/400.jpg?hmac=mqbaQswuaRhN4kdxiidldM2DsH-ykG3TOqlyZO8ZlpY"}
                    title="test"
                />}
                < CardActions >
                    <IconButton onClick={userLike ? () => dispatch(quitarLike({ publicacionID: props.id, IDUsuario: currentUserID })) : () => dispatch(darLike({ publicacionID: props.id, IDUsuario: currentUserID }))}>
                        {userLike ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                    {props.likes.length > 0 ? props.likes.length : null}
                    <IconButton>
                        <Share></Share>
                    </IconButton>
1
                </CardActions >

                <Divider variant="middle" ></Divider>

                <ListaComentarios
                    userID={props.userID}
                    postID={props.id}
                ></ListaComentarios>
            </Card >
        </>
    )
}

export const Opciones = ({ self, payload, callbackAction = () => { } }) => {
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreVert />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {self && <MenuItem onClick={() => dispatch(callbackAction(payload))}>Remove</MenuItem>}
                <MenuItem onClick={handleClose}>Unfollow User</MenuItem>
                <MenuItem onClick={handleClose}>Report</MenuItem>
            </Menu>
        </div>
    );
}