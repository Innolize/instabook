import React, { useState } from 'react'
import { Card, CardContent, CardHeader, makeStyles, TextField, Button, CardActions, Avatar, IconButton } from '@material-ui/core'
import { InsertPhoto } from '@material-ui/icons'
import YouTubeIcon from '@material-ui/icons/YouTube';
import { agregaPublicacion } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'

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

const CrearPublicacion = () => {
    const [value, setValue] = useState("")
    const [youtube, setYoutube] = useState(false)
    const [image, setImage] = useState(false)
    const [youtubeLink, setYoutubeLink] = useState('')
    const [imageLink, setImageLink] = useState('')

    const firstName = useSelector(state => state.firebase.profile.firstName)
    const lastName = useSelector(state => state.firebase.profile.lastName)
    const auth = useSelector(state => state.firebase.auth.uid)

    const classes = useStyles()
    const dispatch = useDispatch()

    if (!auth)
        return null

    const nuevaPublicacion = () => {
        const linkConvertido = youtubeLink.replace("watch?v=", "embed/")
        dispatch(agregaPublicacion({ comment: value, firstName, lastName, userID: auth, youtube: linkConvertido, image: imageLink }))
        setValue("")
        setYoutubeLink("")
        setImageLink("")
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
                    <Avatar className={classes.avatarLarge} alt="avatar" src="https://picsum.photos/200/300"> </Avatar>
                }
                title={firstName + " " + lastName}
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

                <IconButton onClick={youtubeSwitchHandler}>
                    <YouTubeIcon color={youtube ? "primary" : "disabled"}></YouTubeIcon>
                </IconButton>

                <IconButton onClick={imageSwitchHandler}>
                    <InsertPhoto color={image ? "primary" : "disabled"} ></InsertPhoto>
                </IconButton>

                <Button variant="contained" color="primary" onClick={nuevaPublicacion}>Send</Button>
            </CardActions>
        </Card >
    )
}

export default CrearPublicacion
