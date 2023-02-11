import { Col, Container, Row } from "react-bootstrap"
import { Skills } from "../Skills/Skills"
import Experience from "../Experience/Experience";
import ImgProfile from '../../assets/yo-webp.webp'
import './banner.css'

// import { wordpress } from "@fortawesome/free-brands-svg-icons";

export const Banner = () => {
  const expOne = ['Diseño y planificación de desarrollo web','Maquetación páginas en WordPress con Elementor y WpBackery','Desarrollo tiendas Online con Woocommerce','Desarrollos personalizados con JetEngine y Custom Fields'];
  const expTwo = ['Planificación de desarrollo web','Maquetación páginas en WordPress con Elementor y Divi','Desarrollo tiendas Online con Woocommerce'];
  return (
    <Container fluid="lg" className="container__banner" id="about">
        <Row>
            <Col sm={12} md={6} className="p-5 mb-5">
                <h1 className="name">HÉCTOR VALDÉS M</h1>
                <p className="description">
                  ¡Hola! Me llamo Héctor Valdés y soy Analista programador egresado de Inacap 
                  con experiencia en desarrollo web. 
                  Me especializo en JavaScript, HTML, CSS y en el frameworks React. 
                  También tengo experiencia en tecnologías de base de datos como MySQL, 
                  así como en herramientas de desarrollo como Git y GitHub. 
                  <br/> <br/>Estoy comprometido a crear productos digitales de calidad que 
                  sean fáciles de usar y ofrezcan la mejor experiencia para los 
                  usuarios. Siempre estoy aprendiendo nuevas tecnologías y me 
                  aseguro de estar al tanto de los últimos avances en el desarrollo 
                  web.
                  </p>

                  <h2 className="mt-5" id="skills">Skills</h2>
                  <hr/>
                  <Skills titulo="JAVASCRIPT" percentage={80} img={'javascript--v1.png'}/>
                  <Skills titulo="CSS-SASS" percentage={80} img={'sass.png'}/>
                  <Skills titulo="HTML" percentage={80} img={'html-5--v1.png'}/>
                  <Skills titulo="GAME MAKER STUDIO 2" percentage={80} img={'game-maker.png'}/>
                  <Skills titulo="WORDPRESS" percentage={75} img={'wordpress.png'}/>
                  <Skills titulo="SHOPIFY" percentage={50} img={'shopify.png'}/>    
                  <Skills titulo="MYSQL" percentage={45} img={'mysql-logo.png'}/>
                  <Skills titulo="REACT" percentage={30} img={'react-native.png'}/>          
                  <Skills titulo="JAVA" percentage={20} img={'java-coffee-cup-logo--v1.png'}/>
                  <Skills titulo="C#" percentage={10} img={'c-sharp-logo.png'}/>

                  <h2 className="mt-5" id='experience'>Experiencia</h2>
                  <hr />
                  <Experience
                    year = "20220401" 
                    company = "Agencia de marketing GrupoQs"
                    excerpt={expOne}
                  />
                  <Experience
                    year = "20210501" 
                    company = "Agencia de marketing DesignSEO"
                    excerpt={expTwo}
                  />                                           
            </Col>
            <Col className="text-end" sm={12} md={6} lg={6} >              
              <img
              className="img__profile"
              src={ImgProfile}
              width='80%'
              height='auto'
              alt='Imagen de perfil'
              />                                      
            </Col>
        </Row>              
    </Container>
  )
}
