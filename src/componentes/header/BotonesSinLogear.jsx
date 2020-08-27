import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { subirImagen } from '../../redux/actions/index'

export const BotonesSinLogear = () => {
    const dispatch = useDispatch()
    const firebase = useFirebase()
    const uploadedFiles = useSelector(state => state.firebase)
    console.log(uploadedFiles)
    return (
        <>
            <Button onClick={() => dispatch(subirImagen())}>TEST</Button>

            <Button href="/signup" color="inherit">
                SignUp
            </Button>
            <Button href="/signin" color="inherit">
                Login
            </Button>
        </>

    )
}