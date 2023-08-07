import { Carousel, Col, Row } from "react-bootstrap"
import ProjectCarousel from "./ProjectCarousel"
import {gamesProjects} from "../projectsList"


const ProjectGames = () => {
    const listadoGames = gamesProjects.map(({title,desc,urlImg,link}, index) => {
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
        <Col md={4}>
            <h3>Videojuegos desarrollados</h3>
            <p>
            Mi verdadera pasión son los videojuegos indies, y gracias a ella, he creado varios juegos que me han permitido desarrollar y fortalecer mis habilidades en programación. A través de estas experiencias, he aprendido valiosas lecciones y adquirido un profundo conocimiento en el mundo del desarrollo de videojuegos. Cada proyecto ha sido una oportunidad única para combinar mi creatividad con mis habilidades técnicas y así crear experiencias únicas y envolventes para los jugadores.
            </p>
        </Col>
        <Col md={8}>
            <Carousel pause="hover">
                {listadoGames}
            </Carousel>
      
        </Col>
    </Row>
  )
}

export default ProjectGames