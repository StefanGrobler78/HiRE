import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
        
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          <Footer />
        </BrowserRouter>
        
    </>
  )
}

export default App
