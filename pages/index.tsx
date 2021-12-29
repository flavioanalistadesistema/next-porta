import { useState } from "react";
import Porta from "../components/Portal";
import {criarPortas, atualizarPorta} from "../functons/portas";
import PortalModel from "../model/PortalModel";

export default function Home() {
  const [portas, setPorta] = useState(criarPortas(4, 3))

  function renderizarPorta() {
    return portas.map((porta) => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
        setPorta(atualizarPorta(portas, novaPorta))
      }} />
    })
  }

  return (
    <div style={{
      display: "flex"
    }}>
      {renderizarPorta()}
    </div>
  )
}
