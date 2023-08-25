import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import {RootState} from '../../features/store'
export default function HostVanDetails() {
    const params = useParams();
    const vans = useSelector((state:RootState)=>state.van.data);
    
    
    const selectedVan = vans.filter((van)=>{
        if(van.id === params.id){
            return van
         }
        });
        const {name, price, description, imageUrl, type} = selectedVan[0];
     
    return (
        selectedVan?(
            <div className="px-4 pb-4">
            <div className="van-detail">
                <img className="rounded-md my-5" src={imageUrl} />
                <i className={`${type} text-white px-8 py-2 rounded-md text-lg`}>
                    {type}
                </i>
                <h2 className="my-5 text-3xl font-bold">{name}</h2>
                <p className="van-price mb-3"><span className="font-bold text-xl">${price}</span>/day</p>
                <p>{description}</p>
                <button className="vanBtn mt-3">Rent this van</button>
            </div>
    </div>
        ):(
            <p>loading...</p>
        )
    )
}