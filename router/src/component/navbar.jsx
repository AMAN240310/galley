import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div style={{color:'black'}}>
       
        <h3>aman Kum</h3> 
     <div className='nav' style={{color:'black' }}>
   
        
        <Link to ='/home'  >Home </Link>
        <Link to = '/login'>Login</Link>
        <Linl to='/contact'>Contact </Linl>

         </div>    
    </div>
  )
}

export default navbar
 