import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import HostLayout from './Pages/Host/HostLayout';
import Vans from './Pages/Vans';
import VanDetail from './Pages/vanDetail';
import Layout from './Components/Layout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostVans from './Pages/Host/HostVans';
import VanPricing from './Pages/Host/VanDesc/VanPricing';
import VanPhotos from './Pages/Host/VanDesc/VanPhotos';
import VanDetails from './Pages/Host/VanDesc/VanDetails';
import VanDetailLayout from './Pages/Host/VanDetailLayout';
import NotFound from './Pages/NotFound';
function App() {
  
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} /> 
          <Route path='vans' element={<Vans/>} />
          <Route path='vans/:id' element={<VanDetail/>} />

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='income' element={<Income/>} />
            <Route path='vans' element={<HostVans/>} />
            <Route path='vans/:id' element={<VanDetailLayout/>} >
              <Route index element={<VanDetails/>} />
              <Route path='pricing' element={<VanPricing/>} />
              <Route path='photos' element={<VanPhotos/>} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
