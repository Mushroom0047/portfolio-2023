import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Container fluid className='footer__bg'>
        <Row>
          <Col className="text-center">
            <p>2023 Héctor Valdés M 🍄</p>
          </Col>
        </Row>
    </Container>
  )
}
