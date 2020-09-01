import React from 'react'
import { Box, Fab, makeStyles } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    avatar: {
        maxWidth: 480,
        [theme.breakpoints.up('lg')]: {
            maxWidth: '100%'
        },
    },
    fab: {
        position: "absolute",
    },
    avatarContainer: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

const Avatar = ({ avatar }) => {
    const classes = useStyles()
    return (
        <Box className={classes.avatarContainer}>
            <Fab className={classes.fab} color="secondary" aria-label="edit" >
                <Link to="/editprofile">
                    <Edit />
                </Link>
            </Fab>
            <img className={classes.avatar} alt={avatar} src={avatar} />
        </Box>
    )
}

export default Avatar
