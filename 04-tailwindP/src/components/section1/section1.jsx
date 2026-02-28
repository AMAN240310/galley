import React from 'react'
import Navbar from './navbar'
import PageContent from './pageContent'


const section1 = () => {
  return (
    <div className='h-screen w-full py-10 px-6 ' >
       <Navbar/>
       <PageContent/>
    </div>
  )
}

export default section1
