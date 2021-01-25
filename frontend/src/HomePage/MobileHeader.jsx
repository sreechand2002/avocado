import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const MobileHeader = () => {
  const Items = [
    {
      key: 'home',
      text: (
        <span>
          <Icon name='home' />
          Home
        </span>
      )
    },
    {
      key: 'about',
      text: (
        <span>
          <Icon name='users' />
          About Us
        </span>
      )
    },
    {
      key: 'services',
      text: (
        <span>
          <Icon name='home' />
          Services
        </span>
      )
    },
    {
      key: 'contact-us',
      text: (
        <span>
          <Icon name='phone square' />
          Contact-Us
        </span>
      )
    }
  ];

  return (
    <div className='show' style={{ margin: 'auto', backgroundColor: '#Eeedb9', position: 'sticky', top: 0, zIndex: '999' }}>
      <Grid>
        <Grid.Row only='mobile' textAlign='right'>
          <Grid.Column mobile={8} textAlign='left'>
            <Link to='/'>
              <img src='/Images/Logo_White.svg' width='100' height='100' alt='Avocado' />
            </Link>
          </Grid.Column>

          <Grid.Column mobile={8} verticalAlign='middle'>
            <Dropdown button style={{ backgroundColor: '#573822', color: 'white', fontSize: '1.3rem' }} icon='bars' pointing='top right'>
              <Dropdown.Menu style={{ backgroundColor: '#Eeedb9' }}>
                <Dropdown.Item>
                  <StyledLink to='/'>{Items[0].text}</StyledLink>
                </Dropdown.Item>

                <Dropdown.Item>
                  <StyledLink to='/about'>{Items[1].text}</StyledLink>
                </Dropdown.Item>

                <Dropdown.Item>
                  <StyledLink to='/services'>{Items[2].text}</StyledLink>
                </Dropdown.Item>

                <Dropdown.Item>
                  <StyledLink to='/contact-us'>{Items[3].text}</StyledLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MobileHeader;

const StyledLink = styled(Link)`
  color: inherit;
`;
