import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HostVans = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      async function fetchData() {
        try {
          const req = await fetch(`/api/host/vans`) 
          const res = await req.json()
          setData(res.vans)
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData()
    },[])

   if (loading) {
    <div className="loading">
        <h1>Loading</h1>
      </div>
   } else {
    console.log(data)
    return (
    <>
    <h1 >your listed vans</h1>
    {
      data.map((hire) => {
      return (
        <div key={hire.id}>
          <Link  to={`${hire.id}`}>
            <div className="listVans__container">
              <img src={hire.imageUrl} alt="" />
              <div className="listVans__text-container">
                  <h2>{hire.name}</h2>
                  <p>{hire.price}/day</p>
              </div>
            </div>
          </Link>
        </div>
        
      )
    } )
    }
    

    </>
  )
  }
  
}

export default HostVans