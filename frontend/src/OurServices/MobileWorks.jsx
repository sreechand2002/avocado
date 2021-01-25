import React from 'react';
import { Card, Grid, Image, Label } from 'semantic-ui-react';

const MobileWorks = () => {
  return (
    <div style={{ marginTop: '4rem', padding: '4rem 0' }}>
      <Grid>
        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'red', marginTop: '0.9rem' }}>
            <Image src='/Images/OurWorks/SG2.jpg' style={{ padding: '1rem 0' }} wrapped ui={false} />
            <Card.Header style={{ padding: '0.5rem' }}>
              <Label color='red'>Donna Paulsen</Label>
            </Card.Header>
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: '#00394d' }}>
            <Image src='/Images/OurWorks/SG1.jpg' style={{ padding: '1rem 0' }} />
            <Card.Header style={{ padding: '0.5rem' }}>
              <Label color='blue'>Lewis hamilton</Label>
            </Card.Header>
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: '#f4bc1c' }}>
            <Image src='/Images/OurWorks/SG3.jpg' style={{ padding: '1rem 0' }} wrapped ui={false} />
            <Card.Header style={{ padding: '0.5rem' }}>
              <Label style={{ backgroundColor: '#eed971ff', color: 'white' }}>Louis Litt</Label>
            </Card.Header>
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'grey' }}>
            <Image src='/Images/OurWorks/SG4.jpg' style={{ padding: '1rem 0' }} wrapped ui={false} />
            <Card.Header style={{ padding: '0.5rem' }}>
              <Label color='grey'>Harvey Specter</Label>
            </Card.Header>
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'blue', margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/XV1.png' style={{ padding: '1rem 0' }} wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'black', margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/XV2.jpg' style={{ padding: '1rem 0' }} wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/XV3.jpg' style={{ padding: '1rem 0' }} wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'lightblue', margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/XV4.png' wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'blue', margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/ss1.png' style={{ padding: '1rem 0' }} wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'black', margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/ss4.png' style={{ padding: '1rem 0' }} wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/ss3.png' style={{ padding: '1rem 0' }} wrapped ui={false} />
          </Card>
        </Grid.Row>

        <Grid.Row centered only='mobile'>
          <Card style={{ backgroundColor: 'lightblue', margin: '3rem' }} fluid>
            <Image src='/Images/OurWorks/ss2.png' wrapped ui={false} />
          </Card>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MobileWorks;
