import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '/assets/Logo-Mushroom-home.png'
import './navbarMenu.css'
import { Button } from 'react-bootstrap';
import CV from "/assets/CV Hector Valdes M v.04-2023.pdf";


const NavbarMenu = () => {
  return (
    <>
      <Navbar className='menu' expand="lg" sticky="top" collapseOnSelect >
      <Container fluid>
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navMenu" />
      <Navbar.Collapse id="navMenu">
        <Nav className="link__menu ms-auto my-2 my-lg-0 " navMenu>
          <Nav.Link className='px-3' href="#about">Sobre mí</Nav.Link>
          <Nav.Link className='px-3' href="#skills">Habilidades</Nav.Link>
          <Nav.Link className='px-3' href="#experience">Experiencia</Nav.Link>
          <Nav.Link className='px-3' href="#projects">Proyectos</Nav.Link>
          <Nav.Link className='px-3' href="#contact">Hablemos</Nav.Link>
        </Nav>     
        <Nav className='link__menu__res'>
          <Button className='btn btn-warning' href={CV} target="_blank">Curriculum</Button>
        </Nav> 
      </Navbar.Collapse>  
      </Container>
    </Navbar> 
  </>
  )
}

export default NavbarMenu