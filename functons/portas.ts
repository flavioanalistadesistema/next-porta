import PortalModel from "../model/PortalModel"

export function criarPortas(
    qtd: number,
    portaComPresente: number
) {
    return Array.from({length: qtd}, (_, i) => {
        const numeric = i + 1
        const present = numeric === portaComPresente
        return new PortalModel(numeric, present)
    })
}

export function atualizarPorta(portas: PortalModel[], portaModificada: PortalModel): PortalModel[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero

        if(igualModificada) {
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual :  portaAtual.desselecionar()
        }
    })
}