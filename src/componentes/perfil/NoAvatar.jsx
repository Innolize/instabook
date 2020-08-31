import React, { useState } from 'react'
import { Typography, Input, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { subirImagen } from '../../redux/actions'
import { useDispatch } from 'react-redux'



const NoAvatar = () => {
    const { userID } = useParams()
    const dispatch = useDispatch()
    const [imagen, setImagen] = useState(null)


    return (
        <>
            <Typography variant='h3' align='center'> No Avatar</Typography>
            <Input type='file' onChange={(e) => setImagen(e.target.files[0])}> </Input>
            <Button onClick={() => dispatch(subirImagen({ imagen, userID }))}>UPLOAD!</Button>
        </>
    )
}

export default NoAvatar
