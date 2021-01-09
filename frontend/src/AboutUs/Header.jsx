import React from 'react'
import { Header } from 'semantic-ui-react'

const HeroBanner = () => {
    return (
        <div style={{ margin: '5rem auto', width: '75%' }}>
            <Header as='h2' style={{ color: 'white' }}>
                We at Avocado are a dedicated group of undergraduate Engineers committed at improving our skills and Creativity ,and heartfully providng you the best of our services.<br /> Avocado was founded in 2020 by a group of Engineers , their spirit and passion for the technology and challenges led them to start this digital agency
            </Header>
        </div>
    )
}

export default HeroBanner;