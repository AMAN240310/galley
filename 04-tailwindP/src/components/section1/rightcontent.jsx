import React from 'react'
import Rightcard from  './righcard'

const rightcontent = () => {
  return (
    <div className='h-full w-2/3 overflow-auto  p-4 flex flex-nowrap gap-3'>
          <Rightcard/>
            <Rightcard/>
              <Rightcard/>
                <Rightcard/>

    </div>
  )
}

export default rightcontent

