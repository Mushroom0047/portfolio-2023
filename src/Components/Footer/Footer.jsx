import { Col, Container, Row } from 'react-bootstrap'
import LogoWhite from '/assets/logo_white.png';
import './footer.css';

export const Footer = () => {
  return (
    <Container fluid className='footer__bg'>
        <Row>
          <Col className="text-center" xs ={12} sm={12} md={12} lg={12}>
            <hr/>            
                <a href="#about">                  
                    <img
                      className='img__footer'                   
                      src={LogoWhite}
                      width="400px"
                      height="auto"
                      alt="Logo blanco hectorvaldes"
                    />
                </a>
            <hr/>            
          </Col>        
        </Row>
    </Container>
  )
}
