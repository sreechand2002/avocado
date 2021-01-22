import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const HeroBanner = () => {
  return (
    <Grid style={{ marginTop: '5rem' }}>
      <Grid.Row centered>
        <Grid.Column mobile={15} computer={9}>
          <Header as='h2' textAlign='center' style={{ color: '#Eeedb9', fontSize: '1.5rem' }}>
            We at Avocado are a dedicated group of undergraduate Engineers committed at improving our skills and Creativity ,and heartfully providng
            you the best of our services.
            <br /> Avocado was founded in 2020 by a group of Engineers , their spirit and passion for the technology and challenges led them to start
            this digital agency.
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HeroBanner;
