import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { Link } from "react-router-dom";
function Home() {
const store = useSelector((state:RootState)=>state.van.data);
console.log(store);

  return (
    <div className='main text-white space-y-8'>
        <h1 className='text-3xl font-bold'>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className='vanBtn' to='/vans'>Find your van</Link>
    </div>
  )
}

export default Home