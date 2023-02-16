import { Col, Container, Row } from 'react-bootstrap'
import LogoWhite from '/src/assets/logo_white.png'

export const Footer = () => {
  return (
    <Container fluid className='footer__bg'>
        <Row>
          <Col className="text-center" sm={12} md={12} lg={12}>
            <hr/>
            <img 
              src={LogoWhite}
              width="400px"
              height="auto"
              alt="Logo blanco hectorvaldes"
            />
            <hr/>
            <p>2023 Héctor Valdés M 🍄</p>
          </Col>
          <Col className='js-pride-month-gradient' sm={12} md={12} lg={12}></Col>
        </Row>
    </Container>
  )
}
