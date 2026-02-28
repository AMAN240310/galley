import React from 'react'
import {Routes,Router} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Navbar from './component/navbar'


const App = () => {
  return (
    <div>
      {/* <Navbar/> */}

       <Routes>
         <Route path='/' element={<Home/> }/>
         <Route path='/login' element = {<Login/>}/>
       </Routes>

    </div>
  )
}

export default App
