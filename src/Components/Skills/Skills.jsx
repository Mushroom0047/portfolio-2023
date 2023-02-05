import { ProgressBar } from "react-bootstrap"
import './skills.css'



export const Skills = ({titulo, percentage, img}) => {
  const now = percentage;
  const URL_IMG = 'https://img.icons8.com/color/96/000000/';
  return (
    <>        
        <div className="d-flex align-items-center py-3">
          <img 
            src={`${URL_IMG}${img}`}
            width='32'
            height='32'
            alt={titulo}
          />
          <h3 className="px-3">{`${titulo} | ${now}%`}</h3>
        </div>        
        <ProgressBar now={percentage}/>        
    </>
  )
}
