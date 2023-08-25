import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

function Layout() {
  return (
    <>
    <Navbar/>
    <div className=''>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout