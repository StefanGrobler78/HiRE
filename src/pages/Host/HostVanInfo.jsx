
import { useOutletContext } from "react-router-dom"


const HostVanInfo = () => {
  const { data } = useOutletContext()
  return (
    <section className="host__section">
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Type:</strong> {data.type}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Visibilty:</strong> Public</p>
    </section>
  )
}
export default HostVanInfo