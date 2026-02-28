import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from'./components/section2/section2'

const App = () => {
const user = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww', 
    intro: ' ',
    tag: ' '
   },

     {
    img: 'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww', 
    intro: ' ',
    tag: 'satisfied '
   },

     {
    img: 'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww', 
    intro: ' ',
    tag: ' satisfied '
   }

  ]

  return (

    <div>
        <Section1/>
        <Section2/>
    </div>

  )
}

export default App
