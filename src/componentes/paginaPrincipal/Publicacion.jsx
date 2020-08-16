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

const Publicacion = () => {
    const classes = useStyle()
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatarLarge} alt="avatar" src="https://picsum.photos/200/300"> </Avatar>
                    }
                    title="Usuario Instabook"
                    subheader="placeholder"
                    action={
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body1">
                        Labore reprehenderit nostrud tempor dolore sit reprehenderit pariatur sit consequat anim amet culpa qui. Sint et qui nisi officia id exercitation esse consequat ipsum dolore veniam fugiat pariatur do. Quis aute voluptate ea ea ipsum. Est aute anim est do ipsum enim veniam culpa ex pariatur ullamco velit. Culpa ex id consequat cupidatat ullamco consequat.
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    component="iframe"
                    src="https://www.youtube.com/embed/jAt9VZpMIyM"
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