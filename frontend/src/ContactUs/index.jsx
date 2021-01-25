import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Forms from './Form';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column only='computer' computer={8}>
            <Image style={{ marginLeft: '4rem' }} size='big' src='/Images/contactus-min.png' />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' computer={8} mobile={16}>
            <Forms />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Helmet>
        <title>Avocado - ContactUs</title>
        <meta property='og:title' content='Avocado ' />
        <meta property='og:description' content='Any queries? Contact us ' />
        <meta property='og:image' content='/images/Logo_White.svg' />
      </Helmet>
    </div>
  );
};

export default ContactUs;
