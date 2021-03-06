import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import { logout } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { isLoaded } from 'react-redux-firebase'

const useStyles = makeStyles(() => ({
    navLink: {
        textDecoration: "none",
        color: "white"
    }
}))

export const BotonesLogeados = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const deslogear = () => {
        dispatch(logout())
    }

    const idUser = useSelector(state => state.firebase.auth.uid)
    const usuarios = useSelector(state => state.firestore.data.usuarios)

    if (!isLoaded(usuarios))
        return null

    const usuario = usuarios[idUser]



    return (
        <>
            <NavLink className={classes.navLink} to={`/profile/${idUser}`}>
                <Button color="inherit" >
                    {usuario && < Avatar alt="user" src={usuario.avatar} />}
                    Profile
                    </Button>

            </NavLink>
            <Button color="inherit" onClick={deslogear}>Logout</Button>
        </>
    )
}