import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Registrate'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Aquí comienza tu aventura como desarrollador full stack\
                regsítrate ahora mismo para poder llevar registro de tu\
                progreso en la plataforma'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#5db37f',
                "&:hover": {
                    backgroundColor: '#f7c81b',
                }
            }}
            >
                Registrate
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;