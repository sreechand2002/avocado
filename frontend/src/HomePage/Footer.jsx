import React from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
    return (
        <div style={{ margin: 'auto', backgroundColor: '#Eeedb9', color: 'black' }}>
            <div style={{ marginLeft: '2rem' }}>
                <Grid>
                    <Grid.Row >
                        <Grid.Column computer={4} mobile={16} verticalAlign='top'>
                            <Link to='/'>
                                <img style={{ height: '150px' }} src='/images/Logo_White.svg' alt="Logo" />
                            </Link>
                        </Grid.Column>

                        <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                            <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%', height: '320px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 'auto', color: 'white' }}>
                                    <h2>Services</h2>
                                    <hr style={{ width: '50%' }} />
                                    <StyledLink to='/'>
                                        <h3 >Web development</h3>
                                    </StyledLink>
                                    <StyledLink to='/'>
                                        <h3>Graphic Designing</h3>
                                    </StyledLink>
                                    <StyledLink to='/'>
                                        <h3>Social Marketing</h3>
                                    </StyledLink>
                                    <StyledLink to='/'>
                                        <h3>Consultancy</h3>
                                    </StyledLink>

                                </div>
                            </Card>

                        </Grid.Column>


                        <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                            <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 'auto', color: 'white' }}>
                                    <h2>Company</h2>
                                    <hr style={{ width: '50%' }} />
                                    <h3>About Us</h3>
                                    <h3>Contact us</h3>
                                </div>
                            </Card>
                        </Grid.Column>

                        <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                            <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%', height: '320px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 'auto', color: 'white' }}>
                                    <h2>Get In Touch</h2>
                                    <hr style={{ width: '50%' }} />
                                    <h3>contactus@avocado.in</h3>
                                    <h3>+91 9886587236</h3>
                                    <h3>2nd cross 2nd main <br /> sarakki gate<br /> bangalore-560078</h3>
                                </div>
                            </Card>

                        </Grid.Column>

                        <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                            <Card style={{ backgroundColor: '#573822', padding: '1rem', width: '80%' }}>
                                <h2 style={{ color: 'white' }}>Social media </h2>
                                <hr style={{ width: '50%' }} />
                                <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', margin: 'auto', color: 'white' }}>
                                    <Icon size='big' name='facebook' />
                                    <Icon size='big' name='linkedin' />
                                    <Icon size='big' name='instagram' />
                                </div>
                            </Card>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        </div>
    )
}

export default Footer;

const StyledLink = styled(Link)
    `
    color:white;
    margin:1rem;
`