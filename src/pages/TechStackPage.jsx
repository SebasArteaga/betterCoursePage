// src/pages/ProductsPage.jsx
import React from 'react';
import { Grid } from '@mui/material';
import Product from '../components/Product';

const products = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/174/174854.png',
        name: 'HTML',
        description: 'Introducción a HTML',
        link: 'https://www.w3schools.com/html/default.asp'
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
        name: 'CSS',
        description: 'Introducción a CSS',
        link: 'https://www.w3schools.com/css/default.asp'
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
        name: 'JavaScript',
        description: 'Introducción a JavaScript',
        link: 'https://www.w3schools.com/js/default.asp'
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
        name: 'React',
        description: 'Introducción a React',
        link: 'https://www.w3schools.com/react/default.asp'
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        name: 'TypeScript',
        description: 'Introducción a TypeScript',
        link: 'https://www.w3schools.com/typescript/index.php'
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
        name: 'Angular',
        description: 'Introducción a Angular',
        link: 'https://www.w3schools.com/angular/default.asp'
      },
  
  // Agrega más productos según sea necesario
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Tecnolgías utilizadas en los cursos y su documentación</h1>
      <Grid container spacing={4} sx={{ py: 10, px: 2 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className='mx-5 flex justify-content-center'>
            <div className='my-2 mx-5'>
            <Product
              image={product.image}
              name={product.name}
              description={product.description}
              link={product.link}
            />
            </div>
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsPage;
