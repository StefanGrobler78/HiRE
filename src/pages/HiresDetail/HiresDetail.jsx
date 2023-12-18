import { Link, useParams, useLocation } from 'react-router-dom'
import './HiresDetail.css'
import React, { useState } from 'react';

const HiresDetail = () => {
    const params = useParams()
    const location = useLocation()
    console.log(location);
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

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
        async function fetchData() {
            try{
                const res = await fetch(`/api/vans/${params.id}`)
                const data = await res.json()
                setData(data.vans)
                setLoading(false)

            } catch(error) {
                console.log(error)
            }
            
        }
        fetchData() 
        
    }, [params.id])


    if (loading) {
        <div className="loading">
            <h1>Loading</h1>
        </div>
    } else {
        const search = location.state?.search || ""
        const type = location.state?.type || "all"
        return (
            <section className='hiresdetail__section'>
                <Link
                    to={`..${search}`}
                    relative='path'
                >
                   &larr; <span>Back to {type} vans</span>
                </Link>
                <div className="hiresdetail__container">
                    <div className="hiresdetail__column">
                        <img className="hiresdetail__image" src={data.imageUrl} alt="" />
                    </div>
                    <div className="hiresdetail__content">
                        <i className='hires_btn' style={{backgroundColor: colors(data.type)}}>{data.type}</i>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <Link to='/' >Rent this van</Link>
                    </div>
                </div>
            </section>
          )


    }



    

}

export default HiresDetail