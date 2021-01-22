import React from 'react';
import { Card, Grid, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div style={{ margin: 'auto', backgroundColor: '#Eeedb9', color: 'black' }}>
      <div style={{ marginLeft: '2rem' }}>
        <Grid>
          <Grid.Row only='computer'>
            <Grid.Column computer={4} style={{ margin: '2rem 0' }}>
              <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%', height: '320px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 'auto', color: 'white' }}>
                  <h2>Services</h2>
                  <hr style={{ width: '50%' }} />
                  <a href='/services#web' style={{ color: 'white', margin: '1rem 0' }}>
                    <h3>Web development</h3>
                  </a>
                  <a href='/services#graphic' style={{ color: 'white', margin: '1rem 0' }}>
                    <h3>Graphic Designing</h3>
                  </a>
                  <a href='/services#social' style={{ color: 'white', margin: '1rem 0' }}>
                    <h3>Social Marketing</h3>
                  </a>
                  <a href='/services#consultancy' style={{ color: 'white', margin: '1rem 0' }}>
                    <h3>Consultancy</h3>
                  </a>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column computer={4} style={{ margin: '2rem 0' }}>
              <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 'auto', color: 'white' }}>
                  <h2>Company</h2>
                  <hr style={{ width: '50%' }} />
                  <h3>About Us</h3>
                  <h3>Contact us</h3>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column computer={4} style={{ margin: '2rem 0' }}>
              <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%', height: '320px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 'auto', color: 'white' }}>
                  <h2>Get In Touch</h2>
                  <hr style={{ width: '50%' }} />
                  <h3>contactus@avocado.in</h3>
                  <h3>+91 9886587236</h3>
                  <h3>
                    2nd cross 2nd main <br /> sarakki gate
                    <br /> bangalore-560078
                  </h3>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column computer={4} style={{ margin: '2rem 0' }}>
              <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%' }}>
                <h2 style={{ color: 'white' }}>Social media </h2>
                <hr style={{ width: '50%' }} />
                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', margin: 'auto', color: 'white' }}>
                  <Icon size='big' name='facebook' />
                  <Icon size='big' name='linkedin' />
                  <Icon size='big' name='instagram' />
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
