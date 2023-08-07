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
            he tenido la oportunidad de desarrollar y participar en la creación de diversas páginas web, tanto de manera independiente como colaborando con agencias de marketing. Mi experiencia abarca proyectos variados, donde he contribuido con mi pasión por el desarrollo web y mi habilidad para transformar ideas en sitios web funcionales y atractivos. Cada colaboración me ha brindado la oportunidad de perfeccionar mis habilidades y entregar soluciones que superen las expectativas de mis clientes.
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