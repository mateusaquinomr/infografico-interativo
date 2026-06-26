import title from '@/assets/brand/titulo.svg';
import bgHero from '@/assets/backgrounds/background-inicio.jpg';
import imgLeft from '@/assets/illustrations/figura-inicio-left-side.png';
import imgRight from '@/assets/illustrations/figura-inicio-right-side.png';
import styles from './Hero.module.css';

export default function Hero() {
  // const scrollToSobre = () => {
  //   const sobreSection = document.getElementById('about');
  //   if (aboutSection) {
  //     sobreSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section
      id="hero"
      className={`relative overflow-hidden ${styles.heroSection}`}
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <img
        src={imgLeft}
        alt="Decorativa esquerda"
        className={styles.imgLeft}
      />

      <img
        src={imgRight}
        alt="Decorativa direita"
        className={styles.imgRight}
      />

      <div className="h-screen container flex flex-col items-center justify-center">
        <img src={title} alt="Imagem do título" className={styles.imageTitle} />

        {/* <p className="text-white text-center mb-8">
          Você já conhece o Livro das Formas de Expressão?
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-24">
          <button
            onClick={() => document.getElementById('livro')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#fe3f29] hover:bg-[#e63622] text-white py-2 px-6 rounded transition btns-hero"
          >
            Sim
          </button>
          <button
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#F5B117] hover:bg-[#d4a129] text-white py-2 px-6 rounded transition btns-hero"
          >
            Não
          </button>
        </div> */}
      </div>
    </section>
  );
}