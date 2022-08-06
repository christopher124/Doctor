import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/admin/user";
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
import { EditDoctorView } from "../../pages/admin/doctor/EditDoctorView";
import { UseView } from "../../pages/admin/users/UseView";
import { ListQuotView } from "../../pages/admin/quotes/ListQuotView";
import { NewQuotesView } from "../../pages/admin/quotes/NewQuotesView";
import { AccountView } from "../Account/AccountView";
import { ListPrescripView } from "../../pages/admin/prescription/ListPrescripView";
import { NewPrescriptionView } from "../../pages/admin/prescription/NewPrescriptionView";
import { PrescripView } from "../../pages/admin/prescription/PrescripView";
import { EditPrescriptionView } from "../../pages/admin/prescription/EditPrescriptionView";
import { PrivacityView } from "../../pages/admin/PrivacityView";
import { MapsView } from "../../pages/admin/MapsView";
import { ReportView } from "../../pages/admin/reports/ReportView";
import { EditQuotesView } from "../../pages/admin/quotes/EditQuotesView";
import { QuotView } from "../../pages/admin/quotes/QuotView";

export function AppRouter() {
  const [user, setUser] = useState({});
  const { auth, logout } = useAuth();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    (async () => {
      const user = await getMeApi(logout);
      setUser(user);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 50000)
    );
  }, [auth]);

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
        <Route path="/privacidad" element={<PrivacityView />} />
        <Route path="/ubicacion" element={<MapsView />} />
        <Route path="*" element={<NotFound />} />
        {/* Rutas privadas: Administrador*/}
        {user?.role?.name === "Administrador" ? (
          <Route path="/admin" element={<SideBar />}>
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="reportes" element={<ReportView />} />
            <Route path="micuenta" element={<AccountView />} />
            <Route path="doctores" element={<ListDocView />} />
            <Route path="doctor/:id" element={<DocView />} />
            <Route path="nuevo/doctor" element={<NewDoctorView />} />
            <Route path="editar/doctor/:id" element={<EditDoctorView />} />
            <Route path="usuarios" element={<ListUseView />} />
            <Route path="usuario/:id" element={<UseView />} />
            <Route path="nuevo/usuario" element={<NewUserView />} />
            <Route path="editar/usuario/:id" element={<EditUserView />} />
            <Route path="pacientes" element={<ListCustomeView />} />
            <Route path="paciente/:id" element={<CustomeView />} />
            <Route path="nuevo/paciente" element={<NewCustomerView />} />
            <Route path="editar/paciente/:id" element={<EditCustomerView />} />
            <Route path="citas" element={<ListQuotView />} />
            <Route path="cita/:id" element={<QuotView />} />
            <Route path="nueva/cita" element={<NewQuotesView />} />
            <Route path="editar/cita/:id" element={<EditQuotesView />} />
            <Route path="recetas" element={<ListPrescripView />} />
            <Route path="nueva/receta" element={<NewPrescriptionView />} />
            <Route path="receta/:id" element={<PrescripView />} />
            <Route
              path="editar/receta/:id"
              element={<EditPrescriptionView />}
            />
          </Route>
        ) : user?.role?.name === "Doctor" ? (
          <Route path="/admin" element={<SideBar />}>
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="micuenta" element={<AccountView />} />
            <Route path="citas" element={<ListQuotView />} />
            <Route path="cita/:id" element={<QuotView />} />
            <Route path="nueva/cita" element={<NewQuotesView />} />
            <Route path="editar/cita/:id" element={<EditQuotesView />} />
            <Route path="recetas" element={<ListPrescripView />} />
            <Route path="receta/:id" element={<PrescripView />} />
            <Route path="nueva/receta" element={<NewPrescriptionView />} />
            <Route
              path="editar/receta/:id"
              element={<EditPrescriptionView />}
            />
            <Route path="doctores" element={<ListDocView />} />
            <Route path="editar/doctor/:id" element={<EditDoctorView />} />
            <Route path="doctores" element={<ListDocView />} />
            <Route path="doctor/:id" element={<DocView />} />
          </Route>
        ) : user?.role?.name === "Recepción" ? (
          <Route path="/admin" element={<SideBar />}>
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="micuenta" element={<AccountView />} />
            <Route path="doctores" element={<ListDocView />} />
            <Route path="doctor/:id" element={<DocView />} />
            <Route path="nuevo/doctor" element={<NewDoctorView />} />
            <Route path="editar/doctor/:id" element={<EditDoctorView />} />
            <Route path="usuarios" element={<ListUseView />} />
            <Route path="usuario/:id" element={<UseView />} />
            <Route path="nuevo/usuario" element={<NewUserView />} />
            <Route path="editar/usuario/:id" element={<EditUserView />} />
            <Route path="pacientes" element={<ListCustomeView />} />
            <Route path="paciente/:id" element={<CustomeView />} />
            <Route path="nuevo/paciente" element={<NewCustomerView />} />
            <Route path="editar/paciente/:id" element={<EditCustomerView />} />
            <Route path="citas" element={<ListQuotView />} />
            <Route path="cita/:id" element={<QuotView />} />
            <Route path="nueva/cita" element={<NewQuotesView />} />
            <Route path="editar/cita/:id" element={<EditQuotesView />} />
            <Route path="recetas" element={<ListPrescripView />} />
            <Route path="receta/:id" element={<PrescripView />} />
            <Route path="nueva/receta" element={<NewPrescriptionView />} />
            <Route
              path="editar/receta/:id"
              element={<EditPrescriptionView />}
            />
          </Route>
        ) : null}
      </Routes>
      {/* Rutas privadas: */}
    </div>
  );
}
