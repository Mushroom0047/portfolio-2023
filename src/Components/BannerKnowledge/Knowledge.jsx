import { Col, Fade, Row } from "react-bootstrap"
import { Skills } from "./Skills/Skills"
import Experience from "./Experience/Experience"

const Knowledge = () => {
    const experience = [
        {
            company: "Agencia de marketing GrupoQs",
            desc: ['Diseño y planificación de desarrollo web con enfoque en la experiencia del usuario','Maquetación páginas en WordPress utilizando herramientas como Elementor y WpBackery','Desarrollo tiendas Online con Woocommerce','Desarrollos personalizados con JetEngine y Custom Fields'],
            year: "20220401" 
        },
        {
            company: "Agencia de marketing DesignSEO",
            desc: ['Planificación de desarrollo web','Maquetación páginas en WordPress con Elementor y Divi','Desarrollo tiendas Online con Woocommerce'],
            year: "20210501"
        }
]
  return (
    <Row>
          <Col xs='12' sm='12' md='6' lg='6' className="p-5 mb-5">
            <h2 className="mt-5" id="skills">Habilidades</h2>
            <hr/>
            <div className="d-flex flex-wrap">
                <Skills titulo="JAVASCRIPT" img={'javascript--v1.png'}/>
                <Skills titulo="CSS-SASS" img={'sass.png'}/>
                <Skills titulo="HTML" img={'html-5--v1.png'}/>
                <Skills titulo="GMS 2" img={'game-maker.png'}/>
                <Skills titulo="WORDPRESS" img={'wordpress.png'}/>
                <Skills titulo="SHOPIFY" img={'shopify.png'}/>    
                <Skills titulo="MYSQL" img={'mysql-logo.png'}/>
                <Skills titulo="REACT" img={'react-native.png'}/>          
                <Skills titulo="JAVA" img={'java-coffee-cup-logo--v1.png'}/>
                <Skills titulo="C#" img={'c-sharp-logo.png'}/>
            </div>
          </Col>
          <Col xs='12' sm='12' md='6' lg='6' className="p-5 mb-5">
            <h2 className="mt-5" id='experience'>Experiencia</h2>
            <hr />
            <Experience
              year = {experience[0].year} 
              company = {experience[0].company}
              excerpt= {experience[0].desc}
              />
            <Experience
              year = {experience[1].year}
              company = {experience[1].company}
              excerpt= {experience[1].desc}
              />                                           
          </Col>
        </Row> 
  )
}

export default Knowledge