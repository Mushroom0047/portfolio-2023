import { Carousel, Col, Row } from "react-bootstrap"
import ProjectCarousel from "./ProjectCarousel"
import {codeProjects} from "../projectsList"


const ProjectCode = () => {
    const listadoCodes = codeProjects.map(({title,desc,urlImg,link}, index) => {
        return(
            <Carousel.Item key={title}>
                <ProjectCarousel 
                    image={urlImg}
                    title={title}
                    desc={desc}
                    link={link}                    
                />
            </Carousel.Item>
            )});

  return (
    <Row  className="my-5">
        <Col md={8} xs={{order: 2}}>
            <Carousel pause="hover">
                {listadoCodes}
            </Carousel>
      
        </Col>
        <Col md={4} xs={{order: 1}}>
            <h3>Códigos desarrollados</h3>
            <p>
           He desarrollado una serie de códigos personalizados que han enriquecido la funcionalidad y la experiencia del usuario en sitios web.
            </p>
        </Col>
    </Row>
  )
}

export default ProjectCode