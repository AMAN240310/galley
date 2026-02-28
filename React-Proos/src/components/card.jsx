import React from 'react'

const card = (props) => {
    
    console.log(props);
  return (
    <div>
       <div className="card">
        <img src={ props.uimg} alt="" />
        <h2>{props.user}, {props.age}</h2>
        <p>{props.content}.</p>
        <button>View Details</button>
       </div>
    </div>
  )
}

export default card

