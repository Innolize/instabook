import React from 'react'
import { List, ListItemAvatar, Avatar, ListItem, ListItemText, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const useStyles = makeStyles(theme => ({
    panel: {
        maxWidth: 300,
        backgroundColor: 'white',
    }
}))

const ListaFeed = () => {

    useFirestoreConnect(['usuarios'])
    const listaUsuarios = useSelector(state => state.firestore.ordered.usuarios)
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
                {listaUsuarios && listaUsuarios.map(usuario => <Usuario props={usuario} key={usuario.id} />
                )}
            </List >
        )
}

const Usuario = ({ props }) => {
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar alt={`${props.user}-${props.lastName}-avatar`} src={props.avatar ? props.avatar : "https://picsum.photos/200/300"}></Avatar>
            </ListItemAvatar>
            <ListItemText>{`${props.user} ${props.lastName}`}</ListItemText>
        </ListItem>
    )
}







export default ListaFeed
