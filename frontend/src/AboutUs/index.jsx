import React from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components'
import HeroBanner from './Header'
const About = () => {
    return (
        <div style={{ backgroundColor: '#573822', textAlign: 'left', margin: 'auto' }}>
            <div>13</div>
            <HeroBanner />
            <div style={{ width: '75%', textAlign: 'center', margin: 'auto' }}>
                <Grid centered>
                    <Grid.Row style={{ margin: '3rem 0' }}>
                        <Grid.Column computer={4} mobile={16}>
                            <Image style={{ border: '0.4rem solid #F5B7B1' }} circular bordered src='/images/OurTeam/Sree_Chand1.png' />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem 0' }}>
                                <a target="blank" href='https://www.linkedin.com/in/sree-chand-4b0789191/'>
                                    <StyledIcon name='linkedin' size='huge' />
                                </a>
                                <a target="blank" href="https://github.com/sreechand2002">
                                    <StyledIcon name='github' size='huge' />
                                </a>

                            </div>
                        </Grid.Column>

                        <Grid.Column computer={4} mobile={16}>
                            <Image style={{ border: '7px solid #F5B7B1' }} circular bordered src='/images/OurTeam/Shreyas1.png' />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem 0' }}>
                                <a target="blanlk" href="https://www.linkedin.com/in/shreyas-ganesh-245b3b1a6/">
                                    <StyledIcon name='linkedin' size='huge' />
                                </a>
                                <a target="blank" href="https://github.com/theshreyasganesh">
                                    <StyledIcon name='github' size='huge' />
                                </a>

                            </div>
                        </Grid.Column>

                        <Grid.Column computer={4} mobile={16}>
                            <Image style={{ border: '7px solid #F5B7B1' }} circular bordered src='/images/OurTeam/Xitix1.png' />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '1rem 0' }}>
                                <a target="blank" href="https://www.linkedin.com/in/xitiz-verma-1b763b190/">
                                    <StyledIcon name='linkedin' size='huge' />
                                </a>
                                <a target="blank" href="https://github.com/XitizVerma">
                                    <StyledIcon name='github' size='huge' />
                                </a>

                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={5} style={{ backgroundColor: '#Eeedb9', margin: '2rem' }}>
                        Mission
                    </Grid.Column>

                    <Grid.Column width={5}>
                        Vision
                    </Grid.Column>

                    <Grid.Column width={5}>
                        Goals
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}



export default About;


const StyledIcon = styled(Icon)`
    color:#Eeedb9;
`