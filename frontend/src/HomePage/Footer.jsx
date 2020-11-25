import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div style={{ margin: 'auto', backgroundColor: '#Eeedb9', color: 'black' }}>
            <Grid>
                <Grid.Row >
                    <Grid.Column computer={4} mobile={16} verticalAlign='middle'>
                        <Link to='/'>
                            <img style={{ height: '150px' }} src='/images/avocado1.svg' alt="Logo" />
                        </Link>
                    </Grid.Column>

                    <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <h2>Services</h2>
                            <h3>Web development</h3>
                            <h3>Graphic Designing</h3>
                            <h3>Digital Marketing</h3>
                        </div>
                    </Grid.Column>


                    <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <h2>Company</h2>
                            <h3>About Us</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </Grid.Column>

                    <Grid.Column computer={3} mobile={8} style={{ margin: '2rem 0' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                            <h2>Contact Us</h2>
                            <h3>contactus@avocado.in</h3>
                            <h3>+91 9886587236</h3>
                            <h3>2nd cross 2nd main <br /> sarakki gate<br /> bangalore-560078</h3>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Footer;