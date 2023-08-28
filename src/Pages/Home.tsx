import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='main text-white h-screen flex flex-col justify-evenly'>
      <div className=''>
        <h1 className='text-3xl font-bold'>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      </div>
        <Link className='vanBtn' to='/vans'>Find your van</Link>
    </div>
  )
}

export default Home