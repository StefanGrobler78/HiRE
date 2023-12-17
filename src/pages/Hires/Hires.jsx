import { Link, useSearchParams } from 'react-router-dom'
import './Hires.css'
import React, { useState } from 'react'

const Hires = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    let typeFilter = searchParams.get("type")    
    const [vans, setVans] = useState([])

    // const selected = (typeFilter) => {
    //     if (typeFilter === "simple") {
    //         return "red"
    //     }else if (typeFilter === "luxury") {
    //         return "blue"
    //     }else if(typeFilter ==="rugged") {
    //         return "green"
    //     }
    // }

    const colors = (type) => {
        if (type === "simple") {
            return "red"
        } else if (type === "luxury") {
            return "blue"
        } else {
           return "green"
        }
    }

    React.useEffect(() => {
      fetch("api/vans")
      .then(res => res.json())
      .then((data) => setVans(data.vans))
    }, [])
    const filteredTypes = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans
    const vanElements = filteredTypes.map((van)=> {
        return(
            van
        )
    })
   
  return (
    <section className='hires__section'>
        <div className="hires__container">
            <h1 className="hires__title">
                Explore our van options
            </h1>
            <div className="hires__filters-container">
                <button 
                    className='hires__filter-links' 
                    onClick={() => {
                        setSearchParams({type: "simple"})
                    }}
                    style={{backgroundColor: typeFilter === "simple" ? "red" : null}}
                    >
                        Simple
                </button>
                <button 
                    className='hires__filter-links' 
                    onClick={() => setSearchParams({type: "luxury"})}
                    style={{backgroundColor: typeFilter === "luxury" ? "blue" : null}}
                    >
                        Luxury
                    </button>
                <button 
                    className='hires__filter-links' 
                    onClick={() => setSearchParams({type: "rugged"})}
                    style={{backgroundColor: typeFilter === "rugged" ? "green" : null}}
                    >
                        Rugged
                    </button>
                { typeFilter ? <button 
                    className='hires__filter-link' 
                    onClick={() => {setSearchParams({})}}>
                        Clear Filter
                    </button> : null
}
                {/* <Link to="?type=simple" className='hires__filter-links'>Simple</Link>
                <Link to='?type=luxury' className='hires__filter-links' >Luxury</Link>
                <Link to='?type=rugged' className='hires__filter-links' >Rugged</Link>
                <Link to='.' className='hires__filter-link' >Clear filters</Link> */}
            </div>
            <div className="hires__content-container">
                {
                    vanElements.map((van) => {
                        return(
                            <div key={van.id}>
                                <Link className='card-link' to={van.id} state={{type: typeFilter}}>
                                    <div className="hires__card">
                                        <img className='hires__card-image' src={van.imageUrl} alt="title" width='100%' />
                                        <div className="hires__card-body">
                                            <div className="hires__title-container">
                                                <h3 className="hires__card-title">
                                                    {van.name}
                                                </h3>
                                                <div className="hires__cost-container">
                                                    <h3 className="hires__card-title">
                                                ${van.price}
                                                    </h3>
                                                    <p>
                                                    /day
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="hires_btn" style={{backgroundColor: colors(van.type)}}>
                                                {van.type}
                                            </p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>




                        )
                    })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Hires