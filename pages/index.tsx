import Porta from "../components/Portal";
import PortalModel from "../model/PortalModel";

export default function Home() {
  const p1 = new PortalModel(1, false, true)
  const p2 = new PortalModel(2)

  return (
    <div style={{
      display:"flex"
    }}>
      <Porta porta={p1}/>
      <Porta porta={p2}/>
    </div>
  )
}
