import styles from './ModalBem.module.css';

interface ModalBemProps {
    bem: {
        title: string;
        subtitulo?: string;
        date: string;
        image: string;
        description: string;
        localizacao: string;
        estados: string[];
        registro: string;
    };
    onClose: () => void;
}

const ModalBem = ({ bem, onClose }: ModalBemProps) => {
    const todosEstados = [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo",
        "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba",
        "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul",
        "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
    ];

    const temTodosEstados = todosEstados.every((estado) =>
        bem.estados.includes(estado)
    );

    let ajusteImagem = "";
    if (!temTodosEstados) {
        if (bem.estados.length > 10) {
            ajusteImagem = "md:-mt-60 md:-ml-10";
        } else if (bem.estados.length > 7) {
            ajusteImagem = "md:-mt-40 md:-ml-36";
        } else if (bem.estados.length > 5) {
            ajusteImagem = "md:-mt-40";
        } else if (bem.estados.length > 3) {
            ajusteImagem = "md:-mt-20";
        } else if (bem.estados.length > 2) {
            ajusteImagem = "md:-mt-12";
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4" onClick={onClose}>
            <div className={`bg-white rounded shadow-lg w-full max-w-md relative ${styles.modalExpressao} max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>

                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl font-bold z-30"
                    onClick={onClose}
                    aria-label="Fechar expressão"
                >
                    &times;
                </button>

                <div className="flex flex-col px-6 pt-4 pb-6 relative">
                    <div className="flex justify-between items-start mb-4">
                        <div className="text-gray-700 text-sm font-bold text-left">
                            <p className={`${styles.topicos} mb-1`}>{bem.date}</p>
                            <p className={`text-sm font-normal ${styles.infoRegistro}`}>{bem.registro}</p>
                        </div>

                        <div className="flex flex-col items-end ml-4">
                            <h3 className={`text-xl mb-1 ${styles.topicos}`}>Localização</h3>
                            <img
                                src={bem.localizacao}
                                alt="Localização"
                                className={`mb-1 ${styles.localizacaoModal}`}
                            />
                            <div className={`text-sm text-gray-600 text-right ${styles.estados}`}>
                                {temTodosEstados ? (
                                    <p>Todo território brasileiro</p>
                                ) : (
                                    bem.estados.map((estado, index) => (
                                        <p key={index}>{estado}</p>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={`flex justify-center mb-6 ${ajusteImagem}`}>
                        <img
                            src={bem.image}
                            alt={bem.title}
                            className="max-h-[280px] object-contain"
                        />
                    </div>

                    <div className="text-center">
                        <h3 className={`text-xl mb-1 ${styles.topicos}`}>{bem.title}</h3>
                        {bem.subtitulo && (
                            <h3 className="text-sm font-semibold italic mb-4 text-[1rem]">{bem.subtitulo}</h3>
                        )}
                        <p className={`text-gray-700 text-justify ${styles.descricao}`}>{bem.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalBem;