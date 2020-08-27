import React, { useState } from 'react'
import { Card, CardContent, Typography, makeStyles, Avatar, IconButton, CardHeader, CardActions, Menu, MenuItem } from '@material-ui/core'
import { Share, FavoriteBorder, MoreVert, Favorite } from '@material-ui/icons'
import { eliminaPublicacion, darLike, quitarLike } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: 480,
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px 10px 0px",
    },
    avatarLarge: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    tituloCarta: {
        flexGrow: '1',
    },
    media: {
        height: 320,
        width: 480,
        display: "flex",
        alignSelf: 'center',
    },
    linkSinDecoracion: {
        textDecoration: 'none',
        color: 'black'
    }
}))

const Publicacion = ({ props }) => {
    const dispatch = useDispatch()
    const currentUserID = useSelector(state => state.firebase.auth.uid)
    const userLike = props.likes.includes(currentUserID)
    const classes = useStyle()
    const time = moment(new Date(props.date), 'YYYYMMDD').fromNow();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <NavLink to={`/profile/${props.userID}`}>
                            <Avatar className={classes.avatarLarge} alt="avatar" src={props.avatar} />
                        </NavLink>
                    }

                    title={
                        <NavLink to={`/profile/${props.userID}`} className={classes.linkSinDecoracion}>
                            <Typography variant="h6">{props.firstName + " " + props.lastName}</Typography>
                        </NavLink>
                    }
                    subheader={time}
                    action={currentUserID &&
                        <Opciones
                            postAuthor={props.userID}
                            postID={props.id}
                            currentUserID={currentUserID}
                        ></Opciones>
                    }

                />
                <CardContent >
                    <Typography variant="body1">
                        {props.comment}
                    </Typography>
                </CardContent >
                {/* <CardMedia
                    className={classes.media}
                    component="iframe"
                    src={props.youtube}
                    title="test"
                /> */}
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
            </Card >
        </div >
    )
}

const Opciones = ({ postAuthor, postID, currentUserID }) => {
    const selfpost = (currentUserID === postAuthor)
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
                {selfpost && <MenuItem onClick={() => dispatch(eliminaPublicacion(postID))}>Remove</MenuItem>}
                <MenuItem onClick={handleClose}>Unfollow User</MenuItem>
                <MenuItem onClick={handleClose}>Report</MenuItem>
            </Menu>
        </div>
    );
}



export default Publicacion