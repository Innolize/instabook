import React from 'react'
import { Card, CardContent, Typography, makeStyles, Avatar, IconButton, CardHeader, CardMedia, CardActions } from '@material-ui/core'
import { Share, FavoriteBorder, MoreVert } from '@material-ui/icons'

const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: 480,
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px 10px 0px",
    },
    avatarLarge: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    tituloCarta: {
        flexGrow: '1',
    },
    media: {
        height: 320,
        width: 480,
        display: "flex",
        alignSelf: 'center',
    }
}))

const Publicacion = ({props}) => {

    const classes = useStyle()
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatarLarge} alt="avatar" src="https://picsum.photos/200/300"> </Avatar>
                    }
                    title={props.user}
                    subheader="placeholder"
                    action={
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body1">
                        {props.comment}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    component="iframe"
                    src={props.youtube}
                    title="test"
                />
                <CardActions>
                    <IconButton>
                        <FavoriteBorder />
                    </IconButton>
                    <IconButton>
                        <Share></Share>
                    </IconButton>
                </CardActions>
            </Card>
        </div >
    )
}


export default Publicacion