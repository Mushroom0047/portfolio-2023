import { Col, Row } from "react-bootstrap"
import ImgProfile from '/assets/yo-webp.webp';
import Image from 'react-bootstrap/Image';
import './banner.css';
import { Slide } from "react-awesome-reveal";

export const Banner = () => {
  return (
        <Row>        
            <Col sm={12} md={6} className="p-5 mb-5">
                <Slide cascade triggerOnce>
                  <p>¡Hola! Me llamo</p>
                <h1 className="name">HÉCTOR VALDÉS M</h1>                             
                <p className="description">
                  y soy Analista programador egresado de Inacap 
                  con experiencia en desarrollo web. 
                  Me especializo en <b>JavaScript, HTML, CSS</b> y en el <b>frameworks React</b>. 
                  También tengo experiencia en tecnologías de base de datos como <b>MySQL</b>, 
                  así como en herramientas de desarrollo como <b>Git y GitHub</b>. 
                  <br/> <br/>Estoy comprometido a crear productos digitales de calidad que 
                  sean fáciles de usar y ofrezcan la mejor experiencia para los 
                  usuarios. Siempre estoy aprendiendo nuevas tecnologías y me 
                  aseguro de estar al tanto de los últimos avances en el desarrollo 
                  web.
                  </p>
                </Slide>                   
            </Col>
            <Col className="text-center d-flex align-items-center" sm={12} md={6} lg={6} >              
              <Slide direction="right" triggerOnce className="col__img__profile">
                <Image
                src={ImgProfile}
                width='80%'
                height='auto'
                alt='Imagen de perfil'
                roundedCircle
                />                                      
              </Slide>
            </Col>
        </Row>                     
  )
}
