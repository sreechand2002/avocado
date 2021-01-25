import React from 'react';
import { Button, Grid, Image, Header } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { Helmet } from 'react-helmet';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Body = () => {
  return (
    <div style={{ backgroundColor: '#573822', overflow: 'hidden' }}>
      <div></div>
      <Grid style={{ marginTop: '3rem' }}>
        <Grid.Row centered style={{ marginTop: '3rem' }}>
          <Grid.Column computer={5} mobile={6} style={{ backgroundColor: '#Eeedb9' }}>
            <Image src='/Images/HPIcons/TAG2-min.png' />
          </Grid.Column>

          <Grid.Column computer={5} mobile={6} style={{ backgroundColor: '#Eeedb9' }}>
            <Image src='/Images/HPIcons/TAG1-min.png' />
          </Grid.Column>

          <Grid.Column computer={5} mobile={6} style={{ backgroundColor: '#Eeedb9' }}>
            <Image src='/Images/HPIcons/TAG3-min.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row only='computer'>
          <Grid.Column computer={16}>
            <div style={{ padding: '3rem' }}>
              <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={70}
                totalSlides={3}
                interval={3000}
                isPlaying='true'
                style={{ width: '100%', margin: 'auto', padding: '2rem', border: '3px solid #Eeedb9' }}
              >
                <Slider>
                  <Slide index={0}>
                    <Grid>
                      <Grid.Row centered style={{ backgroundColor: '#ffc0a7' }}>
                        <Grid.Column width={6}>
                          <Image style={{ height: 'auto', width: '550px', padding: '0rem 1rem' }} src='/Images/Slide_1.1.png' alt='Logo' />
                        </Grid.Column>

                        <Grid.Column width={10} style={{ position: 'relative' }}>
                          <Image style={{ width: '600px', top: 0, right: 10 }} src='/Images/web_dev.png' />
                          <Image style={{ position: 'absolute', bottom: 0, right: 30, width: '200px' }} src='/Images/slide_1.2.png' alt='Logo' />
                          <div style={{ width: '50%' }}>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore accusamus hic molestias non minus est repudiandae
                              amet aliquid, at quasi dicta corporis quaerat architecto officia facere similique sunt optio alias? Lorem ipsum dolor
                              sit amet consectetur adipisicing elit. Non, exercitationem nobis dolor neque nemo laudantium nam dolores quod architecto
                              repudiandae voluptatem molestiae minus fuga ex saepe similique libero iure rerum? Lorem ipsum dolor, sit amet
                              consectetur adipisicing elit. Explicabo quidem doloribus, quae nulla quia facere laborum in eum fugiat perferendis,
                              doloremque hic labore delectus et vitae exercitationem, ab corrupti. Saepe!
                            </p>
                          </div>
                          <a href='/services#web'>
                            <Button style={{ position: 'absolute', bottom: 50, left: 120, backgroundColor: 'brown', color: 'white' }}>
                              Know More
                            </Button>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Slide>

                  <Slide index={1}>
                    <Grid>
                      <Grid.Row centered style={{ backgroundColor: '#c2c2c2' }}>
                        <Grid.Column width={8} verticalAlign='middle'>
                          <Image style={{ height: 'auto', width: '750px', padding: '5rem 0' }} src='/Images/slide2.1.png' alt='Logo' />
                        </Grid.Column>
                        <Grid.Column width={8} style={{ position: 'relative' }}>
                          <Image style={{ width: '600px', top: 0, right: '12.5%' }} src='/Images/graphic_design.png' />
                          <Image style={{ position: 'absolute', bottom: 20, right: 30 }} size='medium' src='/Images/slide2.2.png' alt='Logo' />
                          <a href='/services#graphic'>
                            <Button style={{ position: 'absolute', bottom: 50, left: -50, color: 'white' }}>Know More</Button>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Slide>

                  <Slide index={2}>
                    <Grid>
                      <Grid.Row centered style={{ backgroundColor: '#ffffcb' }}>
                        <Grid.Column width={6}>
                          <Image style={{ height: 'auto', width: '550px', padding: '2rem 1rem' }} src='/Images/slide3.2.png' alt='Logo' />
                        </Grid.Column>
                        <Grid.Column width={10} style={{ position: 'relative' }}>
                          <Image style={{ width: '600px', top: 0, right: 15 }} src='/Images/social_marketing.png' />
                          <Image
                            style={{ height: 'auto', width: '300px', position: 'absolute', bottom: 0, right: 30 }}
                            src='/Images/slide3.1.png'
                            alt='Logo'
                          />
                          <a href='/services#social'>
                            <Button style={{ position: 'absolute', bottom: 50, left: 120, backgroundColor: 'yellow', color: 'white' }}>
                              Know More
                            </Button>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Slide>

                  {/* <Slide index={3}>
                    <Grid>
                      <Grid.Row centered style={{ backgroundColor: '#c9f7ff' }}>
                        <Grid.Column width={8} verticalAlign='middle'>
                          <Image style={{ height: 'auto', width: '700px', padding: '3rem 0' }} src='/images/slide4.1.png' alt='Logo' />
                        </Grid.Column>
                        <Grid.Column width={8} style={{ position: 'relative' }}>
                          <Image style={{ width: '400px', top: 0, right: 10 }} src='/images/consultancy.png' />
                          <Image style={{ position: 'absolute', bottom: 50, right: 30 }} size='medium' src='/images/slide4.2.png' alt='Logo' />
                          <a href='/services#consultancy'>
                            <Button style={{ position: 'absolute', bottom: 75, left: -50, backgroundColor: 'lightblue', color: 'white' }}>
                              Know More
                            </Button>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Slide> */}
                </Slider>
              </CarouselProvider>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid centered style={{ marginTop: '5rem' }}>
        <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
          <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/Images/phone1-min.png' />
          <Header as='h2' style={{ color: 'white' }}>
            Web Development
          </Header>
        </Grid.Row>

        <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
          <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/Images/phone2-min.png' />
          <Header as='h2' style={{ color: 'white' }}>
            Graphic Designing
          </Header>
        </Grid.Row>

        <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
          <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/Images/phone3-min.png' />
          <Header as='h2' style={{ color: 'white' }}>
            Social Marketing
          </Header>
        </Grid.Row>
      </Grid>

      <Grid textAlign='center'>
        <Header as='h1' textAlign='center' style={{ color: '#Eeedb9', size: '2rem' }}>
          Why Avocado?
        </Header>
        <Grid.Row style={{ margin: '1rem 3rem 4rem 3rem', backgroundColor: '#Eeedb9' }} textAlign='center'>
          <Grid.Column computer={4} mobile={16}>
            <Image size='small' style={{ marginLeft: '30%' }} src='/Images/HPIcons/ClientCentric-min.png' />
            <Header as='h2' textAlign='center'>
              Client-Centric
            </Header>
            <p>
              Putting our clients first and at the core of your business in order to provide a positive experience and build long-term
              relationships.Adhering to Client's needs ,preferences and Challenges in a unique way.
            </p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={16}>
            <Image style={{ marginLeft: '30%' }} size='small' src='/Images/HPIcons/OutOfBox-min.png' />
            <Header as='h2' textAlign='center'>
              Out of the Box
            </Header>
            <p>Our team of agile developers always use their imagination and creativity in artistic ways!</p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={16}>
            <Image size='small' style={{ marginLeft: '30%' }} src='/Images/HPIcons/MagneticUE-min.png' />
            <Header as='h2' textAlign='center'>
              Magnetic User Experience
            </Header>
            <p>Adhering to Client/Customer s needs ,preferences and Challenges in a unique way.</p>
          </Grid.Column>

          <Grid.Column computer={4} mobile={16}>
            <Image size='small' style={{ marginLeft: '30%', marginTop: '1rem' }} src='/Images/HPIcons/EnablingPerfection.png' />

            <Header as='h2' textAlign='center'>
              Enabling Prefection
            </Header>
            <p>Always Delivering high-quality, high-level services with unmatched precision!</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Helmet>
        <title>Avocado - Home</title>
        <meta property='og:title' content='Avocado' />
        <meta name='description' content='Avocado is a service providing tech start-up to endure consumer needs.' />
        <meta property='og:image' content='/Images/Logo_White.svg' />
      </Helmet>
    </div>
  );
};

export default Body;
