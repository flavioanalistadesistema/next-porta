import { useState } from "react";
import Porta from "../components/Portal";
import {criarPortas, atualizarPorta} from "../functons/portas";
import PortalModel from "../model/PortalModel";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <h1>Formulário de Início!!!</h1>
    </div>
  )
}
