import { Link } from "react-router-dom";
import React from "react";

interface ThisCompoProps{
    name:string;
    price:number;
    imageUrl:string; 
    type:string;
}
interface VanDetails{
    vanDetail:ThisCompoProps;
}


const HostVanDetailsHeader:React.FC<VanDetails>=({vanDetail})=> {

        const {name, price, imageUrl, type} = vanDetail;
     
    return (
            <>
            <Link className="py-5" to='..' relative="path">&#8701; Back to all vans</Link>
            
                <header className="flex">
                    <img className="rounded-sm w-32 h-32" src={imageUrl} alt="notfound" />
                    <div className="flex flex-col justify-evenly ml-3">
                    <i className={`${type} text-white px-4 py-1 rounded-md w-min`}>
                    {type}
                     </i>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="van-price"><span className="font-bold text-xl">${price}</span>/day</p>
                    </div>
                </header>
            </>
    )
}

export default HostVanDetailsHeader