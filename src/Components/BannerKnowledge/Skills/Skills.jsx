
export const Skills = ({titulo, img}) => {
  const URL_IMG = 'https://img.icons8.com/color/96/000000/';
  return (     
        <div className="d-flex flex-column align-items-center p-2">
          <img 
            src={`${URL_IMG}${img}`}
            width='64'
            height='64'
            alt={titulo}
          />
          <h3 className="">{`${titulo}`}</h3>
        </div>        
  )
}
