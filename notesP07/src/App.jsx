import React, { useState } from 'react'

const App = () => {
const [title,settitle] = useState('')
const [details,setdetails] = useState('')
const [tasks,settask] = useState([])
 
  const submitHandle = (e)=>{
    e.preventDefault()
    console.log(title,details)
     
    const copytask = [...tasks];
    copytask.push({title, details})
    // console.log(copytask)
    settask(copytask)

//    console.log(copytask)

    settitle('')
    setdetails('')
  } 

  const nodedelete = (idx)=>{
    const copytask = [...tasks]
    copytask.splice(idx,1)
    settask(copytask)

  }
 
  return (
    <div className=' py-5 bg-black text-amber-50 flex justify-between items-center px-4 h-screen w-full gap-2  flex-row '>

      <form onSubmit={(e)=>{
          submitHandle(e);

      }} className='flex flex-col gap-5 items-center justify-between border-black w-full '>
      <div className=' flex flex-col items-center justify-center gap-5 w-80 mt-6'>

           <input  type="text" placeholder='Enter' className='px-4 h-10 py-2 border-2 rounded-xl w-full' 
            value={title} 
            onChange={(e)=>{
              settitle(e.target.value)
            }}

           />


           <textarea
           value={details}
           onChange={(e)=>{
            setdetails(e.target.value)
           }} 
           className='px-3 py-3 rounded-xl border-2 h-30 w-full' name="" id="" placeholder='Enter Details'></textarea>


           <button className='bg-blue-400 text-black px-3 w-full py-2 rounded-xl active:bg-blue-900 actice:scale-9/5'> Add Notes</button>
      </div>

      </form>
 {/* notes section output */}
     <div className=' flex flex-wrap w-full border-l-2 p-10'>
       
         <h1 className='text-4xl font-bold '>Recent Tasks</h1>      
        <div className='flex flex-wrap gap-5  overflow-auto  w-full h-100 mt-6 p-2 justify-between' >
           {tasks.map(function(elem,idx ){
          
           return <div key={idx} className="relative p-5 h-53 w-50 rounded-xl bg-amber-100 bg-cover  bg-[url('https://www.freepik.com/free-photos-vectors/note-background')] flex justify-between flex-col "> 
            <div>
              <h3 className='leading-tight font-bold text-xl text-amber-950'>{elem.title} </h3>
              <p className='leading-tight font-medium text-gray-700'>{elem.details}</p>      
            </div>
   
           <button onClick={()=>{
              nodedelete(idx)
           }} className= 'rounded-sm cursor-pointer w-full  bg-red-900 text-amber-100 '>delete note</button>
           </div>
           })}
         
       </div>   
     </div>


    </div>
  )
}

export default App

