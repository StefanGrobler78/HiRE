import { Link, useLocation, useLoaderData } from 'react-router-dom'
import './HiresDetail.css'
import { getVans } from '../../api';

export function loader ({ params }) {
    return getVans(params.id)
}
const HiresDetail = () => {
    const location = useLocation()
    const data = useLoaderData()

    const colors = (type) => {
        if (type === "simple") {
            return "red"
        } else if (type === "luxury") {
            return "blue"
        } else {
           return "green"
        }
    }
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
                        <img className="hiresdetail__image" src={data.imageUrl} alt={data.name} />
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
export default HiresDetail