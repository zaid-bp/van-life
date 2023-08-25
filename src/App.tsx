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
function App() {
  
  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} /> 
          <Route path='vans' element={<Vans/>} />
          <Route path='vans/:id' element={<VanDetail/>} />

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='income' element={<Income/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
