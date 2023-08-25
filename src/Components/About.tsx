import { Link } from 'react-router-dom';
import bgImg from '../assets/images/about-hero.png';

function About() {
  return (
      <div className="about-page-container">
          <img src={bgImg} className="about-hero-image" />
          <div className="about-page-content px-3 mt-3 mb-8">
              <h1 className='text-3xl font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
              <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
              <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          </div>
          <div className="bg-[#FFCC8D] mx-3 h-auto p-4 rounded-md">
              <h2 className='my-3'>Your destination is waiting.<br />Your van is ready.</h2>
              <Link className="bg-black text-white font-bold px-5 py-2 rounded-lg" to="/vans">Explore our vans</Link>
          </div>
      </div>
  );
}

export default About