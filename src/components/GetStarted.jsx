import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img

import YouTubePlayer from './YoutubePlayer';


const GetStarted = () => {

    const videoUrl1 = 'https://www.youtube.com/watch?v=rfscVS0vtbw';
    const videoUrl2 = 'https://www.youtube.com/watch?v=HXV3zeQKqGY';
    
    

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Python for Begginers (Full Tutorial)'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Aprende Python en tan solo 4 horas <br />
                        con este curso recopilatorio para <br />
                        empezar ahora mismo tu primer proyecto <br />
                        de Python
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
            <YouTubePlayer  videoUrl={videoUrl1} />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <YouTubePlayer  videoUrl={videoUrl2} />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'SQL Tutorial -  Full Course for Begginers'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Aprende todo lo básico y necesario para empezar a manejar <br />
                        tus bases de datos utilizando SQL
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}


export default GetStarted;