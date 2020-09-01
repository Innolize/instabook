import React from 'react'
import { Toolbar, AppBar, Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { BotonesLogeados } from './BotonesLogeados'
import { BotonesSinLogear } from './BotonesSinLogear'
import { Link } from 'react-router-dom';
import BotonMenuDesplegable from './MenuDesplegable';

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
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}))

const Header = () => {
    const auth = useSelector(state => state.firebase.auth.uid)
    const classes = useStyles()
    return (

        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Hidden mdUp >
                    <BotonMenuDesplegable></BotonMenuDesplegable>
                </Hidden>
                <Typography variant="h6" className={classes.title}>
                    <Link className={classes.link} to="/">
                        InstaBook
                        </Link>
                </Typography>

                {auth ? <BotonesLogeados /> : <BotonesSinLogear />}
            </Toolbar>
        </AppBar>

    )
}
export default Header