import { Carousel, Col, Row } from "react-bootstrap"
import ProjectCarousel from "./ProjectCarousel"
import {WordPressProjects} from "../projectsList"


const ProjectWordpress = () => {
    const listadoWordpress = WordPressProjects.map(({title,desc,urlImg,link}, index) => {
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
    <Row className="my-5">
        <Col md={4}>
            <h3>Wordpress | Shopify</h3>
            <p>
            Mi experiencia abarca proyectos variados, donde he contribuido con mi pasión por el desarrollo web y mi habilidad para transformar ideas en sitios web funcionales y atractivos. 
            </p>
        </Col>
        <Col md={8}>
            <Carousel pause="hover">
                {listadoWordpress}
            </Carousel>
      
        </Col>
    </Row>
  )
}

export default ProjectWordpress