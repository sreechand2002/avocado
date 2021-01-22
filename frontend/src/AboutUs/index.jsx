import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import HeroBanner from './Header';
const About = () => {
  return (
    <div style={{ backgroundColor: '#573822', textAlign: 'left', margin: 'auto' }}>
      <div>13</div>
      <HeroBanner />
      <div style={{ width: '75%', textAlign: 'center', margin: 'auto' }}>
        <Grid centered>
          <Grid.Row style={{ margin: '3rem 0' }}>
            <Grid.Column computer={4} mobile={16} style={{ margin: '3rem 0' }}>
              <Image style={{ border: '0.4rem solid #F5B7B1' }} circular bordered src='/images/OurTeam/Sree_Chand1.png' />
              <Header as='h2' color='teal' textAlign='center'>
                Sree chand, Developer
              </Header>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem 0' }}>
                <a target='blank' href='https://www.linkedin.com/in/sree-chand-4b0789191/'>
                  <StyledIcon name='linkedin' size='huge' />
                </a>
                <a target='blank' href='https://github.com/sreechand2002'>
                  <StyledIcon name='github' size='huge' />
                </a>
              </div>
            </Grid.Column>

            <Grid.Column computer={4} mobile={16} style={{ margin: '3rem 0' }}>
              <Image style={{ border: '7px solid #F5B7B1' }} circular bordered src='/images/OurTeam/Shreyas1.png' />
              <Header as='h2' color='teal' textAlign='center'>
                Shreyas Ganesh, Designer
              </Header>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem 0' }}>
                <a target='blanlk' href='https://www.linkedin.com/in/shreyas-ganesh-245b3b1a6/'>
                  <StyledIcon name='linkedin' size='huge' />
                </a>
                <a target='blank' href='https://github.com/theshreyasganesh'>
                  <StyledIcon name='github' size='huge' />
                </a>
              </div>
            </Grid.Column>

            <Grid.Column computer={4} mobile={16} style={{ margin: '3rem 0' }}>
              <Image style={{ border: '7px solid #F5B7B1' }} circular bordered src='/images/OurTeam/Xitix1.png' />
              <Header as='h2' color='teal' textAlign='center'>
                Xitiz Verma, Developer
              </Header>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem 0' }}>
                <a target='blank' href='https://www.linkedin.com/in/xitiz-verma-1b763b190/'>
                  <StyledIcon name='linkedin' size='huge' />
                </a>
                <a target='blank' href='https://github.com/XitizVerma'>
                  <StyledIcon name='github' size='huge' />
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Grid>
        <Grid.Row centered>
          <Grid.Column computer={4} mobile={5} style={{ backgroundColor: '#Eeedb9', margin: '2rem ' }}>
            <Header as='h2' textAlign='center'>
              Mission
            </Header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aperiam laboriosam ut beatae debitis hic autem voluptas eveniet fugit
              eius at accusamus vero ipsum possimus nisi, omnis animi, eum reprehenderit.
            </p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={5} style={{ backgroundColor: '#Eeedb9', margin: '2rem ' }}>
            <Header as='h2' textAlign='center'>
              Vision
            </Header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aperiam laboriosam ut beatae debitis hic autem voluptas eveniet fugit
              eius at accusamus vero ipsum possimus nisi, omnis animi, eum reprehenderit.
            </p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={5} style={{ backgroundColor: '#Eeedb9', margin: '2rem ' }}>
            <Header as='h2' textAlign='center'>
              Our philosophy
            </Header>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aperiam laboriosam ut beatae debitis hic autem voluptas eveniet fugit
              eius at accusamus vero ipsum possimus nisi, omnis animi, eum reprehenderit.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default About;

const StyledIcon = styled(Icon)`
  color: #eeedb9;
`;
