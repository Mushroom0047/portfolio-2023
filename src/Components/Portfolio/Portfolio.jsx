import { Col, Row } from "react-bootstrap"
import './portfolio.css'
import ProjectWordpress from "./Projects/ProjectWordpress";
import ProjectCode from "./Projects/ProjectCode";
import ProjectGames from "./Projects/ProjectGames";

const Portfolio = () => {

  return (
    <>
      <Row>
        <Col sm={12} className="p-5">
          <h2 className="mt-5">Proyectos</h2>
          <hr/>
          <ProjectWordpress />
          <br/>
          <ProjectCode />
          <br />
          <ProjectGames />
        </Col>
      </Row>
      </>
  )
}

export default Portfolio