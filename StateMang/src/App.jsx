import React from 'react'
import { useState } from 'react';
//import { useSyncExternalStore } from 'react'
//import { useState } from 'react'

const App = () => {
//   const [num, setNum] = useState(10);
//   const btnclcik =  ()=>{
//     setNum(prev =>( prev +1))
//     // batch update 
//         setNum(prev =>( prev +1))
//             setNum(prev =>( prev +1))

    
//   }

 // let a = 20;
// const [a,setA] = useState(20); 
// const [usern,setUsername] = useState('aman')

// const [users,setUser] = useState([100,2,2,5,3,4,4,4]);

// function changeA(){

//   setA(a+1)
// }
// function changeAby1(){

//   setA(a-1)
// }

// function changeAby4(){

//   setA(a+5)
// }

// Two way binding
 const [title, settitle] = useState('')
 const sunmitHandle = (e) => {
 
    e.preventDefault();
      console.log("fomr submit by", title)
      settitle('')
 } 

  return (
    <div>
      {/* App
      <h1>value of a is {a} </h1>
      <h1>{usern}</h1>
      <h1>{users}</h1>

      <button onClick={changeA}> Change </button>
      <button onClick={changeAby1}>Increatse</button>
     
      <button onClick={changeAby4}>increase by 5</button> */}
{/* 

    <button onClick={btnclcik}> clck {num } </button> */}
     {/* form handling */}
     
     <form onSubmit={(e)=>{
      sunmitHandle(e)
     }}>
      <input type="text" placeholder='Enter something' value={title} onChange={(el) => {
          settitle(el.target.value)
      }} />
      <button > submit</button>
     </form>

    </div>
  )
}

export default App

