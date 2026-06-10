import patrimonio from '@/assets/backgrounds/background-card-patrimonio.jpg';
import livro from '@/assets/backgrounds/background-card-livro.jpg';
import registro from '@/assets/backgrounds/background-card-registro.jpg';
import { useState } from 'react';
import styles from './Conceitos.module.css';

const ComponentBox = ({
  backgroundImage,
  title,
  description,
  borderColor = "transparent",
  className = "",
}: {
  backgroundImage?: string;
  title: string;
  description: string;
  borderColor?: string;
  className?: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`${styles.cardInner} ${flipped ? styles.flipped : ''}`}
      >
        <div
          className={styles.cardFront}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            border: `15px solid ${borderColor}`,
          }}
        >
          <h3 className={styles.cardTitle}>
            {title}
          </h3>
        </div>

        <div
          className={styles.cardBack}
          style={{ border: `15px solid ${borderColor}` }}
        >
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Conceitos() {
  return (
    <section id="conceitos" className={styles.conceitosSection}>
      <div className="container mx-auto">
        <h1 className={styles.titulo}>CONCEITOS BÁSICOS</h1>
        <div className={styles.cardsContainer}>
          <ComponentBox
            title="PATRIMÔNIO CULTURAL BRASILEIRO"
            description="O Patrimônio Cultural Brasileiro é o conjunto de bens que representam a história, a memória e a identidade do povo brasileiro. Esses bens podem ser materiais, como monumentos, ou imateriais, como expressões culturais."
            backgroundImage={patrimonio}
            borderColor="#f7a453"
            className="md:mt-8"
          />
          <ComponentBox
            title="LIVRO DAS FORMAS DE EXPRESSÃO"
            description="O Livro das Formas de Expressão é o inventário do IPHAN que registra e reúne diversas manifestações culturais brasileiras. Ele cataloga manifestações literárias, musicais, plásticas, cênicas e lúdicas, reconhecidas por sua importância para a identidade e a memória coletiva do país."
            backgroundImage={livro}
            borderColor="#f7a453"
          />
          <ComponentBox
            title="REGISTRO"
            description="O Registro é o instrumento oficial criado pelo IPHAN para reconhecer, proteger e preservar os bens culturais imateriais do Brasil. Diferentemente do tombamento, que protege bens materiais como prédios, o Registro reconhece manifestações culturais, como tradições, danças e outras expressões vivas"
            backgroundImage={registro}
            borderColor="#f7a453"
            className="md:mt-8"
          />
        </div>
      </div>
    </section>
  );
}