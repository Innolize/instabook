import React from 'react'
import { Card, CardContent, CardHeader, makeStyles, TextField, Button, CardActions, Avatar } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    cardContainer: {
        height: 300,
    },
    styledTextfield: {
        width: '100%',
    }
}))


const CrearComentario = () => {
    const classes = useStyles()
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatarLarge} alt="avatar" src="https://picsum.photos/200/300"> </Avatar>
                }
                title="test test test"
            />
            <CardContent>
                <TextField
                    className={classes.styledTextfield}
                    size="medium"
                    multiline
                />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">Send</Button>
            </CardActions>

        </Card>
    )
}

export default CrearComentario
