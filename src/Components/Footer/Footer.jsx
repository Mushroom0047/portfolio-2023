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
                <br/>
                <h5 className='pt-3'>Made with React</h5>
                <img width="50" height="50" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
            <hr/>            
          </Col>        
        </Row>
    </Container>
  )
}
