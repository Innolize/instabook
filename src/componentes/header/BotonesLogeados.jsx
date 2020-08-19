import React from 'react'
import { Button } from '@material-ui/core'
import { logout } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

export const BotonesLogeados = () => {
    const dispatch = useDispatch()

    const deslogear = () => {
        dispatch(logout())
    }

    return (
        <>
            <Button color="inherit" onClick={deslogear}>Logout</Button>
        </>
    )
}