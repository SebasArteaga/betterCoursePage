// src/components/Recipe.jsx
import React, { useState } from 'react';
import { Box, Typography, Collapse, Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomBox = styled(Box)({
  width: '100%',
  border: '1px solid #ccc',
  padding: '16px',
  marginBottom: '16px',
  textAlign: 'left',
  cursor: 'pointer',
});

const Recipe = ({ title, description, details, videoUrl }) => { // Agrega videoUrl a las props
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <CustomBox>
      <Typography variant="h6" onClick={handleToggle}>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Button onClick={handleToggle}>
        {open ? 'Ocultar Detalles' : 'Mostrar Detalles'}
      </Button>
      <Collapse in={open}>
        <Typography variant="body2" component="p">
          {details}
        </Typography>
        {videoUrl && ( // Renderiza el iframe solo si hay una URL de video
          <div style={{ marginTop: '16px' }}>
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Collapse>
    </CustomBox>
  );
};

export default Recipe;
