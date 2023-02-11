import './projects.css';
import { Col, Container, Row } from 'react-bootstrap';

export const Projects = ({nameProject}) => {

const projectList = nameProject.map(({title, desc, urlImg, link, icon}, index) => {
    let icons =  icon.map((e, index) => {
    return (<img 
      key={index}
      src={e}
      width='24px'
      height='auto'
    />)});
  
  
  return (<Col className='div__projects_single m-1' key={index} xs={12} sm={12} md={4} lg={3}>    
      <img 
        src={urlImg}
        alt={title}
        width='100%'
        height='auto'
      /> 
      <div className='p-3'>
        <h3 className='py-3'>{title}</h3>
        <p>{desc}</p>
        <div className='div__icons__projects'>
          { icons }
        </div>
        <a href={link} target='_blank'>ver más</a>
      </div>
   </Col>)         
});


  return (
    <Container fluid={true}>    
      <Row >
        {projectList}              
      </Row>  
    </Container>
  )
}
