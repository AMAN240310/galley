import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const pageContent = () => {
  return (
    <div className='h-[90vh] py-10  flex items-center gap-10  px-3'>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default pageContent

