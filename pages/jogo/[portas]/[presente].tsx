import { atualizarPorta, criarPortas } from "../../../functons/portas"
import styles from "../../../styles/Jogo.module.css"
import Porta from "../../../components/Portal"
import { useRouter } from "next/router";
import {useEffect, useState} from "react"
import Link from "next/link"

export default function Presente() {
    const [portas, setPorta] = useState([])
    const router = useRouter()

    useEffect(() => {
        setPorta(criarPortas(+router?.query.portas, +router?.query.presente))
    }, [router.query])

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
            <div className={styles.botoes}>
                <Link href={'/'}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}