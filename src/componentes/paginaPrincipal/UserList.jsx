import React from 'react'
import { List, ListItemAvatar, Avatar, ListItem, ListItemText, Typography, IconButton, CircularProgress, Drawer, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    panel: {
        maxWidth: 300,
        backgroundColor: 'white',
    },
    navLink: {
        textDecoration: "none",
        color: "black"
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        height: '400px'
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerPaper: {
        width: 240
    }

}))

const ListaFeed = () => {
    const listaUsuarios = useSelector(state => state.firestore.ordered.usuarios)

    const classes = useStyles()
    if (!isLoaded(listaUsuarios)) {
        return <CircularProgress className={classes.spinnerContainer}>loading...</CircularProgress>
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List className={classes.panel}>
                    <ListItem>
                        <IconButton>
                            <AccountCircle />
                        </IconButton>
                        <ListItemText>
                            <Typography variant='h5'> Usuarios</Typography>
                        </ListItemText>
                    </ListItem>
                    {listaUsuarios && listaUsuarios.map(usuario => <Usuario props={usuario} key={usuario.id} />
                    )}
                </List >
            </div>
        </Drawer >
    )
}

const Usuario = ({ props }) => {
    const classes = useStyles()
    return (
        <NavLink to={`/profile/${props.id}`} className={classes.navLink}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt={`${props.user}-${props.lastName}-avatar`} src={props.avatar ? props.avatar : ""}></Avatar>
                </ListItemAvatar>
                <ListItemText>{`${props.firstName} ${props.lastName}`}</ListItemText>
            </ListItem>
        </NavLink>
    )
}







export default ListaFeed
