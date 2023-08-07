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
    <Row>
        <Col md={4}>
            <h3>Wordpress | Shopify</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit et sapien eget a urna pharetra, litora class dictumst potenti torquent senectus mauris luctus gravida tincidunt euismod molestie. Aptent senectus integer montes rutrum nullam venenatis orci accumsan, est porta pharetra hac massa a habitant taciti, posuere nisi sodales lectus libero luctus scelerisque.
            </p>
        </Col>
        <Col md={8}>
            <Carousel>
                {listadoGames}
            </Carousel>
      
        </Col>
    </Row>
  )
}

export default ProjectGames