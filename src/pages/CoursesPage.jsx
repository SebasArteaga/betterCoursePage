// src/pages/RecipePage.jsx
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import RecipeList from '../components/ListaDeCursos';

const recipes = [
  {
    title: 'HTML',
    description: 'Aprende con un curso completo de HTML',
    details: 'Aprende multiples características de HTML como los elementos Head, Links, Images, Forms, Tables, etc.',
    videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE' // Agrega la URL del video aquí
  },
  {
    title: 'CSS',
    description: 'Aprende con un curso completo de CSS',
    details: 'Comprende los temas más característicos de CSS como usar Flex, Grid, Selectores, CardSelector,etc.',
    videoUrl: 'https://www.youtube.com/embed/OXGznpKZ_sA' // Agrega la URL del video aquí
  },
  {
    title: 'JavaScript',
    description: 'Aprende con un curso completo de JavaScript',
    details: 'Lecciones como aprender a declarar variables, comentar tu código, matemática básica, arrays y mucho más.',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg' // Agrega la URL del video aquí
  },
  {
    title: 'React',
    description: 'Aprende con un curso completo de React',
    details: 'Aprenderás a instalar y utilizar React, la creación e importancia de componentes y ciertos conejos o tipos para manejar la terminal.',
    videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8' // Agrega la URL del video aquí
  },
  {
    title: 'TypeScript',
    description: 'Aprende con un curso completo de TypeScript',
    details: 'Conocerás las ventajas y características más importantes de utilizar TypeScript, cómo instalarlo, manejar variables y declaraciones. ',
    videoUrl: 'https://www.youtube.com/embed/30LWjhZzg50' // Agrega la URL del video aquí
  },
  {
    title: 'Angular',
    description: 'Aprende con un curso completo de Angular',
    details: 'Aprenderás a instalar y utilizar Angular, las clases, harás uso de TypeScript, la configuración del client y server side.',
    videoUrl: 'https://www.youtube.com/embed/3qBXWUpoPHo' // Agrega la URL del video aquí
    
  },
  // Agrega más recetas según sea necesario
];

const RecipePage = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        Nuestros cursos
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <RecipeList recipes={recipes} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipePage;
