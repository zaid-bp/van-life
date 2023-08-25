import React from 'react'
import { Link } from 'react-router-dom'

function HostNavBar() {
  return (
    <header>
        <nav className='space-x-3'>
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/vans">Vans</Link>
            <Link to="/host/reviews">reviews</Link>
        </nav>
    </header>
  )
}

export default HostNavBar