import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6";

const HostVanDetail = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`/api/vans/${params.id}`)
        const res = await req.json()
        setData(res.vans)
        isLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
  },[params.id])
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    )
  }else{
    const activeStyles = {textDecoration: 'underline', fontWeight: 'Bold', color: '#109876'}
    return (
      <div>
        <h1>Van List Details</h1>
        <Link to='..' relative="path">
        <FaChevronLeft />  Back to vans
                </Link>
                <div className="hostdetail__container">
                  <div className="hostdetail__wrapper">
                    <div className="hostdetail__column">
                        <img className="hostdetail__image" src={data.imageUrl} alt="" />
                    </div>
                    <div className="hostdetail__content">
                        <i className="hostdetail__type">{data.type}</i>
                        <h2>{data.name}</h2>
                        <p>${data.price}/day</p>
                    </div>
                  </div>
                    <nav className="hostdetail__nav">
                      <NavLink to='.' end style={({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
                      <NavLink to='pricing' style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
                      <NavLink to='photos' style={({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
                    </nav>
                    <div className="hostdetails__display">
                        <Outlet context = {{ data }} />
                    </div>
                </div>
      </div>
    )
  }
  
}

export default HostVanDetail