import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { unirArray } from '../../redux/actions/index'
import { useDispatch } from 'react-redux'

export const BotonesSinLogear = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Button onClick={() => dispatch(unirArray())}>TEST</Button>
            <Button href="/signup" color="inherit">
                SignUp
            </Button>
            <Button href="/signin" color="inherit">
                Login
            </Button>
        </>

    )
}