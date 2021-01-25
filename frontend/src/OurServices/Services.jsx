import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

const Webdev = () => {
  return (
    <div>
      <Grid>
        <Grid.Row id='web' centered style={{ padding: 0, margin: '0' }}>
          <Grid.Column computer={2} only='computer' />
          <Grid.Column computer={6} mobile={15}>
            <Image
              src='/Images/OurServices/webdevicon.png'
              style={{ width: '650px', border: '3px solid #Eeedb9', margin: '5rem 0', borderRadius: '20px' }}
            />
          </Grid.Column>

          <Grid.Column verticalAlign='middle' computer={6} mobile={15}>
            <Header as='h1' style={{ color: 'white', fontSize: '3rem' }}>
              Web Development
            </Header>
            <p style={{ textAlign: 'left', color: 'white', fontSize: '1.2rem' }}>
              We aim at building Dynamic and Interactive Web design, Integrating, Scaling and Maintaining them along with their respective Database
              Management . We at Avocado can build anything including a variety of Website Design and Development Services, from creating Mobile Web
              Development Solutions and Responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven
              web technologies. Making Smart Imperial Websites using modern development tools and techniques implementing best practices (like REACT,
              ANGULAR, NODE JS, PHP ,MONGODB) has been our favourite habit/motive ! Our polyglot coders/developers are proficient in a variety of
              languages and modern frameworks adhering to all your needs! Client-focused, customer-centric, creating website solutions that deliver
              tangible business results, Avocado's web developers helps brands create their "Personalized Digital Landscape"!
            </p>
          </Grid.Column>
          <Grid.Column computer={2} only='computer' />
        </Grid.Row>

        <Grid.Row centered style={{ padding: 0, margin: 0, backgroundColor: '#Eeedb9' }} id='social'>
          <Grid.Column computer={2} only='computer' />
          <Grid.Column verticalAlign='middle' computer={6} mobile={15}>
            <Header as='h1' style={{ fontSize: '3rem' }}>
              Social Marketing
            </Header>
            <p style={{ textAlign: 'left', fontSize: '1.2rem' }}>
              Since the commercialization of the Web, Digital Marketing has been a growing industry. The growth of this industry is being driven by
              businesses wishing to use their Web site to advertise and sell products and services to customers As a matter of fact Social Media
              Marketing has transformed the shopping and bargain-hunting experience for many consumers and has proved to be a Game-Changer . We work
              closely with enterprise level customers to create outstanding high performing and secure custom websites with a focus on unique,
              professional Digital Marketing to provide with a more personal and interactive way to engage the public. Whatever your project requires,
              Avocado has the tools and experience to ensure that your goals are not only met, but exceeded. We help brands understand the role
              digital can play in realizing strategic opportunities and solving real world business problems, always keeping the focus on the
              customer's experience and the results generated. Fulling Your Advertising Solutions! Marketing that works for you !
            </p>
          </Grid.Column>
          <Grid.Column computer={6} mobile={15}>
            <Image
              src='/Images/OurServices/smmicon.png'
              style={{ width: '650px', border: '3px solid #573822', margin: '5rem 0', borderRadius: '20px' }}
            />
          </Grid.Column>
          <Grid.Column computer={2} only='computer' />
        </Grid.Row>

        <Grid.Row centered style={{ padding: 0, margin: 0 }} id='graphic'>
          <Grid.Column computer={2} only='computer' />
          <Grid.Column computer={6} mobile={15}>
            <Image
              src='/Images/OurServices/graphicdesignicon.png'
              style={{ width: '650px', border: '3px solid #Eeedb9', margin: '5rem 0', borderRadius: '20px' }}
            />
          </Grid.Column>
          <Grid.Column verticalAlign='middle' computer={6} mobile={15}>
            <h1 style={{ color: 'white', fontSize: '3rem' }}>Graphic Designing</h1>
            <p style={{ textAlign: 'left', fontSize: '1.2rem', color: 'white' }}>
              Our team also has an Amazing Inhouse UX design professional, Visual Designer and budding Software Engineers with expertise in Graphic
              Design services and technologies. Your brand brought to life. Our professional graphic designer have the creative capabilities to take
              your company's personality and translate it to Visual design. With careful consideration of color schemes, typography, and essential
              design principles, our team will work with you every step of the way toward the creation of an impressive and affordable graphics that
              you'll be proud to have representing your brand. Our aim is Creating illustrative graphics that make the World talk about You ! Avocado
              believes in three R's - Reliable, Rapid &amp; Renowned Delivery ! Using agile methodology, always keeping you in the loop. Streamlined
              delivery, cost effective engagements, designed to match your goals, your timeline and your budget.
            </p>
          </Grid.Column>

          <Grid.Column computer={2} only='computer' />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Webdev;
