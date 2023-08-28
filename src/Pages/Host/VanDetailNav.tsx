import { NavLink } from "react-router-dom";

function VanDetailNav() {
  return (
    <nav className="flex items-center">
        <ul className="flex space-x-3 my-5">
            <li><NavLink className={({isActive})=>isActive? 'font-bold':'text-gray-700'} end to='.'>Details</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? 'font-bold':'text-gray-700'} to='pricing'>Pricing</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? 'font-bold':'text-gray-700'} to='photos'>Photos</NavLink></li>
        </ul>
        <span className="ml-auto">Edit</span>
    </nav>
  )
}

export default VanDetailNav