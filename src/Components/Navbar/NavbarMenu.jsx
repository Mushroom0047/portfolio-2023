import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '/src/assets/react.svg'
import './navbarMenu.css'


const NavbarMenu = () => {
  return (
    <>
      <Navbar className='menu' expand="lg" sticky="top">
      <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
        <Nav className="d-flex flex-row">
          <Nav.Link className='px-3 text-light' href="#home">Home</Nav.Link>
          <Nav.Link className='px-3 text-light' href="#features">Features</Nav.Link>
          <Nav.Link className='px-3 text-light' href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar> 
  </>
  )
}

export default NavbarMenu