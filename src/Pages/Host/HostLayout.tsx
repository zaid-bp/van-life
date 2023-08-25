import { Outlet } from "react-router-dom"
import HostNavBar from "./HostNavBar"


function HostLayout() {
  return (
    <div className="px-5 pt-20">
    <HostNavBar/>
    <Outlet />
    </div>

  )
}

export default HostLayout