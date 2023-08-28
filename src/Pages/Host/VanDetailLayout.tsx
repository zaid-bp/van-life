import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {RootState} from '../../features/store';
import VanDetailNav from "./VanDetailNav";
import { Outlet } from "react-router-dom";
import HostVanDetailsHeader from './HostVanDetailsHeader';
function VanDetailLayout() {
    const params = useParams();
    const vans = useSelector((state:RootState)=>state.van.data);
    
    
    const selectedVan = vans.filter((van)=>{
        if(van.id === params.id){
            return van
         }
        });
        const vanProps = selectedVan[0];
        
  return (
    <>
        <HostVanDetailsHeader vanDetail={vanProps}/>
        <div className="py-2">
            <VanDetailNav />
        </div>
        <Outlet context={vanProps}/>
    </>
  )
}

export default VanDetailLayout;


// import VanDetailLayout from "./VanDetailLayout";

