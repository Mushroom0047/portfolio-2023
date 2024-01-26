import { Slide } from 'react-awesome-reveal';
import './floatContact.css';

export const FloatContact = () => {
  return (
    <div className='div__fixed'>
      <Slide direction='left'>
      <div className='div__contact '>
        <a href="mailto:hectorvaldesm47@gmail.com" target="_blank">hectorvaldesm47@gmail.com</a>
      </div>
      </Slide>

      <Slide direction='up'>
      <div className='div__painted'>
        <hr/>
        <p className='text-center'>2024 Héctor Valdés M 🍄</p>
        <div className='js-pride-month-gradient' sm={12} md={12} lg={12}></div>
      </div>
      </Slide>
    </div>
  )
}
