import titulo from '@/assets/brand/titulo.svg';
import bgInicio from '@/assets/backgrounds/background-inicio.jpg';
import imgEsquerda from '@/assets/illustrations/figura-inicio-left-side.png';
import imgDireita from '@/assets/illustrations/figura-inicio-right-side.png';
import styles from './Inicio.module.css';

export default function Inicio() {
  // const scrollToSobre = () => {
  //   const sobreSection = document.getElementById('sobre');
  //   if (sobreSection) {
  //     sobreSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section
      id="inicio"
      className={`relative overflow-hidden ${styles.inicioSection}`}
      style={{ backgroundImage: `url(${bgInicio})` }}
    >
      <img
        src={imgEsquerda}
        alt="Decorativa esquerda"
        className={styles.imgEsquerda}
      />

      <img
        src={imgDireita}
        alt="Decorativa direita"
        className={styles.imgDireita}
      />

      <div className="h-screen container flex flex-col items-center justify-center">
        <img src={titulo} alt="Imagem de fundo" className={styles.imagemTitulo} />

        {/* <p className="text-white text-center mb-8">
          Você já conhece o Livro das Formas de Expressão?
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-24">
          <button
            onClick={() => document.getElementById('livro')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#fe3f29] hover:bg-[#e63622] text-white py-2 px-6 rounded transition btns-inicio"
          >
            Sim
          </button>
          <button
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#F5B117] hover:bg-[#d4a129] text-white py-2 px-6 rounded transition btns-inicio"
          >
            Não
          </button>
        </div> */}
      </div>
    </section>
  );
}