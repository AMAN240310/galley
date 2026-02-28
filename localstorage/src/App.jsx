import React, { useEffect, useState } from 'react'

const App = () => {
  const [num,setnum] = useState(0)
  const [num1,setnum1] = useState(100)
 useEffect(function(){
      console.log('use effect is running ')
 },[num])

  return (
    <div>
      <h1 style={{color : 'white'}}>{num}</h1>
        <h1 style={{color : 'white'}}>{num1}</h1>
      <button onMouseEnter={()=>{
       setnum(num+1);
      
      }}
       onMouseLeave={()=>{
         setnum1(num1+10)
       }}>
         num
      </button>
      
    </div>
  )
}

export  default App
