import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react';

const MobileFooter = () => {
  return (
    <div style={{ backgroundColor: '#Eeedb9' }}>
      <Grid>
        <Grid.Row only='mobile'>
          <Grid.Column mobile={16}>
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
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/services#consultancy'>
                      Consultancy
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <Dropdown text='Services'>
                <Dropdown.Menu style={{ backgroundColor: '#Eeedb9' }}>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/about'>
                      About US
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a style={{ color: '#573822' }} href='/contanctus'>
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
