import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <section className="about__section">
        <div className="about__img-container">

        </div>
        <div className="about__content-container">
            <h1 className='about__title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className='about__text'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
            <p className='about__text'>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className="about__card">
              <div className="about__card-body">
                <h3>Your destination is waiting.</h3>
                <h3>Your van is ready.</h3>
                <Link className='about__btn'>
                  Explore our van
                </Link>
              </div>
              
            </div>
        </div>
        
    </section>
  )
}

export default About