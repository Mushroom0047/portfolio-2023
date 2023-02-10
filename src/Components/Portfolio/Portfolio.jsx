import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import { Projects } from "../Projects/Projects"
import './portfolio.css'

import {reactProjects, wordpressProjects, gamesProjects} from '../Projects/projectsList.js';

const Portfolio = () => {

  return (
    <Container fluid="lg" id="projects">
      <Row>
        <Col sm={12} className="p-5">
        <h2 className="mt-5">Proyectos</h2>
        <hr/>
            <Tabs
          defaultActiveKey="react"
          id="projectsTabs" 
          className="portfolio__tabs"
          justify         
          >
            <Tab eventKey="react" title="React" >
              <Projects nameProject={reactProjects}/>
            </Tab>
            <Tab eventKey="wordpress" title="WordPress" className="portfolio__tabs">
            <Projects nameProject={wordpressProjects}/>
            </Tab>
            <Tab eventKey="games" title="Games" className="portfolio__tabs">
            <Projects nameProject={gamesProjects}/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio