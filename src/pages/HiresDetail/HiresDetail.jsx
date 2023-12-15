import { Link, useParams } from 'react-router-dom'
import './HiresDetail.css'
import React, { useState } from 'react';

const HiresDetail = () => {
    const params = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    

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
        console.log('Loading');
    } else {
        
        return (
            <section className='hiresdetail__section'>
                <Link to='/hires'>
                    Back to all vans
                </Link>
                <div className="hiresdetail__container">
                    <div className="hiresdetail__column">
                        <img className="hiresdetail__image" src={data.imageUrl} alt="" />
                    </div>
                    <div className="hiresdetail__content">
                        <i>{data.type}</i>
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