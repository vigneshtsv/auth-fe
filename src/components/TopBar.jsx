import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import useLogout from '../hooks/useLogout';

function TopBar() {
  let location = useLocation()
  let logout = useLogout()
  const TabName = {
    "/admin":"Admin Dashboard",
    "/user":"User Dashboard"
  }
  return<>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>{TabName[location.pathname]}</Navbar.Brand>
        <Button variant="danger" onClick={logout}>Logout</Button>
      </Container>
    </Navbar>
  </> 
}

export default TopBar