import React from 'react'

const righcard = (props) => {
  return (
    <div className='h-full w-80 bg-amber-600 rounded-4xl overflow-hidden relative shrink-0'>
      <img  className = "h-full w-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" alt="" />

      <div className='absolute  h-full w-full top-0 left-0 p-6 flex flex-col  justify-between '>
         <h2 className='bg-white rounded-b-full h-10 w-8 flex justify-center items-center'>1</h2>
         <div className='gap-3'>
            <p className='text-white mb-13'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, atque!</p>
            <div className='gap-4'>
                <button className='bg-blue-400 text-white font-semibold px-4 py-2 rounded-full'>{props.sats}</button>
            </div>
         </div>
         
      </div>
      
    </div>
  )
}

export default righcard

