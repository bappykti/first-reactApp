const todoTitle = "Call family";
const todoDesc = "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing";
const date = new Date();
const dateNumber = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card(){
  return <div className="card">
            <h4 className="cardTitle">{todoTitle}</h4>
            <p className="cardDesc">{todoDesc}</p>
            <p className='cardFooter'>{dateNumber + " " + monthName + " " + yearName}</p> 
          </div>
}

export default Card;