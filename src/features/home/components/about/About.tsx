import imgAbout from '@/assets/illustrations/img-sobre.svg';
import divisorBandeirinhas from '@/assets/illustrations/divisor-bandeirinhas.svg';
import styles from './About.module.css';

export default function About() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToOquee = () => {
  //   const oqueeSection = document.getElementById('oquee');
  //   if (oqueeSection) {
  //     oqueeSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <img
            src={imgAbout}
            alt="Imagem ilustrativa"
            className={styles.imgAbout}
          />

          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              SOBRE O PROJETO
            </h1>
            <p className={styles.description}>
              O projeto tem como objetivo permitir explorar as <strong>24 expressões culturais</strong> registradas no <strong>Livro das Formas de Expressão</strong>, promovendo o conhecimento e a valorização do patrimônio imaterial brasileiro.
              O Livro reúne <strong>manifestações como músicas, danças, artes visuais e performances</strong> que integram a identidade de diferentes grupos sociais.
              <br /><br />
              Essas expressões são <strong>reconhecidas pelo IPHAN por meio do Processo de Registro</strong>, instrumento voltado ao reconhecimento do patrimônio imaterial - ou seja, tudo aquilo que não é um objeto físico, mas que existe nas práticas, saberes, histórias e tradições transmitidas de geração em geração.
            </p>
          </div>
        </div>

        {/* <div className={styles.setaContainer}>
          <h3 className={styles.setaTexto}>
            MAS AFINAL, O QUE TUDO ISSO SIGNIFICA?
          </h3>
          <button
            onClick={scrollToOquee}
            aria-label="Ir para a seção O que é"
          >
            <img
              src={seta}
              alt="Seta para baixo"
              className={styles.seta}
            />
          </button>
        </div> */}

        <img
          src={divisorBandeirinhas}
          alt="Divisor com bandeirinhas"
          className={styles.divisor}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}