import { Link } from 'react-router-dom'
import './Hires.css'
import HiresCard from '../../components/HiresCard/HiresCard'
import React, { useState } from 'react'

const Hires = () => {
    const [vans, setVans] = useState([])
    React.useEffect(() => {
      fetch("api/vans")
      .then(res => res.json())
      .then((data) => setVans(data.vans))
    }, [])

    const vanElements = vans.map((van)=> {
        return(
            van
        )
    })
    // console.log(vanElements);
  return (
    <section className='hires__section'>
        <div className="hires__container">
            <h1 className="hires__title">
                Explore our van options
            </h1>
            <div className="hires__filters-container">
                <Link to='/' className='hires__filter-links' >Simple</Link>
                <Link to='/' className='hires__filter-links' >Luxury</Link>
                <Link to='/' className='hires__filter-links' >Rugged</Link>
                <Link to='/' className='hires__filter-link' >Clear filters</Link>
            </div>
            <div className="hires__content-container">
                {
                    vanElements.map((van) => {
                        return(
                            <HiresCard key={van.id} id={van.id} name={van.name} price={van.price} imageUrl={van.imageUrl} type={van.type} />
                        )
                    })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Hires