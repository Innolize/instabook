import React from 'react'
import { Toolbar, AppBar, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { BotonesLogeados } from './BotonesLogeados'
import { BotonesSinLogear } from './BotonesSinLogear'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: "white"
    }
}))

const Header = () => {
    const auth = useSelector(state => state.firebase.auth.uid)

    const classes = useStyles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">

                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">
                            InstaBook
                        </Link>
                    </Typography>

                    {auth ? <BotonesLogeados /> : <BotonesSinLogear />}
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header