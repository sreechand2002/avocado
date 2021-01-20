import React from 'react'
import { Grid } from 'semantic-ui-react'

const MobileFooter = () => {
    return (
        <div>
            <Grid>
                <Grid.Row only="mobile">
                    <Grid.Column mobile={8}>
                        <h1>Services</h1>
                        <a href="/"> Web development</a>
                        <a href="/"> Graphic Designing</a>
                    </Grid.Column>

                    <Grid.Column mobile={8}>
                        <h1>Services</h1>
                        <a href="/"> Web development</a><br />
                        <a href="/"> Graphic Designing</a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}


export default MobileFooter;