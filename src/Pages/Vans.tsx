import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { Link, useSearchParams } from 'react-router-dom';

function Vans() {
    const vans = useSelector((state: RootState) => state.van.data);
    const [type, setType] = useSearchParams()
    const selectedType = type.get('type');
    const displayVans = selectedType?vans.filter((vans)=>vans.type===selectedType):vans
    
    return (
        <div className='vanCont m-2 pt-20'>
            <h2 className='text-3xl font-extrabold'>Explore our van options</h2>
            <div className='my-2'>
                <Link className='bg-[#ffead0] text-gray-800 mx-2 px-2 py-1 rounded-lg' to={'?type=simple'}>Simple</Link>
                <Link className='bg-[#ffead0] text-gray-800 mx-2 px-2 py-1 rounded-lg' to={'?type=luxury'}>Luxury</Link>
                <Link className='bg-[#ffead0] text-gray-800 mx-2 px-2 py-1 rounded-lg' to={'?type=rugged'}>Rugged</Link>
                <Link className='border-b-2 border-black' to={'.'}>Clear Filters</Link>
            </div>
            <div className='grid grid-cols-2 py-5'>
                {
                    displayVans.map((data) => {
                        const { id, name, price, imageUrl, type } = data;

                        return (
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
