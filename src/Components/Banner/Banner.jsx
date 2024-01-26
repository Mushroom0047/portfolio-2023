import { Col, Image, Row } from "react-bootstrap"
import ImgProfile from '/assets/Foto de mi.webp';
import './banner.css';


export const Banner = () => {
  return (
        <Row id="about">        
            <Col sm={12} md={6} className="p-5 mb-5">
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
            </Col>          
            <Col className="col__img__profile text-center">
              <Image src={ImgProfile} roundedCircle/>
            </Col>
        </Row>                     
  )
}
