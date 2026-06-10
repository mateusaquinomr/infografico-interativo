import { useState, useRef, useEffect } from "react"
import api from '../../../services/api'
import { Bem } from "../../bens/types/Bem"
import CardBem from "../../bens/components/CardBem/CardBem"
import ModalBem from "../../bens/components/ModalBem/ModalBem"
import Filter from "../../../shared/components/ui/Filter"
import styles from './FormasExpressao.module.css';

export default function FormasExpressaoPage() {
    const [bens, setBens] = useState<Bem[]>([])
    const [loading, setLoading] = useState(true)
    const [filtroEstado, setFiltroEstado] = useState<string | null>(null)
    const [bemSelecionado, setBemSelecionado] = useState<Bem | null>(null)
    const [showTooltip, setShowTooltip] = useState(false)
    const tooltipRef = useRef<HTMLSpanElement>(null)

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                tooltipRef.current &&
                !tooltipRef.current.contains(event.target as Node)
            ) {
                setShowTooltip(false);
            }
        };

        if (showTooltip) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showTooltip]);

    const bensFiltrados = !filtroEstado
        ? bens
        : bens.filter((bem) => bem.estados.includes(filtroEstado));

    const bensOrdenados = [...bensFiltrados].sort(
        (a, b) => parseInt(a.date) - parseInt(b.date)
    );

    if (loading) {
        return (
            <div id="livro" className={styles.livroSection}>
                <div className="container text-center py-20">
                    <p className="text-white">Carregando...</p>
                </div>
            </div>
        );
    }

    return (
        <div id="livro" className={styles.livroSection}>
            <div className="container">
                <h2 className="text-lg mb-2">
                    Organizado em ordem de data de{" "}
                    <span className="relative inline-block" ref={tooltipRef}>
                        <button
                            onClick={() => setShowTooltip(!showTooltip)}
                            className={styles.registroButton}
                        >
                            Registro
                        </button>
                        {showTooltip && (
                            <div className={styles.tooltip}>
                                O Registro do IPHAN é um processo voltado para reconhecer os bens culturais imateriais do Brasil, como expressões culturais.
                            </div>
                        )}
                    </span>
                </h2>

                <h1 className="text-xl md:text-4xl font-bold mb-4">
                    LIVRO DAS FORMAS DE EXPRESSÃO
                </h1>

                <div className="mb-6">
                    <Filter
                        numeroExpressoes={bensFiltrados.length}
                        onAplicarFiltro={(estado) => setFiltroEstado(estado)}
                    />
                </div>

                <div className={styles.gridContainer}>
                    {bensOrdenados.map((bem) => {
                        console.log(bem.image, bem.localizacao);

                        return (
                            <CardBem
                                key={bem.id}
                                bem={bem}
                                onClick={() => setBemSelecionado(bem)}
                            />
                        );
                    })}
                </div>

                {bemSelecionado && (
                    <ModalBem
                        bem={bemSelecionado}
                        onClose={() => setBemSelecionado(null)}
                    />
                )}
            </div>
        </div>
    )
}