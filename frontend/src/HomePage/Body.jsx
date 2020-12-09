import React from 'react'
import { Button, Grid, Image, Header } from 'semantic-ui-react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';


const Body = () => {
    return (
        <div style={{ backgroundColor: '#573822' }}>
            <Grid >
                <Grid.Row only='computer'>
                    <Grid.Column computer={16}>
                        <div style={{ padding: '3rem' }}>
                            <CarouselProvider
                                naturalSlideWidth={200}
                                naturalSlideHeight={70}
                                totalSlides={4}
                                interval={3000}
                                isPlaying='true'
                                style={{ width: '100%', margin: 'auto', padding: '2rem', border: '3px solid #Eeedb9' }}
                            >
                                <Slider>
                                    <Slide index={0}>
                                        <Grid>
                                            <Grid.Row centered style={{ backgroundColor: '#ffc0a7' }}>
                                                <Grid.Column width={6}>
                                                    <Image style={{ height: 'auto', width: '450px', padding: '1.5rem 1rem' }} src='/images/Slide_1.1.png' alt="Logo" />
                                                </Grid.Column>

                                                <Grid.Column width={10} style={{ position: 'relative' }}  >
                                                    <Image style={{ width: '600px', top: 0, right: 10 }} src='/images/web_dev.png' />
                                                    <Image style={{ position: 'absolute', bottom: 0, right: 30, width: '200px' }} src='/images/slide_1.2.png' alt="Logo" />
                                                    <Button style={{ position: 'absolute', bottom: 50, left: 120, backgroundColor: 'brown', color: 'white' }}>Know More</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Slide>

                                    <Slide index={1}>
                                        <Grid>
                                            <Grid.Row centered style={{ backgroundColor: '#c2c2c2' }}>
                                                <Grid.Column width={8} verticalAlign='middle'>
                                                    <Image style={{ height: 'auto', width: '750px', padding: '5rem 0' }} src='/images/slide2.1.png' alt="Logo" />
                                                </Grid.Column>
                                                <Grid.Column width={8} style={{ position: 'relative' }} >
                                                    <Image style={{ width: '600px', top: 0, right: "12.5%" }} src='/images/graphic_design.png' />
                                                    <Image style={{ position: 'absolute', bottom: 20, right: 30 }} size='medium' src='/images/slide2.2.png' alt="Logo" />
                                                    <Button style={{ position: 'absolute', bottom: 50, left: -50, color: 'white' }} >Know More</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Slide>

                                    <Slide index={2}>
                                        <Grid>
                                            <Grid.Row centered style={{ backgroundColor: '#ffffcb' }}>
                                                <Grid.Column width={6} >
                                                    <Image style={{ height: 'auto', width: '500px', padding: '2rem 1rem' }} src='/images/slide3.2.png' alt="Logo" />
                                                </Grid.Column>
                                                <Grid.Column width={10} style={{ position: 'relative' }}>
                                                    <Image style={{ width: '600px', top: 0, right: 15 }} src='/images/social_marketing.png' />
                                                    <Image style={{ height: 'auto', width: '300px', position: 'absolute', bottom: 0, right: 30 }} src='/images/slide3.1.png' alt="Logo" />
                                                    <Button style={{ position: 'absolute', bottom: 50, left: 120, backgroundColor: 'yellow', color: 'white' }} >Know More</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Slide>

                                    <Slide index={3}>
                                        <Grid>
                                            <Grid.Row centered style={{ backgroundColor: '#c9f7ff' }}>
                                                <Grid.Column width={8} verticalAlign='middle'>
                                                    <Image style={{ height: 'auto', width: '600px', padding: '3rem 0' }} src='/images/slide4.1.png' alt="Logo" />
                                                </Grid.Column>
                                                <Grid.Column width={8} style={{ position: 'relative' }}>
                                                    <Image style={{ width: '400px', top: 0, right: 10 }} src='/images/consultancy.png' />
                                                    <Image style={{ position: 'absolute', bottom: 50, right: 30 }} size='medium' src='/images/slide4.2.png' alt="Logo" />
                                                    <Button style={{ position: 'absolute', bottom: 50, left: -50, backgroundColor: 'lightblue', color: 'white' }}>Know More</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Slide>
                                </Slider>
                            </CarouselProvider>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid >

            <Grid centered style={{ marginTop: '5rem' }}>
                <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
                    <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/images/phone1.png' />
                    <Header as='h2' style={{ color: 'white' }}>Web Development</Header>
                </Grid.Row>

                <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
                    <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/images/phone2.png' />
                    <Header as='h2' style={{ color: 'white' }}>Graphic Designing</Header>
                </Grid.Row>

                <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
                    <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/images/phone3.png' />
                    <Header as='h2' style={{ color: 'white' }}>Social Marketing</Header>
                </Grid.Row>

                <Grid.Row only='mobile' mobile={16} style={{ margin: '1.2rem 0' }}>
                    <Image style={{ width: '70%', padding: '1rem', border: '2px solid white' }} src='/images/Phone4.png' />
                    <Header as='h2' style={{ color: 'white' }}>Consultancy</Header>
                </Grid.Row>
            </Grid>

            {/*  <Grid>
                <Grid.Row style={{ margin: '3rem' }}>
                    <Grid.Column computer={8} mobile={16}>
                        <Image style={{ margin: '2rem auto', border: '3px solid #eeedb9', }} src='/images/AboutUS.jpg' size='large' />
                    </Grid.Column>

                    <Grid.Column computer={8} mobile={16}>
                        <h1 style={{ color: '#eeedb9' }}>Why Avocado</h1>
                        <h2 style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo labore, quam provident praesentium, amet, laboriosam ducimus fugit repudiandae nesciunt quas! Impedit iste maiores tempore, sequi eligendi modi recusandae ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a laboriosam libero tempore velit laudantium quibusdam odit voluptates, assumenda, sed, officiis praesentium autem maiores! At, impedit. Dolores, amet. Culpa, vitae?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo labore, quam provident praesentium, amet, laboriosam ducimus fugit repudiandae nesciunt quas! Impedit iste maiores tempore, sequi eligendi modi recusandae ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a laboriosam libero tempore velit laudantium quibusdam odit voluptates, assumenda, sed, officiis praesentium autem maiores! At, impedit. Dolores, amet. Culpa, vitae?</h2>
                    </Grid.Column>
                </Grid.Row>

            </Grid> */}


        </div>


    )
}

export default Body;