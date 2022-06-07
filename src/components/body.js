
import {Card} from 'react-bootstrap';
import React, {Component} from 'react';
import Banner from '../images/1.jpg';
import 'react-slideshow-image/dist/styles.css'

class Body extends Component{       
render(){
           return (
           
            <Card className="bg-dark text-white">
            <Card.Img src={Banner} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Information Technology </Card.Title>
            </Card.ImgOverlay>
          </Card>
           )         
              }
          }


export default Body;