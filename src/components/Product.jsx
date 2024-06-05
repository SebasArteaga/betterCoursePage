// src/components/Product.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #ccc',
  padding: '16px',
  margin: '16px',
  width: '100%',
  textAlign: 'center',
});

const CustomTypography = styled(Typography)({
  fontSize: '1.1rem',
  textAlign: 'start',
  lineHeight: '1.5',
  color: '#515151',
  marginTop: '1.5rem',
});

const CustomButton = styled(Button)({
  backgroundColor: '#5db37f',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#f7c81b',
  },
});

const Product = ({ image, name, description, link }) => {
  return (
    <CustomBox component='article'>
      <div className='my-2 mx-5'>
        <img src={image} alt={name} style={{ width: '200px', height: 'auto' }} />
        <Typography variant="h6">{name}</Typography>
        <CustomTypography>{description}</CustomTypography>
        <CustomButton variant="contained" href={link} target="_blank" rel="noopener noreferrer">
          Documentación
        </CustomButton>
      </div>
    </CustomBox>
  );
};

export default Product;
