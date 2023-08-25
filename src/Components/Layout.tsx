import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

function Layout() {
  return (
    <>
    <Navbar/>
    <main className='mb-3de2'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout