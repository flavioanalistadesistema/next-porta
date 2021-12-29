import styles from "../styles/Jogo.module.css"
import { useState } from "react"
import Porta from "../components/Portal"
import { atualizarPorta, criarPortas } from "../functons/portas"

export default function Jogo() {
    const [portas, setPorta] = useState(criarPortas(4, 3))

    function renderizarPorta() {
        return portas.map((porta) => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
                setPorta(atualizarPorta(portas, novaPorta))
            }} />
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPorta()}
            </div>
        </div>
    )
}