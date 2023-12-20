import { Link, NavLink, Outlet,  useLoaderData } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6";
import { getHostVans } from "../../contstants/api.js";
import { requireAuth } from "../../contstants/utils.js";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader_hvd({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}

const HostVanDetail = () => {
  const data = useLoaderData()

    const activeStyles = {textDecoration: 'underline', fontWeight: 'Bold', color: '#109876'}
    const colors = (type) => {
      if (type === "simple") {
          return "red"
      } else if (type === "luxury") {
          return "blue"
      } else {
         return "green"
      }
  }

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
                        <p className="hostdetail__type"
                          style={{backgroundColor: colors(data.type)}}
                        >{data.type}</p>
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

export default HostVanDetail