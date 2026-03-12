import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';

interface Bem {
    id: number;
    title: string;
    date: string;
    estados: string[];
}

export default function AdminBens() {
    const [bens, setBens] = useState<Bem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        carregarBens();
    }, []);

    const carregarBens = async () => {
        try {
            const response = await api.get('/bens');
            setBens(response.data);
        } catch (error) {
            console.error('Erro ao carregar bens:', error);
        } finally {
            setLoading(false);
        }
    };

    const deletarBem = async (id: number) => {
        if (window.confirm('Tem certeza que deseja deletar este bem?')) {
            try {
                await api.delete(`/bens/${id}`);
                carregarBens();
            } catch (error) {
                console.error('Erro ao deletar bem:', error);
            }
        }
    };

    if (loading) return <div>Carregando...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Bens Registrados</h2>
                <button
                    onClick={() => navigate('/admin/bens/novo')}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Novo Bem
                </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left">ID</th>
                            <th className="px-6 py-3 text-left">Título</th>
                            <th className="px-6 py-3 text-left">Ano</th>
                            <th className="px-6 py-3 text-left">Estados</th>
                            <th className="px-6 py-3 text-left">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bens.map((bem) => (
                            <tr key={bem.id} className="border-t">
                                <td className="px-6 py-4">{bem.id}</td>
                                <td className="px-6 py-4">{bem.title}</td>
                                <td className="px-6 py-4">{bem.date}</td>
                                <td className="px-6 py-4">{bem.estados.length} estados</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button
                                        onClick={() => navigate(`/admin/bens/editar/${bem.id}`)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => deletarBem(bem.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}