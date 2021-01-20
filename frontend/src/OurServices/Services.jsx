import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Webdev = () => {

    return (
        <div >
            <Grid >
                <Grid.Row style={{ padding: 0, margin: '0' }}>
                    <Grid.Column width={2}>

                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src="/images/OurServices/webdevicon.png" style={{ width: '650px', border: '3px solid #Eeedb9', margin: '5rem 0', borderRadius: '20px' }} />
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle" width={6}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!</p>
                    </Grid.Column>
                    <Grid.Column width={2}>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{ padding: 0, margin: 0, backgroundColor: '#Eeedb9' }}>
                    <Grid.Column width={2} />
                    <Grid.Column verticalAlign="middle" width={6}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src="/images/OurServices/smmicon.png" style={{ width: '650px', border: '3px solid #573822', margin: '5rem 0', borderRadius: '20px' }} />
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>

                <Grid.Row style={{ padding: 0, margin: 0 }}>
                    <Grid.Column width={2} />
                    <Grid.Column width={6}>
                        <Image src="/images/OurServices/graphicdesignicon.png" style={{ width: '650px', border: '3px solid #Eeedb9', margin: '5rem 0', borderRadius: '20px' }} />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle" width={6}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!</p>
                    </Grid.Column>

                    <Grid.Column width={2} />
                </Grid.Row>

                <Grid.Row style={{ padding: 0, margin: 0, backgroundColor: '#Eeedb9' }}>
                    <Grid.Column width={2} />
                    <Grid.Column verticalAlign="middle" width={6}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!</p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image src="/images/OurServices/Consultancyicon.png" style={{ width: '650px', border: '3px solid #573822', margin: '5rem 0', borderRadius: '20px' }} />
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Webdev;