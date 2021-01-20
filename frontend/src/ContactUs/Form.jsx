import React from 'react'
import { Form, Button, Image } from 'semantic-ui-react'


const Forms = () => {
    const [data, setData] = React.useState({ name: "", email: "", number: "", desc: "" })

    const submit = (e) => {
        console.log(data)

        var data1 = new URLSearchParams();
        for (const pair of new FormData(e.target)) {
            data1.append(pair[0], pair[1])
        }
        e.preventDefault();
        fetch('/contactus', {
            method: "post",
            body: data1,
        })

        e.target.reset();
    }


    return (
        <div style={{ margin: '3rem', textAlign: 'left' }}>

            <div style={{ position: 'relative' }}>
                <Form onSubmit={e => submit(e)}>
                    <Form.Field width={8}>
                        <label style={{ fontSize: '1.2rem' }}>Name</label>
                        <input name="name" type="text" placeholder='name' required onChange={e => setData({ ...data, name: e.target.value })} />
                    </Form.Field>
                    <Form.Field width={8}>
                        <label style={{ fontSize: '1.2rem' }}>Email</label>
                        <input name="email" type="email" placeholder='example@gmail.com' required onChange={e => setData({ ...data, email: e.target.value })} />
                    </Form.Field>
                    <Form.Field width={8}>
                        <label style={{ fontSize: '1.2rem' }}>Number</label>
                        <input name="number" type="number" placeholder='123457890' required onChange={e => setData({ ...data, number: e.target.value })} />
                    </Form.Field>
                    <Form.Field >
                        <label style={{ fontSize: '1.2rem' }}>About</label>
                        <textarea name="description" rows="4" label='About' placeholder='Tell us more about you...' required onChange={e => setData({ ...data, desc: e.target.value })} />
                    </Form.Field>
                    {/*  <Form.TextArea name="description" label='About' placeholder='Tell us more about you...' onChange={e => setData({ ...data, desc: e.target.value })} /> */}
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


