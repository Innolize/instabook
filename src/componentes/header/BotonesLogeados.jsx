import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import { logout } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    navLink: {
        textDecoration: "none",
        color: "white"
    }
}))

export const BotonesLogeados = () => {
    const classes = useStyles()
    const idUser = useSelector(state => state.firebase.auth.uid)

    const dispatch = useDispatch()
    const deslogear = () => {
        dispatch(logout())
    }

    return (
        <>
            <NavLink className={classes.navLink} to={`/profile/${idUser}`}>
                <Button color="inherit" >
                    <Avatar alt="user">XD</Avatar>
                    Profile
                    </Button>
            </NavLink>
            <Button color="inherit" onClick={deslogear}>Logout</Button>
        </>
    )
}