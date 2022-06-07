import {Modal,Button,Form} from 'react-bootstrap'
import { Fragment, useState } from 'react';

function Logintype() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <Fragment>
      <><center>
        <Button className='login-btn' variant="primary" onClick={handleShow}>
         Teacher Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Teacher Login Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
        <Form className="form-r">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Register NO</Form.Label>
    <Form.Control type="email" placeholder="A11UIT00" />
    <Form.Text className="text-muted">
      We'll never share your ID with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter Your Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
        </center>
      </>
            <div><center>
            <Button className='login-btn' variant="primary" onClick={handleShow}>
             Student Login
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Student Login Login Page</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div>
        <Form className="form-r">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Register NO</Form.Label>
    <Form.Control type="email" placeholder="A11UIT00" />
    <Form.Text className="text-muted">
      We'll never share your ID with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter Your Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
            </center>
          </div>
          </Fragment>
      
    );
  }
  
export default Logintype;