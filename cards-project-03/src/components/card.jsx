import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div>
          <div className="card">
              <div className="topcard">
                 <img src={props.imgsrc} alt="" />
                 <button> save book <Bookmark className="" /></button>
                </div>    

                <div className="centerdiv">
                       <h3>{props.brand} <span>{props.date}</span></h3>
                       <h2>{props.tag}</h2>
                       <div>
                        <h4>{props.type}</h4>
                        <h4>{props.level}</h4>
                       </div>
                </div>
                <div className="bottomdiv">
                      <div>
                         <h3>${props.pay}</h3>
                         <p>{props.location}</p>
                         <button>Apply here</button>
                        </div> 
                </div>
          </div>   

          
    </div>
  )
}

export default card        
