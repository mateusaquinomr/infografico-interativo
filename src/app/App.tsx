import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../features/auth/pages/Login';
import AdminLayout from '../features/admin/components/AdminLayout';
import AdminBens from '../features/admin/pages/AdminBens';
import AdminBemForm from '../features/admin/pages/AdminBemForm';

import Inicio from '../pages/Inicio/Inicio';
import Sobre from '../pages/Sobre/Sobre';
import Conceitos from '../pages/Conceitos/Conceitos';
import FormasExpressaoPage from '../features/livros/pages/FormasExpressaoPage';
import Header from '../shared/components/navigation/Header/Header';
import Footer from '../shared/components/ui/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <>
            <Header />
            <main>
              <Inicio />
              <Sobre />
              <Conceitos />
              <FormasExpressaoPage />
            </main>
            <Footer />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="bens" element={<AdminBens />} />
          <Route path="bens/novo" element={<AdminBemForm />} />
          <Route path="bens/editar/:id" element={<AdminBemForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}