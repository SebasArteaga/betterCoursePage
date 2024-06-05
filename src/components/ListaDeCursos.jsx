// src/components/RecipeList.jsx
import React from 'react';
import { List, ListItem } from '@mui/material';
import Recipe from './Curso';

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe, index) => (
        <ListItem key={index}>
          <Recipe
            title={recipe.title}
            description={recipe.description}
            details={recipe.details}
            videoUrl={recipe.videoUrl} // Agrega la URL del video como propiedad
          />
        </ListItem>
      ))}
    </List>
  );
};

export default RecipeList;
