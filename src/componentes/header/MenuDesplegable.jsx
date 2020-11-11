import React, { useState } from 'react'
import { Drawer, Button, makeStyles } from '@material-ui/core'
import { People } from '@material-ui/icons'
import UserList from '../paginaPrincipal/UserList'

const useStyles = makeStyles({
    drawer: {
        width: 240,
        maxWidth: 240
    }
})

const BotonMenuDesplegable = () => {
    const [value, setValue] = useState(false)
    const classes = useStyles()
    return (
        <div>

            <Button onClick={() => setValue(true)}>
                <People color='secondary' />
            </Button>
            <Drawer className={classes.drawer} anchor={"left"} open={value} onClose={(e) => setValue(false)}>
                <UserList></UserList>
            </Drawer>
        </div>
    )
}

export default BotonMenuDesplegable
