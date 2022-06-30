import React from 'react'
import BNavBar from './components/BNavBar/BNavBar'
import InputText from './components/InputText/InputText'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import BCard from './components/BCard/BCard'
import Space from './components/Space'
import Circle from './components/ValueCircle/Circle'
import Coin from './components/ValueCircle/coin.png'
import Peer from './components/ValueCircle/peer.png'
import Map from './components/ValueCircle/map.png'
import Contact from './components/ValueCircle/contact.png'

const App = ()=>{
    return(
    <div>
        {/*Navigation Bar*/}
        <BNavBar />

        <br></br>
        {/*Schedule Listing box, first thing you see on the page*/}
        <h3 className='listing-header'>Schedule a rideshare listing</h3>
        <div className='listing-box'>
            <InputText InputText='Departure' Type='text' />
            <InputText InputText='Destination' Type='text' />
            <InputText InputText='Date' Type='date' />
            <InputText InputText='Time' Type='time' />
            <Button variant="primary">Offer or Request a lift</Button>{' '}
        </div>

        <Space />
        {/*Popular listings, with a display of some cards*/}
        <div className='popular-listings-header'>
            <h3 className='popular-header'>Popular Listings</h3>
            <Button variant="warning">See all available listings</Button>
        </div>
        <Space />

        <div className='popular-listings'>
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' />
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' />
            <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='20rem' />
        </div>
        <Space />

        {/*Company fluff*/}
        <h3 className='popular-header'>Our Values</h3>
        <br></br>
        <br></br>

        <div className='values-box'>
            <center><Circle Path={Peer} Type="Peer-to-Peer" Description=
            'Listings are created by ordinary Canadians such as yourself. '/></center>
            <center><Circle Path={Map} Type="Long Distance" Description= 
            "The only limitation is the number of listings themselves."/></center>
            <center><Circle Path={Coin} Type="Cost Effective" Description='Cheaper than a plane, bus, or train tickets. Riders usually only pay their fair share of gas.'/></center>
        </div>

        <br></br>
            
            <div className='all-box'>
                <h3 className='all-header'>All available listings</h3>
                <InputText InputText='Search' Type='text' />
            </div>

        <Row>
            <Col>
                <div className='listing-container'>
                    <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='18rem'/>
                    <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='18rem'/>
                    <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='18rem'/>
                    <BCard Type='Request' Date='24-Jun-2022' Time='19:00' Departure='Ottawa' Destination='Montreal' Description='Looking for a ride from Ottawa to Montrea, ideally drop off at YUL airport. I have luggage...' Width='18rem' />

                </div>
            </Col>
            <Col>
                <div className='listing-container'>
                    <BCard Type='Offer' Date='24-Jun-2022' Time='19:00' Departure='Toronto' Destination='Montreal' Description='Planning to go see the new Ghost concern, and Ive got up to 4 seats available. First come first serve.' Width='18rem'/>
                    <BCard Type='Offer' Date='24-Jun-2022' Time='19:00' Departure='Montreal' Destination='Vancouver' Description='Will be visiting my grandparents and ive got some seats available if anyones interested. My car is a' Width='18rem'/>
                    <BCard Type='Offer' Date='24-Jun-2022' Time='19:00' Departure='Toronto' Destination='Montreal' Description='Planning to go see the new Ghost concern, and Ive got up to 4 seats available. First come first serve.' Width='18rem'/>
                    <BCard Type='Offer' Date='24-Jun-2022' Time='19:00' Departure='Montreal' Destination='Vancouver' Description='Will be visiting my grandparents and ive got some seats available if anyones interested. My car is a' Width='18rem'/>
                </div>
            </Col>
        </Row>

        <br></br>
        <div className='contact-box'>
            <center><Circle Path={Contact} Type="Talk with an advisor" Description="Enter your email address regarding your questions and we'll connect you to the right person."/></center>
            <div>
                <InputText InputText='Email' Type='email' />
                <InputText InputText='Comment' Type='text' />
                <Button variant="primary">Submit</Button>{' '}
            </div>
        </div>
        <Space />
    </div>
    )}

export default App