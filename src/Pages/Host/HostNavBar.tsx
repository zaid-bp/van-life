import { NavLink } from 'react-router-dom';

function HostNavBar() {
  return (
    <header>
        <nav className='space-x-3'>
            <NavLink end className={({isActive})=> isActive?'font-bold underline underline-offset-1':'font-medium'} to="/host">Dashboard</NavLink>
            <NavLink  className={({isActive})=> isActive?'font-bold underline underline-offset-1':'font-medium'} to="/host/income">Income</NavLink>
            <NavLink  className={({isActive})=> isActive?'font-bold underline underline-offset-1':'font-medium'} to="/host/vans">Vans</NavLink>
            <NavLink  className={({isActive})=> isActive?'font-bold underline underline-offset-1':'font-medium'} to="/host/reviews">reviews</NavLink>
        </nav>
    </header>
  )
}

export default HostNavBar