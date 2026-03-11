import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";
import styles from './Filter.module.css';

const estadosComNomes = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
    "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
    "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

interface FilterProps {
    onAplicarFiltro: (estado: string | null) => void;
    numeroExpressoes?: number;
}

export default function Filter({
    onAplicarFiltro,
    numeroExpressoes = 0,
}: FilterProps) {
    const [dropdownAberto, setDropdownAberto] = useState(false);
    const [busca, setBusca] = useState("");
    const [selecionado, setSelecionado] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickFora(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setDropdownAberto(false);
            }
        }

        document.addEventListener("mousedown", handleClickFora);
        return () => document.removeEventListener("mousedown", handleClickFora);
    }, []);

    const estadosFiltrados = estadosComNomes.filter((nome) =>
        nome.toLowerCase().includes(busca.toLowerCase())
    );

    function selecionarEstado(nome: string) {
        if (selecionado === nome) {
            setSelecionado(null);
            onAplicarFiltro(null);
        } else {
            setSelecionado(nome);
            onAplicarFiltro(nome);
        }
        setDropdownAberto(false);
        setBusca("");
    }

    function limpar() {
        setSelecionado(null);
        onAplicarFiltro(null);
        setBusca("");
        setDropdownAberto(false);
    }

    const ativo = Boolean(selecionado);
    const label = ativo ? `${selecionado} (${numeroExpressoes})` : "Estados";

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => setDropdownAberto((a) => !a)}
                    type="button"
                    className={`${styles.filterButton} ${ativo ? styles.filterButtonActive : styles.filterButtonInactive}`}
                >
                    <SlidersHorizontal size={16} color={ativo ? "#097a03" : "#ffffff"} />
                    <span>{label}</span>
                    <ChevronDown size={16} color={ativo ? "#097a03" : "#ffffff"} />
                </button>

                {ativo && (
                    <button
                        onClick={limpar}
                        type="button"
                        className={styles.clearButton}
                        aria-label="Limpar filtro"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>

            {dropdownAberto && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownContent}>
                        <input
                            type="text"
                            placeholder="Buscar estado..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className={styles.searchInput}
                        />

                        <div className={styles.estadosList}>
                            {estadosFiltrados.map((nome) => (
                                <div
                                    key={nome}
                                    onClick={() => selecionarEstado(nome)}
                                    className={`${styles.estadoItem} ${selecionado === nome ? styles.estadoSelected : ''}`}
                                >
                                    {nome}
                                </div>
                            ))}

                            {estadosFiltrados.length === 0 && (
                                <p className={styles.noResults}>
                                    Nenhum estado encontrado
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}