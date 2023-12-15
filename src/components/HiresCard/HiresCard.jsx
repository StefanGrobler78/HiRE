import { Link } from 'react-router-dom'
import './HiresCard.css'


const HiresCard = ({id, name, price, imageUrl, type }) => {
  return (
    <Link className='card-link' to={`/hires/${id}`}>
    <div className="hires__card">
        <img className='hires__card-image' src={imageUrl} alt="title" width='100%' />
        <div className="hires__card-body">
            <div className="hires__title-container">
                <h3 className="hires__card-title">
                    {name}
                </h3>
                <div className="hires__cost-container">
                    <h3 className="hires__card-title">
                    {price}
                    </h3>
                    <p>
                    /day
                    </p>
                </div>
            </div>
            
            <i className="hires_btn">
                {type}
            </i>
        </div>
    </div>
    </Link>
  )
}

export default HiresCard