import { Col, Container, Row } from "react-bootstrap"
import { Skills } from "../Skills/Skills"
import './banner.css'

// import { wordpress } from "@fortawesome/free-brands-svg-icons";

export const Banner = () => {
  return (
    <Container fluid="lg" className="container__banner">
        <Row>
            <Col sm={12} md={6} className="p-5 col__description">
                <h1 className="name">HÉCTOR VALDÉS M</h1>
                <p className="description">
                  ¡Hola! Me llamo Héctor Valdés y soy Analista programador egresado de Inacap. 
                  Soy una persona organizada, dedicada y responsable, 
                  con muchas metas cumplidas y muchas más por cumplir.<br /><br/>
                  Me considero una persona amigable, comprensiva, creativa, 
                  y creo que para todo hay tiempo. <br/><br/>
                  Mi Hobby son los videojuegos independientes, 
                  también me encanta dibujar y tocar guitarra eléctrica.
                  </p>

                  <h2 className="mt-5">Skills</h2>
                  <Skills titulo="GAME MAKER STUDIO 2" percentage={80} img={'game-maker.png'}/>
                  <Skills titulo="WORDPRESS" percentage={75} img={'wordpress.png'}/>
                  <Skills titulo="JAVASCRIPT" percentage={70} img={'javascript--v1.png'}/>
                  <Skills titulo="CSS-SASS" percentage={70} img={'sass.png'}/>
                  <Skills titulo="HTML" percentage={70} img={'html-5--v1.png'}/>
                  <Skills titulo="SHOPIFY" percentage={50} img={'shopify.png'}/>    
                  <Skills titulo="MYSQL" percentage={45} img={'mysql-logo.png'}/>
                  <Skills titulo="REACT" percentage={30} img={'react-native.png'}/>          
                  <Skills titulo="JAVA" percentage={20} img={'java-coffee-cup-logo--v1.png'}/>
                  <Skills titulo="C#" percentage={10} img={'c-sharp-logo.png'}/>

                  <h2 className="mt-5">Experiencia</h2>
                  <hr />
                  <p>Actual - GrupoQs</p>
                  <p>2021 - DesignSeo</p>
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
