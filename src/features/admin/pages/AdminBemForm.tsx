import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../services/api';

const estadosBrasil = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
    "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
    "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

export default function AdminBemForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        subtitulo: '',
        date: '',
        image: '',
        description: '',
        localizacao: '',
        estados: [] as string[],
        registro: ''
    });

    useEffect(() => {
        if (id) {
            carregarBem();
        }
    }, [id]);

    const carregarBem = async () => {
        try {
            const response = await api.get(`/bens/${id}`);
            setFormData(response.data);
        } catch (error) {
            console.error('Erro ao carregar bem:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (id) {
                await api.put(`/bens/${id}`, formData);
            } else {
                await api.post('/bens', formData);
            }
            navigate('/admin/bens');
        } catch (error) {
            console.error('Erro ao salvar bem:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEstadoChange = (estado: string) => {
        setFormData(prev => ({
            ...prev,
            estados: prev.estados.includes(estado)
                ? prev.estados.filter(e => e !== estado)
                : [...prev.estados, estado]
        }));
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">
                {id ? 'Editar Bem' : 'Novo Bem'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 mb-2">Título *</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Subtítulo</label>
                        <input
                            type="text"
                            value={formData.subtitulo}
                            onChange={(e) => setFormData({ ...formData, subtitulo: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Ano *</label>
                        <input
                            type="text"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">URL da Imagem *</label>
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">URL do Mapa *</label>
                        <input
                            type="text"
                            value={formData.localizacao}
                            onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Descrição *</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full p-2 border rounded"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Registro IPHAN *</label>
                        <textarea
                            value={formData.registro}
                            onChange={(e) => setFormData({ ...formData, registro: e.target.value })}
                            className="w-full p-2 border rounded"
                            rows={3}
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Estados *</label>
                        <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto border p-4 rounded">
                            {estadosBrasil.map((estado) => (
                                <label key={estado} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.estados.includes(estado)}
                                        onChange={() => handleEstadoChange(estado)}
                                        className="rounded"
                                    />
                                    <span>{estado}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/bens')}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
                    >
                        {loading ? 'Salvando...' : 'Salvar'}
                    </button>
                </div>
            </form>
        </div>
    );
}