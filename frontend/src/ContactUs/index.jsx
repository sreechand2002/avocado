import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Forms from './Form';

const ContactUs = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column only='computer' computer={8}>
            <Image style={{ marginLeft: '4rem' }} size='big' src='/images/contactus.png' />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' computer={8} mobile={16}>
            <Forms />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ContactUs;
