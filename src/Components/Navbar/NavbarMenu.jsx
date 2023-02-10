import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '/src/assets/Logo-Mushroom-home.png'
import './navbarMenu.css'


const NavbarMenu = () => {
  return (
    <>
      <Navbar className='menu' expand="lg" sticky="top">
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
        <Nav className="d-flex flex-row link__menu">
          <Nav.Link className='px-3' href="#about">Sobre mí</Nav.Link>
          <Nav.Link className='px-3' href="#skills">Habilidades</Nav.Link>
          <Nav.Link className='px-3' href="#experience">Experiencia</Nav.Link>
          <Nav.Link className='px-3' href="#projects">Proyectos</Nav.Link>
          <Nav.Link className='px-3' href="#contact">Hablemos</Nav.Link>
        </Nav>
      </Container>
    </Navbar> 
  </>
  )
}

export default NavbarMenu