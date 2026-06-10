import { useState, useMemo } from "react"
import { Bem } from "../types/Bem"

export function useFiltro(bens: Bem[]) {

    const [filtroEstados, setFiltroEstados] = useState<string[]>([])

    const bensFiltrados = useMemo(() => {

        if (filtroEstados.length === 0) {
            return bens
        }

        return bens.filter((bem) =>
            bem.estados.some((e) => filtroEstados.includes(e))
        )

    }, [filtroEstados, bens])

    const bensOrdenados = useMemo(() => {

        return [...bensFiltrados].sort(
            (a, b) => parseInt(a.date) - parseInt(b.date)
        )

    }, [bensFiltrados])

    return {
        filtroEstados,
        setFiltroEstados,
        bensOrdenados,
    }
}