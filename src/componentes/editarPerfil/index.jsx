import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import EditProfile from './EditProfile'

const useStyles = makeStyles(() => ({
    posicionamientoPrincipal: {
        paddingTop: 65
    }
}))

const EditProfileContainer = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.posicionamientoPrincipal}>
            <Grid item xs={"auto"} sm={2} md={3} lg={4}>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <EditProfile></EditProfile>
            </Grid>
            <Grid item xs={false} sm={2} md={3} lg={4} />
        </Grid>
    )
}

export default EditProfileContainer