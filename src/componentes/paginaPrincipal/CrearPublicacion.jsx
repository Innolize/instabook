import React, { useState } from 'react'
import { Card, CardContent, CardHeader, makeStyles, TextField, Button, CardActions, Avatar, IconButton, CircularProgress, Box, Typography } from '@material-ui/core'
import { InsertPhoto } from '@material-ui/icons'
import YouTubeIcon from '@material-ui/icons/YouTube';
import { agregaPublicacion } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 480,
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        marginBotton: "10px",
        paddingTop: "15px",
        paddingBottom: "15px",
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        },
    },
    cardContainer: {
        height: 300,
    },
    styledTextfield: {
        width: '100%',
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: 300
    }
}))

const CrearPublicacion = () => {
    const [value, setValue] = useState("")
    const [youtube, setYoutube] = useState(false)
    const [image, setImage] = useState(false)
    const [youtubeLink, setYoutubeLink] = useState('')
    const [imageLink, setImageLink] = useState('')

    const usuarios = useSelector(state => state.firestore.data.usuarios)
    const userID = useSelector(state => state.firebase.auth.uid)

    const classes = useStyles()
    const dispatch = useDispatch()

    if (!userID)
        return null

    if (!isLoaded(usuarios)) {
        return <div className={classes.spinnerContainer}><CircularProgress>loading...</CircularProgress></div>
    }

    const usuario = usuarios[userID]
    const nuevaPublicacion = () => {
        const linkConvertido = youtubeLink.replace("watch?v=", "embed/")
        dispatch(agregaPublicacion({ comment: value, firstName: usuario.firstName, lastName: usuario.lastName, userID, youtube: linkConvertido, image: imageLink }))
        setValue("")
        setYoutubeLink("")
        setImageLink("")
        setYoutube(false)
        setImage(false)
    }

    const youtubeSwitchHandler = () => {
        setYoutube(!youtube)
        setYoutubeLink('')
    }

    const imageSwitchHandler = () => {
        setImage(!image)
        setImageLink('')
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatarLarge} alt="avatar" src={usuario.avatar}> </Avatar>
                }
                title={
                    <Typography variant="h5"> {usuario.firstName + " " + usuario.lastName}</Typography>}
            />
            <CardContent>
                <TextField
                    className={classes.styledTextfield}
                    size="small"
                    multiline
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div>
                    {youtube && <TextField placeholder="Youtube link" value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)}></TextField>}
                    {image && <TextField placeholder="Image link" value={imageLink} onChange={(e) => setImageLink(e.target.value)}></TextField>}
                </div>
            </CardContent>

            <CardActions>
                <Box display="flex" flexGrow="1">
                    <IconButton onClick={youtubeSwitchHandler}>
                        <YouTubeIcon color={youtube ? "primary" : "disabled"}></YouTubeIcon>
                    </IconButton>

                    <IconButton onClick={imageSwitchHandler}>
                        <InsertPhoto color={image ? "primary" : "disabled"} ></InsertPhoto>
                    </IconButton>
                </Box>
                <Button variant="contained" color="primary" onClick={nuevaPublicacion}>Send</Button>
            </CardActions>
        </Card >
    )
}

export default CrearPublicacion
