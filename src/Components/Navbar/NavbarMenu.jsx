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
        <Nav className="d-flex flex-row">
          <Nav.Link className='px-3 text-light' href="#home">Home</Nav.Link>
          <Nav.Link className='px-3 text-light' href="#features">Proyectos</Nav.Link>
          <Nav.Link className='px-3 text-light' href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar> 
  </>
  )
}

export default NavbarMenu