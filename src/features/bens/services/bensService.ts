import { bensMock } from "../mock/bensMock"
import { Bem } from "../types/Bem"

export function getBens(): Bem[] {
    return bensMock
}

export function getBensByLivro(livroId: string): Bem[] {
    return bensMock.filter(bem => bem.livroId === livroId)
}

export function createBem(bem: Bem) {
    bensMock.push(bem)
}

export function updateBem(id: string, updated: Bem) {
    const index = bensMock.findIndex(b => b.id === id)

    if (index !== -1) {
        bensMock[index] = updated
    }
}

export function deleteBem(id: string) {
    const index = bensMock.findIndex(b => b.id === id)

    if (index !== -1) {
        bensMock.splice(index, 1)
    }
}