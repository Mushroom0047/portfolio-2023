import moment from "moment/moment";
import 'moment/locale/es';
moment.locale('es')

const Experience = ({company, year, excerpt}) => {
    const listItems = excerpt.map((li, index) => {
      return <li key={index}>{li}</li>
    });
    console.log(listItems)
    return (
    <div>
        <p>{moment(year, "YYYYMMDD").fromNow()} | {company}</p>
        <ul>{listItems}</ul>
        <hr/>
    </div>
  )
}

export default Experience