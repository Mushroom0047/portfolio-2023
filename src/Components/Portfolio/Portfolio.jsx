import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import { Projects } from "../Projects/Projects"
import './portfolio.css'

const Portfolio = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col sm={12} className="p-5">
            <Tabs
          defaultActiveKey="react"
          id="projectsTabs" 
          className="portfolio__tabs"
          justify         
          >
            <Tab eventKey="react" title="React" >
              <Projects />
            </Tab>
            <Tab eventKey="wordpress" title="WordPress" className="portfolio__tabs">
            <Projects />
            </Tab>
            <Tab eventKey="games" title="Games" className="portfolio__tabs">
            <Projects />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio