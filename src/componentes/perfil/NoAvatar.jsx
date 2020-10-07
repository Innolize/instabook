import React, { useState } from 'react'
import { Typography, Input, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { subirImagen } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const NoAvatar = () => {
    const { userID } = useParams()
    const dispatch = useDispatch()
    const [imagen, setImagen] = useState(null)
    const userLogged = useSelector(state => state.firebase.auth.uid)
    const ownProfile = (userLogged === userID)

    const manejadorSubirImagen = () => {
        dispatch(subirImagen({ imagen, userID }))
    }

    return (
        <>
            <Typography variant='h3' align='center'> No Avatar</Typography>
            {ownProfile &&
                <>
                    <Input type='file' onChange={(e) => setImagen(e.target.files[0])}> </Input>
                    <Button onClick={manejadorSubirImagen}>UPLOAD!</Button>
                </>
            }
        </>
    )
}

export default NoAvatar
