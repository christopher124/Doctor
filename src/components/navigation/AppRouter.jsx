import { Route, Routes } from "react-router-dom";
import { ContactView } from "../../pages/ContactView";
import { DashboardView } from "../../pages/admin/dashboard/DashboardView";
import { HomeView } from "../../pages/HomeView";
import { LoginView } from "../../pages/LoginView";
import { NotFound } from "../../pages/NotFound";
import { QuotesView } from "../../pages/QuotesView";
import { ServicesView } from "../../pages/ServicesView";
import { UsView } from "../../pages/UsView";
import { ClientsView } from "../../pages/admin/client/ClientsView";
import { SideBar } from "../sidebar/SideBar";
import { UserView } from "../../pages/admin/dashboard/UserView";
export function AppRouter() {
  return (
    <div>
      <Routes>
        {/* Rutas publicas: */}
        <Route path="/" element={<HomeView />} />
        <Route path="/servicios" element={<ServicesView />} />
        <Route path="/nosotros" element={<UsView />} />
        <Route path="/contacto" element={<ContactView />} />
        <Route path="/citas" element={<QuotesView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="*" element={<NotFound />} />
        {/* Rutas privadas: */}
        <Route path="/admin" element={<SideBar />}>
          <Route path="dashboard" element={<DashboardView />} />
          <Route path="clientes" element={<ClientsView />} />
          <Route path="usuario" element={<UserView />} />
        </Route>
      </Routes>
      {/* Rutas privadas: */}
    </div>
  );
}
