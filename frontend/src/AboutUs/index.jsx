import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import HeroBanner from './Header';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div style={{ backgroundColor: '#573822', textAlign: 'left', margin: 'auto' }}>
      <div>13</div>
      <HeroBanner />
      <div style={{ width: '75%', textAlign: 'center', margin: 'auto' }}>
        <Grid centered>
          <Grid.Row style={{ margin: '3rem 0' }}>
            <Grid.Column computer={4} mobile={16} style={{ margin: '3rem 0' }}>
              <Image style={{ border: '0.4rem solid #F5B7B1' }} circular bordered src='/Images/OurTeam/Sree_Chand1.png' />
              <Header as='h2' color='teal' textAlign='center'>
                Sree Chand
                <br /> (Developer)
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
              <Image style={{ border: '7px solid #F5B7B1' }} circular bordered src='/Images/OurTeam/Shreyas1.png' />
              <Header as='h2' color='teal' textAlign='center'>
                Shreyas Ganesh
                <br /> (Designer)
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
              <Image style={{ border: '7px solid #F5B7B1' }} circular bordered src='/Images/OurTeam/Xitix1.png' />
              <Header as='h2' color='teal' textAlign='center'>
                Xitiz Verma
                <br /> (Developer)
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
          <Grid.Column computer={4} mobile={16} style={{ backgroundColor: '#Eeedb9', margin: '2rem ' }}>
            <Header as='h2' textAlign='center' style={{ marginTop: '2rem' }}>
              Our Vision
              <hr style={{ width: '50%' }} />
            </Header>
            <p style={{ padding: '1.5rem ', textAlign: 'justify' }}>
              Avocado is one of the prominent start-up , that helps other individuals and organizations to transform into digital enterprises.
              <br />
              It differentiates you from competitors in the market and provides better engagement with customers, partners and employees.
              <br />
              Avocado believes in exploring new opportunities that maximize the business value, consistent growth, and sustainability using our core
              competencies. To build highest standards of reliability and cost containment. <br />
              To offer seamless service and build value for clients through focus and results. To be a process driven, professionally managed
              organization We value integrity, commitment, excellence, teamwork, transparency, and satisfaction for our clients and ourselves.
            </p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={16} style={{ backgroundColor: '#Eeedb9', margin: '2rem ' }}>
            <Header as='h2' textAlign='center' style={{ marginTop: '2rem' }}>
              Our Mission
              <hr style={{ width: '50%' }} />
            </Header>
            <p style={{ padding: '1.5rem ', textAlign: 'justify' }}>
              Our mission is to provide client-centric, result-oriented, pocket-friendly innovative &amp; functional Solutions to our valuable
              clients. <br />
              Focused on constant innovation as our key for achieving the ultimate goal of success and emerge as a globally recognized company by
              providing the superior quality services and solutions.
              <br /> Meeting expectations of our clients, employees, and partners. Be a vibrant organization where openness, trust, teamwork,
              simplicity, and innovation are valued and promoted.
              <br /> We have made it our mission to Help and collaborate with our clients in bringing phenomenal products to the market in a very
              effective &amp; efficient manner.
            </p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={16} style={{ backgroundColor: '#Eeedb9', margin: '2rem ' }}>
            <Header as='h2' textAlign='center' style={{ marginTop: '2rem' }}>
              Our Aim
              <hr style={{ width: '50%' }} />
            </Header>
            <p style={{ padding: '1.5rem ', textAlign: 'justify' }}>
              Our main aim is to progress in a constant manner and become a leading performer in this competitive global marketplace.
              <br /> we have successfully been able to gather a crew of professionals that can shape and mould their collective experiences. <br />
              All of them possess outstanding talent that can help accelerate an individual or an organization, thus delivering innovative and
              reliable solutions to meet our clients’ needs with utmost quality and unwavering ethics. <br />
              Furthermore, we aim to enhance business growth of our clients with creative design, development and to deliver market defining high
              quality solutions that create value and reliable competitive advantage to customers around the globe.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Helmet>
        <title>Avocado - About us</title>
        <meta property='og:title' content='Avocado' data-react-helmet='true' />
        <meta property='og:description' content='Avocado is a service providing tech start-up to endure consumer needs.' data-react-helmet='true' />
        <meta property='og:image' content='/Images/Logo_White.svg' data-react-helmet='true' />
      </Helmet>
    </div>
  );
};

export default About;

const StyledIcon = styled(Icon)`
  color: #eeedb9;
`;
