import { Bem } from '../../types/Bem';
import styles from './CardBem.module.css';

interface CardBemProps {
    bem: Bem;
    onClick: () => void;
}

export default function CardBem({ bem, onClick }: CardBemProps) {
    return (
        <div
            className={`relative bg-white p-4 rounded shadow 
            cursor-pointer hover:bg-gray-50 hover:shadow-lg transition-transform 
            transform hover:scale-105 duration-300 ease-in-out 
            aspect-square flex flex-col justify-center overflow-hidden 
            ${styles.expressao}`}
            onClick={onClick}
        >
            <div className="flex-grow flex items-center justify-center z-10">
                <img
                    src={bem.image}
                    alt={bem.title}
                    className="h-[65%] object-contain"
                />
            </div>

            <div className={`absolute top-4 left-4 font-bold z-20 ${styles.registro}`}>
                {bem.date}
            </div>

            <div className="absolute top-4 right-4 flex flex-col items-center z-20">
                <img
                    src={bem.localizacao}
                    alt="Localização"
                    className={`${styles.localizacao} mb-1`}
                />
            </div>

            <div className={`relative text-center mt-4 z-20 ${styles.expressaoTitulo}`}>
                <h3 className="mb-1 sm:text-lg font-bold px-2 leading-snug">
                    {bem.title}
                </h3>
            </div>
        </div>
    );
}