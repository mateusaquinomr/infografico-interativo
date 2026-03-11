import { useState, useMemo } from "react"
import { Bem } from "../types/Bem"
import { bensMock } from "../mock/bensMock"

export function useFiltro() {

    const [filtroEstados, setFiltroEstados] = useState<string[]>([])
    const [bemSelecionado, setBemSelecionado] = useState<Bem | null>(null)

    const bensFiltrados = useMemo(() => {

        if (filtroEstados.length === 0) {
            return bensMock
        }

        return bensMock.filter((bem: Bem) =>
            bem.estados.some((e: string) => filtroEstados.includes(e))
        )

    }, [filtroEstados])

    const bensOrdenados = useMemo(() => {

        return [...bensFiltrados].sort(
            (a, b) => a.anoRegistro - b.anoRegistro
        )

    }, [bensFiltrados])

    return {
        filtroEstados,
        setFiltroEstados,
        bemSelecionado,
        setBemSelecionado,
        bensOrdenados,
    }
}