import { useEffect, useState } from "react"
import { Bem } from "../types/Bem"
import { getBensByLivro } from "../services/bensService"

export function useBens(livroId: string) {
    const [bens, setBens] = useState<Bem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBens() {
            try {
                const data = await getBensByLivro(livroId)
                setBens(data)
            } catch (error) {
                console.error("Erro ao buscar bens:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchBens()
    }, [livroId])

    return { bens, loading }
}