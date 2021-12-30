import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import {useState} from "react";

export default function Formulario() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [portaComPresente, setPortaComPresente] = useState(3)

  return (
    <div className={styles.formulario  }>
        <div>
            <Cartao bgColor="#c0392c">
                <h1>Monty Hall</h1>
            </Cartao>
            <Cartao>
                <EntradaNumerica text="Qtde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
            </Cartao>
        </div>
        <div>
            <Cartao>
                <EntradaNumerica text="Porta com presente?" value={portaComPresente} onChange={ComPresente => setPortaComPresente(ComPresente)} />
            </Cartao>
            <Cartao bgColor="#28a085">
                <Link href={`/jogo/${qtdePortas}/${portaComPresente}`} passHref>
                    <h2 className={styles.link}>Iniciar</h2>
                </Link>
            </Cartao>
        </div>
    </div>
  )
}
