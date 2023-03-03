import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '/assets/Logo-Mushroom-home.png'
import './navbarMenu.css'


const NavbarMenu = () => {
  return (
    <>
      <Navbar className='menu' expand="lg" sticky="top" collapseOnSelect >
      <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navMenu" />
      <Navbar.Collapse id="navMenu">
        <Nav className="link__menu me-auto my-2 my-lg-0" navMenu>
          <Nav.Link className='px-3' href="#about">Sobre mí</Nav.Link>
          <Nav.Link className='px-3' href="#skills">Habilidades</Nav.Link>
          <Nav.Link className='px-3' href="#experience">Experiencia</Nav.Link>
          <Nav.Link className='px-3' href="#projects">Proyectos</Nav.Link>
          <Nav.Link className='px-3' href="#contact">Hablemos</Nav.Link>
        </Nav>      
      </Navbar.Collapse>  
      </Container>
    </Navbar> 
  </>
  )
}

export default NavbarMenu