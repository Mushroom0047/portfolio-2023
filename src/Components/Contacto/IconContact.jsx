import { Col } from "react-bootstrap";
import './contact.css';

const IconContact = ({urlLink, icon, nombre}) => {
  return (
    <Col className="d-flex justify-content-center div__icon p-2" xs ={4} sm={4} md={4} lg={4}>
        <a href={urlLink} target='_blank'>
            <img 
            src={icon}
            alt={nombre+' logo animado'}
            width='100px'
            height='auto'              
            />          
            <h4 className="text-center title__icon">{nombre}</h4>
        </a>
    </Col>            
  )
}

export default IconContact