import { useEffect, useState } from "react"
import { Bem } from "../types/Bem"
import { getBensByLivro } from "../services/bensService"

export function useBens(livroId: string) {
    const [bens, setBens] = useState<Bem[]>([])

    useEffect(() => {
        const data = getBensByLivro(livroId)
        setBens(data)
    }, [livroId])

    return bens
}