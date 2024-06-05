import React, { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const Details = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      ...(isLogin ? {} : { confirmPassword: data.get('confirmPassword') }),
    });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Stack 
      component='section'
      direction="column"
      justifyContent='center'
      alignItems='center'
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Typography variant="h4" textAlign="center">
        {isLogin ? 'Iniciar Sesión' : 'Registrar Usuario'}
      </Typography>

      <Box 
        component="form" 
        noValidate 
        onSubmit={handleSubmit} 
        sx={{ 
          mt: 1,
          py: 2
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo Electrónico"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {!isLogin && (
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirmar Contraseña"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
        )}
        <Button 
          variant="contained" 
          fullWidth
          type="submit"
          size="medium"
          sx= {{ 
            fontSize: '0.9rem',
            textTransform: 'capitalize', 
            py: 2,
            mt: 3, 
            mb: 2,
            borderRadius: 0,
            backgroundColor: '#5db37f',
            "&:hover": {
              backgroundColor: '#f7c81b',
            }
          }}
        >
          {isLogin ? 'Iniciar Sesión' : 'Registrar'}
        </Button>
        <Button 
          variant="text" 
          fullWidth
          onClick={toggleForm}
          sx= {{ 
            fontSize: '0.9rem',
            textTransform: 'capitalize', 
            mt: 2, 
            color: '#14192d',
          }}
        >
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
