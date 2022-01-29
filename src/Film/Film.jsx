import React from 'react';
import {Card,Button} from 'react-bootstrap'
import {data} from '../Data/data'
import './film.css'

export default function Film() {
  return <div>{
    
    data.map(ad =>{
      return(
        <div className='srt'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{ad.name}</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      )
    })
    
    
    }





   
  </div>;
}
