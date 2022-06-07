import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
class Gallery extends Component{
    render(){
        return(
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery10.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Smart Classroom</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery9.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second Classroom </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery7.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Meeting Hall</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}
export default Gallery;