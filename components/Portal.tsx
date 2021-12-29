import styles from '../styles/Porta.module.css'
import PortalModel from "../model/PortalModel"
import Presente from "./Presente"

interface PortaProps {
    value: PortalModel,
    onChange: (novaPorta: PortalModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrirPorta = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }
 
    function renderPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.masaneta}
                    onClick={abrirPorta}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>

            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? renderPorta() : porta.temPresente ? <Presente /> : false }
            </div>
            <div className={styles.chao}></div>
        </div>

    )
}