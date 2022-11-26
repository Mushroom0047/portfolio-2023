import { ProgressBar } from "react-bootstrap"
import './skills.css'

export const Skills = ({titulo, percentage}) => {
  return (
    <>        
        <p>{titulo}</p>
        <ProgressBar now={percentage}/>
        <hr />
    </>
  )
}
