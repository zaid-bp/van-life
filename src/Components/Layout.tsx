import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

function Layout() {
  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout