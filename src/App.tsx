import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Mainhost from './Components/Host/Main';
import Vans from './Components/Vans';
import VanDetail from './Components/vanDetail';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <header className='color-[#4D4D4D] px-6 py-4 flex items-center justify-between'>
    <Link to='/' className='text-3xl font-bold'>#VANLIFE</Link>
    <nav className='space-x-2 font-medium'>
    <Link to='/host' className=''>Host</Link>
    <Link to='/about' className=''>About</Link>
    <Link to='/vans' className=''>Vans</Link>
    </nav>
    </header>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} /> 
       <Route path='/host' element={<Mainhost/>} />
       <Route path='/vans' element={<Vans/>} />
       <Route path='/vans/:id' element={<VanDetail/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
