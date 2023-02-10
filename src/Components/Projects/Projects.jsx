import './projects.css';
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Col, Container, Row } from 'react-bootstrap';

export const Projects = ({nameProject}) => {
  const [toggler, settoggler] = useState(false)
  // const arrImages= [];

const projectList = nameProject.map(({title, desc, urlImg, link}, index) => {
  
  return (<Col className='div__projects_single m-1' key={index} sm={12} md={4} lg={3}>    
      <img 
        src={urlImg}
        alt={title}
        width='100%'
        height='auto'
        onClick={() => {settoggler(!toggler)}}
      /> 
      {/* <FsLightbox 
        toggler = {toggler}
        sources={arrImages}    
      />        */}
      <div className='p-3'>
        <h3 className='py-3'>{title}</h3>
        <p>{desc}</p>
        <a href={link} target='_blank'>ver más</a>
      </div>
   </Col>)         
})
  return (
    <Container fluid={true}>    
      <Row >
        {projectList}              
      </Row>  
    </Container>
  )
}
