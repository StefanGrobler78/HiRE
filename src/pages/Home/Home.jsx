import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <section className="hero-section">
        <div className="hire__container">
          <div className="hero__container">
            <h1 className="hero__title">You got the travel plans, we got the travel vans.</h1>
            <p className="hero__subtitle">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to='/' className='hero__btn' >Find tour van</Link>
          </div>
            
        </div>
        
    </section>
  )
}

export default Home