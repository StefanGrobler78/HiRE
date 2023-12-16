
import { useOutletContext } from "react-router-dom"


const HostVanPhotos = () => {
  const { data } = useOutletContext()

  return (
    <section className="host__photos">
        <img src={data.imageUrl} alt={data.name} width="200px" />
    </section>
  )
}

export default HostVanPhotos