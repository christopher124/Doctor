import { Route, Routes } from "react-router-dom";
import { ContactView } from "../../pages/ContactView";
import { DashboardView } from "../../pages/admin/dashboard/DashboardView";
import { HomeView } from "../../pages/HomeView";
import { LoginView } from "../../pages/LoginView";
import { NotFound } from "../../pages/NotFound";
import { QuotesView } from "../../pages/QuotesView";
import { ServicesView } from "../../pages/ServicesView";
import { UsView } from "../../pages/UsView";
import { SideBar } from "../sidebar/SideBar";
import { UserView } from "../../pages/admin/dashboard/UserView";
import { ListDocView } from "../../pages/admin/doctor/ListDocView";
import { DocView } from "../../pages/admin/doctor/DocView";
import { NewDoctorView } from "../../pages/admin/doctor/NewDoctorView";
import { ListUseView } from "../../pages/admin/users/ListUseView";
import { NewUserView } from "../../pages/admin/users/NewUserView";
import { EditUserView } from "../../pages/admin/users/EditUserView";
import { ListCustomeView } from "../../pages/admin/customers/ListCustomeView";
import { NewCustomerView } from "../../pages/admin/customers/NewCustomerView";
import { EditCustomerView } from "../../pages/admin/customers/EditCustomerView";
import { CustomeView } from "../../pages/admin/customers/CustomeView";
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
          <Route path="doctores" element={<ListDocView />} />
          <Route path="doctor/:id" element={<DocView />} />
          <Route path="nuevo/doctor" element={<NewDoctorView />} />
          <Route path="usuarios" element={<ListUseView />} />
          <Route path="nuevo/usuario" element={<NewUserView />} />
          <Route path="editar/usuario/:id" element={<EditUserView />} />
          <Route path="clientes" element={<ListCustomeView />} />
          <Route path="cliente/:id" element={<CustomeView />} />
          <Route path="nuevo/cliente" element={<NewCustomerView />} />
          <Route path="editar/cliente/:id" element={<EditCustomerView />} />
        </Route>
      </Routes>
      {/* Rutas privadas: */}
    </div>
  );
}
