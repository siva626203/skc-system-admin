import React, { Component } from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import '../App.css';
import '../style.css'

import I3 from '../images/3.jpg';
import I4 from '../images/4.jpg'; 
class Student extends Component{
    render(){
        return(
            <CardGroup>
  <Card className="card-s">
    <Card.Img variant="top" src={I3} />
    <Card.Body>
      <Card.Title>SIVAKUMAR</Card.Title>
      <Card.Text>
      Bsc(IT)-1Y<br/>Web Developer
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A11UIT027</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={I3} />
    <Card.Body>
      <Card.Title>SAM STANLY</Card.Title>
      <Card.Text>
      Bsc(IT)-1Y<br/>App Developer
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A11UIT026</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={I4} />
    <Card.Body>
      <Card.Title>Others</Card.Title>
      <Card.Text>
      Bsc(IT)-1Y<br/>Multiroles
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A11UIT01-29</small>
    </Card.Footer>
  </Card>
</CardGroup>

        )
    }
}
export default Student;