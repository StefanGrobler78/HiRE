import { Link } from "react-router-dom"

const Nopage = () => {
  return (
    <div>
        <h1>404 page not found</h1>
        <Link to='/' className="hires_btn" style={{backgroundColor: "black"}}>Return to home</Link>
    </div>
  )
}

export default Nopage