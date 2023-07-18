import { Button, Col, Container, Row } from "react-bootstrap"
import InstagramSVG from '/assets/61-camera-outline.webp';
import LinkedinSVG from '/assets/705-man-style-3-outline.webp';
import GitSVG from '/assets/1325-code-fork-outline.webp';
import EmailSVG from '/assets/145-envelope-mail-notification-open-morph-outline.webp';
import IconContact from "./IconContact";
import './contact.css';
import { Fade, Slide } from "react-awesome-reveal";

export const Contact = () => {
    const urlLinks = [
        'https://www.instagram.com/mushroom.dev/?hl=es-la',
        'https://github.com/Mushroom0047',
        'https://www.linkedin.com/in/h%C3%A9ctor-vald%C3%A9s-m',
        'mailto:contacto@hectorvaldesm.com?subject=Contacto%20web',
        'https://meetings.hubspot.com/hector-valdes'
    ];
 
  return (
    <Container fluid="lg">
        <Row>
            <Col className="px-5">
                <Slide triggerOnce>
                <h2 className="mt-5" id='contact'>Hablemos</h2>
                </Slide>
                <hr />
            </Col>
            <Fade direction="up" triggerOnce>
            <Row className="row__icons">                
                <IconContact urlLink={urlLinks[1]} icon={GitSVG} nombre='Github'/>
                <IconContact urlLink={urlLinks[2]} icon={LinkedinSVG} nombre='LinkedIn'/>
                <IconContact urlLink={urlLinks[3]} icon={EmailSVG} nombre='Email'/>            
                <Col className="d-flex mt-5 justify-content-center" sm={12}>
                    <Button className="btn btn-warning p-2" target="_blank" href={urlLinks[4]}>Agendar reunión en Hubspot</Button>
                </Col>
            </Row>
            </Fade>
        </Row>        
    </Container>
  )
}
