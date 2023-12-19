
import './App.css'
import '../server.js'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Hires, { loader as hiresPageLoader } from './pages/Hires/Hires.jsx'


import HiresDetail, { loader as hiresDetailPageLoader } from './pages/HiresDetail/HiresDetail.jsx'
import Layout from './components/Layout/Layout.jsx'
import Income from './pages/Host/Income.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import HostLayout from './components/HostLayout/HostLayout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx'
import HostVans, { loader as hostVanPageLoader} from './pages/Host/HostVans.jsx'
import HostVanDetail, {loader as hostVanDetailPageLoader} from './pages/Host/HostVanDetail.jsx'
import HostVanInfo from './pages/Host/HostVanInfo.jsx'
import HostVanPricing from './pages/Host/HostVanPricing.jsx'
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx'
import Nopage from './pages/NoPage/Nopage.jsx'
import Error from './components/Error/Error.jsx'
import Login, {loader as loginLoader } from './pages/Login/Login.jsx'
import { requireAuth } from './utils'


const router = createBrowserRouter(createRoutesFromElements(
      
        <Route path='/' element={<Layout />  } errorElement={<Error />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='login' element={<Login />} loader={ loginLoader } />
          <Route path='/hires' element={<Hires />} loader={ hiresPageLoader }  />
          <Route path='/hires/:id' element={<HiresDetail />} loader={ hiresDetailPageLoader  } />
          <Route path='/host' element={<HostLayout />} >
            <Route 
              index 
              element={<Dashboard />} 
              loader={async () => { 
                await requireAuth()
                return null
              } } 
            />
            <Route 
              path='income' 
              element={<Income />} 
              loader={async () =>{ 
                await requireAuth()
                return null
              }}  
              />
            <Route 
              path='reviews' 
              element={<Reviews />} 
              loader={async () =>{ 
                await requireAuth()
                return null
              }} 
              />
            <Route 
              path='vans' 
              element={<HostVans />} 
              loader={ hostVanPageLoader } 
              />
            <Route 
              path='vans/:id' 
              element={<HostVanDetail />} 
              loader = { hostVanDetailPageLoader } 
              >
              <Route 
                index 
                element={<HostVanInfo />} 
                loader={async () =>{ 
                  await requireAuth()
                  return null
                }}  
                />
              <Route 
                path='pricing' 
                element={<HostVanPricing />} 
                loader={async () =>{ 
                  await requireAuth()
                  return null
                }}  
                />
              <Route 
                path='photos' 
                element={<HostVanPhotos />} 
                loader={async () =>{ 
                  await requireAuth()
                  return null
                }}  
              />
            </Route>
          </Route>
          <Route path='*' element={<Nopage />} />
        </Route>
))

function App() {

  return (
    <>
        <RouterProvider router={router} />
            
         
    </>
  )
}

export default App
