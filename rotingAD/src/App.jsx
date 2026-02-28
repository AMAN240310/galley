import Navbar from './components/navbar'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFountd from './Pages/notFountd'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFountd/>}/>
      </Routes>
           

      <Footer />
    </div>
  )
}

export default App