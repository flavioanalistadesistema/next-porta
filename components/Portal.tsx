import styles from '../styles/Porta.module.css'
import PortalModel from "../model/PortalModel";

interface PortaProps {
  porta: PortalModel
}

export default function Porta(props: PortaProps) {
    const { porta } = props
    const selecionada = porta.selecionada ? styles.selecionada : '';
    
    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.masaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>

    )
}