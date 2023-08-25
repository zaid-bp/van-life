import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <header className='bg-[#FFF7ED] text-[#4D4D4D] px-6 py-4 flex items-center justify-between w-full fixed top-0 right-0'>
    <NavLink to='/' className='text-3xl font-bold'>#VANLIFE</NavLink>
    <nav className='space-x-2 font-medium'>
    <NavLink to='/host'  className={({isActive})=> isActive?'font-bold underline underline-offset-8':'font-medium'}>Host</NavLink>
    <NavLink to='/about' className=''>About</NavLink>
    <NavLink to='/vans' className=''>Vans</NavLink>
    </nav>
    </header>
  )
}

export default Navbar