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
            <Header>Web Development</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam
              veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!
            </p>
          </Grid.Column>
          <Grid.Column computer={2} only='computer' />
        </Grid.Row>

        <Grid.Row centered style={{ padding: 0, margin: 0, backgroundColor: '#Eeedb9' }} id='social'>
          <Grid.Column computer={2} only='computer' />
          <Grid.Column verticalAlign='middle' computer={6} mobile={15}>
            <Header>Social Marketing</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam
              veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!
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
            <Header>Graphic Designing</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam
              veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!
            </p>
          </Grid.Column>

          <Grid.Column computer={2} only='computer' />
        </Grid.Row>

        {/* <Grid.Row centered style={{ padding: 0, margin: 0, backgroundColor: '#Eeedb9' }} id='consultancy'>
          <Grid.Column computer={2} only='computer' />
          <Grid.Column verticalAlign='middle' computer={6} mobile={15}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum reprehenderit veritatis quibusdam ipsam a quo tempore culpa quisquam
              veniam blanditiis, sed soluta eum temporibus nulla beatae aut harum repellat necessitatibus!
            </p>
          </Grid.Column>
          <Grid.Column computer={6} mobile={15}>
            <Image
              src='/images/OurServices/Consultancyicon.png'
              style={{ width: '650px', border: '3px solid #573822', margin: '5rem 0', borderRadius: '20px' }}
            />
          </Grid.Column>
          <Grid.Column computer={2} only='computer' />
        </Grid.Row> */}
      </Grid>
    </div>
  );
};

export default Webdev;
