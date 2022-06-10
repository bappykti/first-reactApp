// Prop Types
import React from 'react';
import PropTypes from "prop-types";

console.log(PropTypes);

const User = (props) => {
  return (
    <div>
       <h3>{props.user.id}</h3>
       <h3>{props.user.name}</h3>
    </div>
  )
}
User.propTypes = {
    // userName : PropTypes.string,
    // userId : PropTypes.number,
    user : PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
    })
};

// User.defaultProps = {
//     userName : "Robot",
//     userId : 101144
// }

export default User;

