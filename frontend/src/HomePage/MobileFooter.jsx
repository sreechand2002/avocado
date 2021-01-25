import React from 'react';
import { Grid, Dropdown, Icon, Header } from 'semantic-ui-react';

const MobileFooter = () => {
  return (
    <div style={{ backgroundColor: '#Eeedb9' }}>
      <Grid>
        <Grid.Row only='mobile'>
          <Grid.Column mobile={16}>
            <Header>Reach us Out:</Header>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
                margin: '1rem auto',
                color: '#573822',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon size='big' name='facebook' />
              <a href='https://www.linkedin.com/company/avocadopvtltd/' target='blank' style={{ color: '#573822' }}>
                <Icon size='big' name='linkedin' />
              </a>
              <Icon size='big' name='instagram' />
            </div>
            <div>
              <Dropdown text='Company'>
                <Dropdown.Menu style={{ backgroundColor: '#Eeedb9' }}>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/services#web'>
                      Web Development
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/services#graphic'>
                      Graphic designing
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/services#social'>
                      Social Marketing
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div style={{ margin: '2rem' }}>
              <Dropdown text='Services'>
                <Dropdown.Menu style={{ backgroundColor: '#Eeedb9' }}>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/about'>
                      About US
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/contact-us'>
                      Contact Us
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MobileFooter;
