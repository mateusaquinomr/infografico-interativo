import api from '../../../services/api'
import { Bem } from '../types/Bem'

export async function getBens(): Promise<Bem[]> {
    const response = await api.get('/bens')
    return response.data
}

export async function getBensByLivro(livroId: string): Promise<Bem[]> {
    const response = await api.get(`/bens?livroId=${livroId}`)
    return response.data
}

export async function createBem(bem: Bem) {
    const response = await api.post('/bens', bem)
    return response.data
}

export async function updateBem(id: number, bem: Bem) {
    const response = await api.put(`/bens/${id}`, bem)
    return response.data
}

export async function deleteBem(id: number) {
    await api.delete(`/bens/${id}`)
}