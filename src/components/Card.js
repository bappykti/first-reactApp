const date = new Date();
const dateNumber = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();
/*
------Below lines are for props--------
function Card(props){
  return <div className="card">
            <h4 className="cardTitle">{props.titleText}</h4>
            <p className="cardDesc">{props.descText}</p>
            <p className='cardFooter'>{dateNumber + " " + monthName + " " + yearName}</p> 
          </div>
}
*/
//------Below lines are for destructuring--------
function Card(props){
  const {titleText, descText} = props;
  return <div className="card">
            <h4 className="cardTitle">{titleText}</h4>
            <p className="cardDesc">{descText}</p>
            <p className='cardFooter'>{dateNumber + " " + monthName + " " + yearName}</p> 
          </div>
}
export default Card;