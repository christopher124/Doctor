import { Route, Routes } from "react-router-dom";
import { ContactView } from "../../pages/ContactView";
import { HomeView } from "../../pages/HomeView";
import { LoginView } from "../../pages/LoginView";
import { NotFound } from "../../pages/NotFound";
import { ServicesView } from "../../pages/ServicesView";
import { UsView } from "../../pages/UsView";
export function AppRouter() {
  return (
    <div>
      <Routes>
        {/* Rutas publicas: */}
        <Route path="/" element={<HomeView />} />
        <Route path="/servicios" element={<ServicesView />} />
        <Route path="/nosotros" element={<UsView />} />
        <Route path="/contacto" element={<ContactView />} />
        <Route path="/login" element={<LoginView />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
