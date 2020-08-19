import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

export const BotonesSinLogear = () => {
    return (
        <>
            <Button href="/signup" color="inherit">
                SignUp
                </Button>
            <Button href="/signup" color="inherit">Login</Button>
        </>

    )
}