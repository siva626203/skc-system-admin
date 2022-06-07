import React, { Component } from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import '../App.css';
import '../style.css'

import I3 from '../images/3.jpg';
import I4 from '../images/4.jpg'; 
class Faculty extends Component{
    render(){
        return(
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={I3} />
    <Card.Body>
      <Card.Title>Mr.A.Balaji, M.S (IT & M), MCA, M.Phil.</Card.Title>
      <Card.Text>
      Head(i/c) & Assistant Professor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A/TS/608</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={I3} />
    <Card.Body>
      <Card.Title>Mrs.A.SankarGomathi, M.Sc., Ph.D</Card.Title>
      <Card.Text>
      Assistant Professor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A/TS/471</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={I4} />
    <Card.Body>
      <Card.Title>Mr.S.Muthukumar, MCA, M.Phil., Ph.D</Card.Title>
      <Card.Text>
      Assistant  Professor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A/TS/680</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={I4} />
    <Card.Body>
      <Card.Title>Mr.S.Viswanathan, MCA., Ph.D</Card.Title>
      <Card.Text>
      Assistant Professor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A/TS/710</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={I4} />
    <Card.Body>
      <Card.Title>Ms.S.Kavitha, M.Sc.,</Card.Title>
      <Card.Text>
      Assistant Professor
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">A/TS/730</small>
    </Card.Footer>
  </Card>
</CardGroup>

        )
    }
}
export default Faculty;