import React from 'react'
import { List, ListItemAvatar, Avatar, ListItem, ListItemText, Typography, IconButton, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
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
    }

}))

const ListaFeed = () => {

    useFirestoreConnect(['usuarios'])
    const listaUsuarios = useSelector(state => state.firestore.ordered.usuarios)
    const classes = useStyles()
    debugger
    if (!isLoaded(listaUsuarios)) {
        return <CircularProgress className={classes.spinnerContainer}>loading...</CircularProgress>
    }

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
            {listaUsuarios && listaUsuarios.map(usuario => <Usuario props={usuario} key={usuario.id} />
            )}
        </List >
    )
}

const Usuario = ({ props }) => {
    const classes = useStyles()
    return (
        <NavLink to={`/profile/${props.id}`} className={classes.navLink}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt={`${props.user}-${props.lastName}-avatar`} src={props.avatar ? props.avatar : "https://picsum.photos/200/300"}></Avatar>
                </ListItemAvatar>
                <ListItemText>{`${props.firstName} ${props.lastName}`}</ListItemText>
            </ListItem>
        </NavLink>
    )
}







export default ListaFeed
