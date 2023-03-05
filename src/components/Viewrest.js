import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';

function Viewrest() {

  const urlparams=useParams()
  console.log(urlparams);//{id:"1"}
  console.log(urlparams.id);

  const [AllRestaurants,setAllRestaurants]=useState([])

  //function to call api to get data from restaurant.json

  const getRestaurants=async()=>{

    await fetch('/restaurants.json')
    .then((data)=>{
        data.json()
        .then((result)=>{
            // console.log(result); //array of data
            setAllRestaurants(result.restaurants)

        })
    })
  }
  console.log(AllRestaurants);

useEffect( ()=>{
    getRestaurants()
},[])


    const viewrest=AllRestaurants.find(item=>item.id==urlparams.id)
    console.log(viewrest);

  return (
    <>
      {
        viewrest?(
          <Row className='ms-3'>
            <Col className='ms-5' md={4}>
            <Image src={viewrest.photograph} fluid></Image>
            </Col>
            <Col  md={7}>
            <ListGroup>
            <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
            <ListGroup.Item><h3>{viewrest.cuisine_type}</h3></ListGroup.Item>
            <ListGroup.Item><h3>{viewrest.neighborhood}</h3></ListGroup.Item>
            <ListGroup.Item><h3>{viewrest.address}</h3></ListGroup.Item>
            <ListGroup.Item><Restop operate={viewrest.operating_hours}/> </ListGroup.Item>
            <Restreview review={viewrest.reviews}/>
          </ListGroup>
          
            </Col>
          </Row>
        ):'null'


        
      }

    </>
  )
}

export default Viewrest