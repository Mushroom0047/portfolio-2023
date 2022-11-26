import { Col, Container, Row } from "react-bootstrap"
import { Skills } from "../Skills/Skills"
import './banner.css'

export const Banner = () => {
  return (
    <Container fluid className="container__banner">
        <Row>
            <Col sm={12} md={6} className="p-5 col__description">
                <h1 className="name">HÉCTOR VALDÉS M</h1>
                <p className="description">
                  ¡Hola! Me llamo Héctor Valdés y soy Analista programador egresado de Inacap. 
                  Soy una persona organizada, dedicada y responsable, 
                  con muchas metas cumplidas y muchas más por cumplir. 
                  Me considero una persona amigable, comprensiva, creativa, 
                  y creo que para todo hay tiempo. Mi Hobby son los videojuegos independientes, 
                  también me encanta dibujar y tocar guitarra eléctrica.
                  </p>

                  <h2>Skills</h2>
                  <Skills titulo="GAME MAKER STUDIO 2" percentage={80}/>
                  <Skills titulo="WORDPRESS" percentage={75}/>
                  <Skills titulo="JAVASCRIPT" percentage={70}/>
                  <Skills titulo="CSS" percentage={70}/>
                  <Skills titulo="HTML" percentage={70}/>
                  <Skills titulo="SHOPIFY" percentage={50}/>
                  <Skills titulo="SASS" percentage={50}/>
                  <Skills titulo="MYSQL" percentage={45}/>
                  <Skills titulo="GIT" percentage={45}/>
                  <Skills titulo="ANDROID" percentage={30}/>
                  <Skills titulo="REACT" percentage={30}/>
                  <Skills titulo="JAVA" percentage={20}/>
                  <Skills titulo="C#" percentage={10}/>

            </Col>
            <Col sm={12} md={6} className="col__image">
                <img                 
                className="image__profile"
                src='https://via.placeholder.com/1080'
                width={100}
                height={100}
                />
            </Col>
        </Row>
        
    </Container>
  )
}
