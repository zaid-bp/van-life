import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../features/store'

function HostVans() {
    const allVans = useSelector((state:RootState)=>state.van.data);
    // vans.id==="123"
    const hostVans = allVans.filter((vans)=>vans.hostId === "123");
    
  return (
    <div >
        <h2 className='text-3xl font-bold my-5'>Your listed vans</h2>
    {hostVans.map((van)=>{
        return(    
        <Link key={van.id} to={`${van.id}`}>
            <div className='flex bg-white rounded-md p-4 items-center w-full my-2'>
                <img className='rounded-lg w-1/5' src={van.imageUrl} alt={van.name} />
                <div className='ml-4'>
                    <h5 className='text-xl font-medium'>{van.name}</h5>
                    <p>${van.price}/day</p>
                </div>
            </div>
    
        </Link>)
    })}
    </div>
  )
}

export default HostVans