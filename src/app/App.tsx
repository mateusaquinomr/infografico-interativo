import Header from "../shared/components/navigation/Header/Header";
import Footer from "../shared/components/ui/Footer/Footer";

import Inicio from "../pages/Inicio/Inicio";
import Sobre from "../pages/Sobre/Sobre";
import Conceitos from "../pages/Conceitos/Conceitos";
import FormasExpressaoPage from "../features/livros/pages/FormasExpressaoPage";

export default function App() {
  return (
    <div className="font-sans text-base leading-relaxed text-gray-800">
      <Header />

      <main>
        <Inicio />
        <Sobre />
        <Conceitos />
        <FormasExpressaoPage />
      </main>

      <Footer />
    </div>
  );
}