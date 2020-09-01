import React, { useState } from 'react'
import { Card, Container, CardContent, makeStyles, TextField, Button } from '@material-ui/core'
import Avatar from './Avatar'
import NoAvatar from './NoAvatar'
import { useSelector, useDispatch } from 'react-redux'
import { actualizarPerfilCompleto } from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 480,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        marginBotton: "10px",
        paddingTop: "15px",
        paddingBottom: "15px",
        backgroundColor: "white",
        [theme.breakpoints.up('lg')]: {
            width: '100%'
        },
    },
    contenedor: {
        minWidth: 480,
        minHeight: 250,
        backgroundColor: 'gray'
    },
    input: {
        display: 'none',
    },
}))

const EditProfile = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const useFormInput = (initialValue) => {
        const [value, setValue] = useState(initialValue)

        const handleChange = (e) => {
            setValue(e.target.value)
        }
        return {
            value,
            onChange: handleChange
        }

    }

    const loggedUser = useSelector(state => state.firebase.auth.uid)
    const users = useSelector(state => state.firestore.data.usuarios)

    const user = users[loggedUser]
    console.log(user)
    const description = useFormInput(user.descripcion)
    const firstName = useFormInput(user.firstName)
    const lastName = useFormInput(user.lastName)
    const [newImage, setNewImage] = useState("")

    const info = {
        userID: loggedUser,
        description: description.value,
        firstName: firstName.value,
        lastName: lastName.value
    }

    const updateProfile = () => {
        dispatch(actualizarPerfilCompleto({ info, image: newImage, oldPathImage: user["imageLocation"] }))
    }

    return (
        <Card className={classes.root}>
            <Container className={classes.contenedor}>
                {user.avatar ?
                    <Avatar avatar={user.avatar} /> : <NoAvatar />}
                <input
                    className={classes.input}
                    accept="image/*"
                    multiple={false}
                    type="file"
                    id="input-image"
                    onChange={(e) => setNewImage(e.target.files[0])}
                >
                </input>
                <label htmlFor="input-image">
                    <Button variant="contained" color="primary" component="span" >
                        New profile pic
                        </Button>
                </label>
                <Button color="primary" onClick={updateProfile}> UPDATE!</Button>

            </Container>
            <CardContent>
                <TextField id="textfield-firstName" label="First name" variant="outlined" {...firstName} />
                <TextField id="textField-lastName" label="Last name" variant="outlined" {...lastName} />
                <TextField fullWidth multiline id="outlined-basic" label="description" variant="outlined" {...description} />

            </CardContent>
        </Card >
    )
}

export default EditProfile
