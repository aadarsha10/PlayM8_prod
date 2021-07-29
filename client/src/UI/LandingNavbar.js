import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.png'
import '../UI/Landing/landing.css'

export default function LandingNavbar() {
  return (
    <div>

      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <div className="mr-auto"><Image src={logo} alt="logo" height="150px" width="150px" />
        </div> */}
        <div className="col-md" id="landing-home"><Nav className="mr-auto">
          <Nav className="mr-auto">
            <Nav.Link className="ml-20x nav-main">PlayM8</Nav.Link>
          </Nav>
        </Nav></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <div className="flex flex-right">
            <Form inline className="flex flex-right">
              <div className=" flex flex-right"><Button variant="success"><Link className="landingNav-button-login" to="../organizer/login">Organizer Login</Link></Button>&nbsp;
                <Button variant="success"><Link className="landingNav-button-login" to="../player/login">Player Login</Link></Button>&nbsp;
              </div>
              <div className="flex flex-center"><Button variant="success"><Link className="landingNav-button-register" to="../organizer/register">Organizer Register</Link></Button>
              </div>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}
