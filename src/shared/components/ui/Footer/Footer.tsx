import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container pt-8 pb-8 mx-auto px-4 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-3/5 flex flex-col md:flex-row md:justify-between gap-6">

          <div className={`flex flex-col ${styles.secaoFooter}`}>
            <h3 className="text-lg font-bold">Projeto Informativo</h3>
            <p className="text-sm">
              Este é um projeto sem fins lucrativos, desenvolvido com o propósito
              de compartilhar conhecimento e promover o acesso à informação.
            </p>
          </div>

          <div className={`flex flex-col ${styles.secaoFooter}`}>
            <h3 className="text-lg font-bold">Referências</h3>
            <p className="text-sm">
              IPHAN
            </p>
          </div>

          <div className="flex flex-col max-w-[40%]">
            <h3 className="text-lg font-bold">Desenvolvimento</h3>
            <p className="text-sm text-white">
              Mateus de Aquino (Desenvolvedor e Designer UI)
              <br />
              Pâmela de Castro (Ilustradora)
            </p>
          </div>

        </div>

        <div className="w-full md:w-2/5 flex justify-end mt-6 md:mt-0">
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}