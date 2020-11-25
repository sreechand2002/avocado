import React from 'react'
import { Grid } from 'semantic-ui-react'
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';


const Body = () => {
    return (
        <div style={{ backgroundColor: '#573822' }}>
            <CarouselProvider
                naturalSlideWidth={500}
                naturalSlideHeight={50}
                totalSlides={2}
                interval={3000}
                isPlaying='true'

            >
                <Slider>
                    <Slide index={0}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <img style={{ height: '150px' }} src='/images/avocado1.svg' alt="Logo" />
                                </Grid.Column>

                                <Grid.Column width={8} verticalAlign='middle'>
                                    <h2>Web Development</h2>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Slide>

                    <Slide index={1}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <img style={{ height: '150px' }} src='/images/Logo_white.jpeg' alt="Logo" />
                                </Grid.Column>

                                <Grid.Column width={8} verticalAlign='middle'>
                                    <h2>Graphic Designing</h2>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Slide>
                </Slider>
                <Dot Slide={0} style={{ backgroundColor: '#573822' }} />
                <Dot slide={1} style={{ backgroundColor: '#573822' }} />
            </CarouselProvider>
        </div>
    )
}

export default Body;