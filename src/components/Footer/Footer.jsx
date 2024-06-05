import React from 'react'
import {
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube'
import { Twitter } from '@mui/icons-material';

const Footer = () => {

  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (

    <BoxRow
      component='footer'
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={'Acerca De'} />
        <FooterLink
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />

      </StackColumn>
      <StackColumn>
        <FooterTitle text={'En colaboración con'} />
        <Link href="https://www.youtube.com/@freecodecamp/featured">FreeCodeCampYT</Link>
        <Link href="https://www.w3schools.com/">W3Schools</Link>
        <FooterLink
          text={'Asesores experimentados'}
        />


      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Redes'} />
        <Stack
          direction='row'
          width='70px'
          maxWidth='100%'
          justifyContent='space-between'
        >
          <Link href="#" variant="body2"
            sx={{
              color: '#5db37f',
              "&:hover": {
                color: '#f7c81b',
              }
            }}
          >
            <InstagramIcon />
          </Link>
          <Link href="#" variant="body2"
            sx={{
              color: '#5db37f',
              "&:hover": {
                color: '#f7c81b',
              }
            }}
          >
            <TwitterIcon />
          </Link>
          <Link href="#" variant="body2"
            sx={{
              color: '#5db37f',
              "&:hover": {
                color: '#f7c81b',
              }
            }}
          >
            <YoutubeIcon />
          </Link>
        </Stack>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer