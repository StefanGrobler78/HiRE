
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Hires from './pages/Hires/Hires.jsx'
// import Footer from './components/Footer/Footer.jsx'

import '../server.js'
import HiresDetail from './pages/HiresDetail/HiresDetail.jsx'
import Layout from './components/Layout/Layout.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import HostLayout from './components/HostLayout/HostLayout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import HostVans from './pages/Host/HostVans.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'
import Nopage from './pages/NoPage/Nopage.jsx'


function App() {

  return (
    <>
        <BrowserRouter>
          {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/hires' element={<Hires />} />
                <Route path='/hires/:id' element={<HiresDetail />} />
                <Route path='/host' element={<HostLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path='income' element={<Income />} />
                  <Route path='reviews' element={<Reviews />} />
                  <Route path='vans' element={<HostVans />} />
                  <Route path='vans/:id' element={<HostVanDetail />} >
                    <Route index element={<HostVanInfo />} />
                    <Route path='pricing' element={<HostVanPricing />} />
                    <Route path='photos' element={<HostVanPhotos />} />
                  </Route>
                </Route>
                <Route path='*' element={<Nopage />} />
              </Route>
            </Routes>
          {/* <Footer /> */}
        </BrowserRouter>  
    </>
  )
}

export default App
