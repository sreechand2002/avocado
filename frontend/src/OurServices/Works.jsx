import React from 'react';
import { Card, Header, Image } from 'semantic-ui-react';

const Works = () => {
  return (
    <div style={{ height: '80vh', marginTop: '4rem' }}>
      <Header as='h1' style={{ color: '#Eeedb9' }} content='Our Works' />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Card>
          <Image src='/Images/OurWorks/SG1.jpg' wrapped ui={false} />
          <Card.Header style={{ margin: '2rem', fontSize: '1.5rem' }}>Lewis Hamilton</Card.Header>
        </Card>

        <Card>
          <Image src='/Images/OurWorks/SG2.jpg' wrapped ui={false} />
          <Card.Header style={{ margin: '2rem', fontSize: '1.5rem' }}>Donna Paulsen</Card.Header>
        </Card>

        <Card>
          <Image src='/Images/OurWorks/SG3.jpg' wrapped ui={false} />
          <Card.Header style={{ margin: '2rem', fontSize: '1.5rem' }}>Louis Litt</Card.Header>
        </Card>

        <Card>
          <Image src='/Images/OurWorks/SG4.jpg' wrapped ui={false} />
          <Card.Header style={{ margin: '2rem', fontSize: '1.5rem' }}>Harvey Specter</Card.Header>
        </Card>
      </div>
    </div>
  );
};

export default Works;
