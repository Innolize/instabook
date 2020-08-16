import React from 'react'
import { List, ListItemAvatar, Avatar, ListItem, ListItemText, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    panel: {
        maxWidth: 300,
        backgroundColor: 'white',

    }
}))

const ListaFeed = () => {
    const classes = useStyles()
    return (
        <List className={classes.panel}>
            <ListItem>
                <IconButton>
                    <AccountCircle />
                </IconButton>
                <ListItemText>
                    <Typography variant='h5'> Usuarios</Typography>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="user avatar" src="https://picsum.photos/200/300"></Avatar>
                </ListItemAvatar>
                <ListItemText>User Instabook</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="user avatar" src="https://picsum.photos/200/300"></Avatar>
                </ListItemAvatar>
                <ListItemText>User Instabook</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="user avatar" src="https://picsum.photos/200/300"></Avatar>
                </ListItemAvatar>
                <ListItemText>User Instabook</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="user avatar" src="https://picsum.photos/200/300"></Avatar>
                </ListItemAvatar>
                <ListItemText>User Instabook</ListItemText>
            </ListItem>

        </List >
    )
}

export default ListaFeed
