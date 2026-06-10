import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          <div className="md:col-span-3">
            <h3 className="text-lg font-bold">Projeto Informativo</h3>
            <p className="text-sm">
              Este é um projeto sem fins lucrativos, desenvolvido com o propósito
              de compartilhar conhecimento e promover o acesso à informação.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold">Referências</h3>
            <p className="text-sm">IPHAN</p>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-lg font-bold">Desenvolvimento</h3>
            <p className="text-sm">

              <a
                href="https://github.com/mateusaquinomr"
                className="text-white hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mateus de Aquino (Desenvolvedor Full-Stack e Designer UI)
              </a>

              <br />

              <a
                href="https://www.instagram.com/pameladecastro.ilustra/"
                className="text-white hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pâmela de Castro (Ilustradora e Artista)
              </a>

            </p>
          </div>

          <div className="md:col-span-2 md:text-right">
            <p>Todos os direitos reservados</p>
          </div>

        </div>
      </div>
    </footer>
  );
}