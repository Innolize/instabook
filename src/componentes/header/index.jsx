import React from 'react'
import { Grid, Toolbar, AppBar, Typography, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        InstaBook
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header