import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../features/auth/pages/Login';
import AdminLayout from '../features/admin/components/AdminLayout';
import AdminBens from '../features/admin/pages/AdminBens';
import AdminBemForm from '../features/admin/pages/AdminBemForm';

import Home from '../features/home/pages/Home';
import Navbar from '../shared/components/navigation/navbar/Navbar';
import Footer from '../shared/components/navigation/footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Home />
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