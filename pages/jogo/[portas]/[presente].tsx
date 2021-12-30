import { atualizarPorta, criarPortas } from "../../../functons/portas"
import styles from "../../../styles/Jogo.module.css"
import Porta from "../../../components/Portal"
import { useRouter } from "next/router";
import {useEffect, useState} from "react"
import Link from "next/link"

export default function Presente() {
    const [mensage, setMensage] = useState('')
    const [portas, setPorta] = useState([])
    const [validar, setValidar] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const porta = +router?.query.portas
        const comPresente = +router?.query.presente
        const qtdePortaValida = porta >= 3 && porta <= 100
        const temPresenteValido = comPresente >= 1 && comPresente <= porta

        if(!qtdePortaValida) {
            setMensage('Quantidade de portas dever ser maior que 3')
        }

        if(!temPresenteValido) {
            setMensage('Você deve escolher a porta valida para o presente')
        }
        setValidar(qtdePortaValida && temPresenteValido )
    }, [portas, router?.query.portas, router?.query.presente])

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
                {validar? renderizarPorta() : <h1>{mensage}</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href={'/'} passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}