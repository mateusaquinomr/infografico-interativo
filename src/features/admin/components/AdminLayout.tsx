import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function AdminLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Admin - Livro das Formas de Expressão</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Sair
                    </button>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-8">
                <Outlet />
            </div>
        </div>
    );
}