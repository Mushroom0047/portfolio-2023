import { Slide } from 'react-awesome-reveal';
import './floatContact.css';

export const FloatContact = () => {
  return (
    <div className='div__fixed'>
      <Slide direction='left'>
      <div className='div__contact '>
        <a href="mailto:contacto@hectorvaldesm.com" target="_blank">contacto@hectorvaldesm.com</a>
      </div>
      </Slide>

      <Slide direction='up'>
      <div className='div__painted'>
        <hr/>
        <p className='text-center'>2023 Héctor Valdés M 🍄</p>
        <div className='js-pride-month-gradient' sm={12} md={12} lg={12}></div>
      </div>
      </Slide>
    </div>
  )
}
