import React from 'react'
import { Button } from '@material-ui/core'

export const BotonesSinLogear = () => {

    return (
        <>
            <Button href="/signup" color="inherit">
                SignUp
            </Button>
            <Button href="/signin" color="inherit">
                Login
            </Button>
        </>

    )
}