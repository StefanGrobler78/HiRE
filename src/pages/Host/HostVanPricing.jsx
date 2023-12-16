
import { useOutletContext} from "react-router-dom"

const HostVanPricing = () => {
  const { data } = useOutletContext()
  return (
    <div>
        <h1>$ {data.price} /day</h1>
    </div>
  )
}

export default HostVanPricing