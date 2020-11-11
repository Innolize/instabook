import React, { useState } from 'react'
import { Box, Fab, makeStyles } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
        minHeight: 150,
        display: "flex",
        justifyContent: "center",
    },
    noAvatar: {
        alignSelf: "center",
        fontSize: "25px",
        fontWeight: "bold"
    }
}))

const Avatar = ({ avatar }) => {
    const classes = useStyles()
    const { userID } = useParams()
    const currentUserID = useSelector(state => state.firebase.auth.uid)
    const ownProfile = (userID === currentUserID)
    const [showEdit, setShowEdit] = useState(false)

    return (
        <Box className={classes.avatarContainer}
            onMouseEnter={() => setShowEdit(true)}
            onMouseLeave={() => setShowEdit(false)}
        >
            {ownProfile && showEdit && <Fab className={classes.fab} color="secondary" aria-label="edit" >
                <Link to="/editprofile">
                    <Edit />
                </Link>
            </Fab>}
            {avatar ? <img className={classes.avatar} alt={avatar} src={avatar} />
                : <Box className={classes.noAvatar}> NO AVATAR</Box>}
        </Box>
    )
}

export default Avatar
