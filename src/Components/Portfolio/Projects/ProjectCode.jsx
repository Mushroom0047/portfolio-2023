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
        <Col md={8}>
            <Carousel pause="hover">
                {listadoCodes}
            </Carousel>
      
        </Col>
        <Col md={4}>
            <h3>Códigos desarrollados</h3>
            <p>
            En mi trayectoria profesional, he tenido el privilegio de trabajar en diversos proyectos para clientes, donde he demostrado mi experiencia en la integración de JavaScript en WordPress. He creado y desarrollado una serie de códigos personalizados que han enriquecido la funcionalidad y la experiencia del usuario en sitios web basados en WordPress. Mi pasión por la programación y mi compromiso con la excelencia me han impulsado a ofrecer soluciones creativas y efectivas para cada proyecto que emprendo.
            </p>
        </Col>
    </Row>
  )
}

export default ProjectCode