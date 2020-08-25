import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import { logout } from '../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

export const BotonesLogeados = () => {
    // const idUser = useSelector(state => state.firebase.auth.uid)

    const dispatch = useDispatch()
    const deslogear = () => {
        dispatch(logout())
    }

    return (
        <>
            <Button color="inherit" >
                <Avatar alt="user">XD</Avatar>
                    Profile
                    </Button>
            <Button color="inherit" onClick={deslogear}>Logout</Button>
        </>
    )
}