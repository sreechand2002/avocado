import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Headers = () => {

    const [Item, setItem] = React.useState('Home')
    /*  const [clr, setClr] = React.useState({ color1: 'transparent', color2: 'transparent', color3: 'transparent', color4: 'transparent' }) */

    return (
        <div className='show' style={{ margin: 'auto', backgroundColor: '#Eeedb9', position: 'sticky', top: 0, zIndex: '999' }}>
            <Grid>
                <Grid.Row only='computer'>
                    <Grid.Column width={4}>
                        <Link to='/'>
                            <img style={{ height: '150px' }} src='/images/Logo_White.svg' alt="Logo" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' computer={12}>
                        <Menu secondary floated='right' color='brown'>
                            <NavLink to='/'>
                                <Menu.Item
                                    name="Home"
                                    active={Item === "Home"}
                                    onClick={() => {
                                        setItem("Home")

                                    }}

                                >
                                    <StyledText>Home</StyledText>
                                </Menu.Item>
                            </NavLink>

                            <NavLink to='/about'>
                                <Menu.Item
                                    name="About us"
                                    active={Item === "About us"}
                                    onClick={() => {
                                        setItem("About us")

                                    }}

                                >
                                    <StyledText>About us</StyledText>
                                </Menu.Item>
                            </NavLink>

                            <NavLink to='/services'>
                                <Menu.Item
                                    name="Our Services"
                                    active={Item === "Our Services"}
                                    onClick={() => {
                                        setItem("Our Services")

                                    }}

                                >
                                    <StyledText>Our Services</StyledText>
                                </Menu.Item>
                            </NavLink>

                            <NavLink to='/contactus'>
                                <Menu.Item
                                    name="Contact-Us"
                                    active={Item === "Contact-Us"}
                                    onClick={() => {
                                        setItem("Contact-Us")

                                    }}

                                >
                                    <StyledText>Contact-Us</StyledText>
                                </Menu.Item>
                            </NavLink>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )

}


export default withRouter(Headers);

const StyledText = styled.strong`
    font-size:1.5rem;
    &:hover {
        text-decoration:underline;
        text-shadow: 2px 2px 4px #000000;
    }
`



