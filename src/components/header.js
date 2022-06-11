import {Link} from 'react-router-dom';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import React, {Component} from 'react';
import '../App.css';
import { AiFillHome} from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {RiGalleryFill} from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import { ImEnter } from 'react-icons/im';
class  Header extends Component{
     render()
     {
         return(
            <div className="header">
                <h1>SRI KALISWARI COLLEGE(Autonomous),Sivakasi</h1>
                <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className="brand">Welcome</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          
        <Nav.Link as={Link} to="/" className="dropdown"><AiFillHome className='icon'/>Home</Nav.Link>
        <Nav.Link as={Link} to="/faculty" className="dropdown"><IoIosPeople className='icon-m'/>Faculty</Nav.Link>
        <Nav.Link as={Link} to="/gallery" className="dropdown"><RiGalleryFill className='icon-m'/>Gallery</Nav.Link>
        <Nav.Link as={Link} to="/department" className="dropdown"><MdOutlineSchool className="icon-m"/>Department Activities</Nav.Link>

        <NavDropdown title="Achievements" id="basic-nav-dropdown" className="dropdown">

          <NavDropdown.Item as={Link} to="/staff" className="dropdown-a"><GiAchievement className='icon'/>Staff Achievement</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/student" className="dropdown-a"><GiAchievement className='icon'/>Students Achievement</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/register" className="dropdown"><AiFillHome className='icon'/>Register</Nav.Link>
        <Nav.Link as={Link} to="/about" className="dropdown"><BsBook className='icon-m'/>About</Nav.Link>
        <Nav.Link as={Link} to="/login" className="dropdown"><ImEnter className='icon-m'/>Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
         );
     }

 }
export default Header;
