import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './BCard.css'

const BCard = (props)=>{
    return(
        <div>
            <Card style={{ width: props.Width }} className='custom'>
                <Card.Body>
                    <Card.Title>Ride {props.Type}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.Date} at {props.Time}</Card.Subtitle>
                </Card.Body>
                <br></br>
                <br></br>
                <br></br>
                <Card.Body>
                    <Card.Title>{props.Departure} to {props.Destination}</Card.Title>
                    <Card.Text>
                    {props.Description}
                    </Card.Text>
                    <Button variant="danger" className='inline-button'>Reply</Button>
                    <Button variant="outline-primary">More</Button>{' '}
                </Card.Body>
            </Card>
        </div>
    )
} 

export default BCard