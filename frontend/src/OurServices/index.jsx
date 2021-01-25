import React from 'react';
import Webdev from './Services';
import Works from './Works';
import { Helmet } from 'react-helmet';

const OurServive = () => {
  return (
    <div style={{ backgroundColor: '#573822' }}>
      <Webdev />
      <Works />

      <Helmet>
        <title>Avocado - Servies</title>
        <meta property='og:title' content='Avocado' />
        <meta property='og:description' content='Looking for a Service? Check out Avocado' />
        <meta property='og:image' content='/Images/Logo_White.svg' />
      </Helmet>
    </div>
  );
};

export default OurServive;
