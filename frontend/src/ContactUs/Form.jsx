import React from 'react'
import { Form, Button, Image } from 'semantic-ui-react'


const Forms = () => {
    return (
        <div style={{ margin: '3rem', textAlign: 'left' }}>

            <div style={{ position: 'relative' }}>
                <Form>
                    <Form.Field width={8}>
                        <label style={{ fontSize: '1.2rem' }}>Name</label>
                        <input placeholder='name' />
                    </Form.Field>
                    <Form.Field width={8}>
                        <label style={{ fontSize: '1.2rem' }}>Email</label>
                        <input placeholder='example@gmail.com' />
                    </Form.Field>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <div style={{ textAlign: 'center' }}>
                        <Button primary type='submit'>Submit</Button>
                    </div>

                </Form>
                <Image size='small' src="images/contact1.png" style={{ position: 'absolute', left: - 100, bottom: -50 }} />
            </div>
        </div >
    )
}


export default Forms;


