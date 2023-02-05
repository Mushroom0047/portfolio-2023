import './projects.css';

export const Projects = ({nameProject}) => {

const projectList = nameProject.map(({title, desc, urlImg, link}, index) => {
   return (<div className='div__projects_single' key={index}>
    { <img 
    src={urlImg}
    alt={title}
    width='100%'
    height='auto'
    />}
      <div className='p-3'>
        <h3 className='py-3'>{title}</h3>
        <p>{desc}</p>
        <a href={link} taget='_blank'>ver más</a>
      </div>
   </div>)         
})
  return (
    <div className="div__projects">      
        {projectList}      
    </div>
  )
}
