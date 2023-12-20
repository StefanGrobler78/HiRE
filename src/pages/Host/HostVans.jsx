
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../contstants/api"
import { requireAuth } from "../../contstants/utils";

export async function loader() {
    await requireAuth()
    return getHostVans()
}
const HostVans = () => {
  const data = useLoaderData()
    
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
        
      )})}
</>
)}
export default HostVans