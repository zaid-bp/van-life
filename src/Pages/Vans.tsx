import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { Link } from 'react-router-dom';

function Vans() {
   const vans = useSelector((state:RootState)=>state.van.data);
  return (
    <div className='vanCont m-2'>
        <h2 className='text-3xl font-extrabold'>Explore our van options</h2>
        <div className='grid grid-cols-2 py-5'>
            {
                vans.map((data)=>{
                    const {id, name, price, imageUrl, type} = data;
                    
                    return(
                    <div key={id} className='van m-2'>
                        <Link to={`/vans/${id}`}>
                            <img className='rounded-md' src={imageUrl} alt={name} />
                            <div className='space-y-2'>
                                <h4 className='font-bold text-xl'>{name}</h4>
                                <p>${price}/day</p>
                                <button className={`${type} text-white px-2 py-1 rounded-md`}>{type}</button>
                            </div>
                        </Link>

                    </div>)
                })
            }

        </div>
        
    </div>
  )
}

export default Vans