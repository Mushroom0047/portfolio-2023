import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
  return (
    <Container fluid>
        <Row className="">
            <Col className="bg-warning">
                <h1 className="hola">HOlas</h1>
            </Col>
            <Col className="bg-danger"></Col>
        </Row>
        
    </Container>
  )
}
