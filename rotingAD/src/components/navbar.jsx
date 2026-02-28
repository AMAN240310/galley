import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between bg-blue-400'>
       <h2 className ='text-xl font-bold ' >Aman</h2>
       <div className=' flex gap-7'>
        {/* <a  className='text-xl' href="">Home</a>
        <a  className='text-xl' href="">About</a>
        <a className='text-xl' href="">Contact</a> */}

        <Link to={'/'} className='text-xl'>Home</Link>

                <Link to={'/about'} className='text-xl'>about</Link>

                        <Link to={'/contact'} className='text-xl'>contact</Link>
       </div>

    </div>
  )
}

export default navbar
