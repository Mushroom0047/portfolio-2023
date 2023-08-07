import {Carousel } from "react-bootstrap"


const ProjectCarousel = ({image, title, desc, link}) => {
  return (
    <>
        <img
          className="d-block w-100"
          src={image}
          alt={title+'Hector Valdes M - Developer'}
        />
        <Carousel.Caption className="caption__carousel">
          <h3>{title}</h3>
          <p>{desc}</p>
          <a className="link__carousel" href={link}>Ver Más</a>
        </Carousel.Caption>
      </>
  )
}

export default ProjectCarousel