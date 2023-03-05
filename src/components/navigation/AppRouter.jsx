import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/admin/user";
import { Route, Routes } from "react-router-dom";
import { DashboardView } from "../../pages/admin/dashboard/DashboardView";
import { LoginView } from "../../pages/LoginView";
import { SideBar } from "../sidebar/SideBar";
import { ListProfessorView } from "../../pages/admin/Professor/ListProfessorView";
import { ProfView } from "../../pages/admin/Professor/ProfView";
import { NewProfessorView } from "../../pages/admin/Professor/NewProfessorView";
import { ListUseView } from "../../pages/admin/users/ListUseView";
import { NewUserView } from "../../pages/admin/users/NewUserView";
import { EditUserView } from "../../pages/admin/users/EditUserView";
import { ListCustomeView } from "../../pages/admin/customers/ListCustomeView";
import { NewCustomerView } from "../../pages/admin/customers/NewCustomerView";
import { EditCustomerView } from "../../pages/admin/customers/EditCustomerView";
import { CustomeView } from "../../pages/admin/customers/CustomeView";
import { EditProfessorView } from "../../pages/admin/Professor/EditProfessorView";
import { UseView } from "../../pages/admin/users/UseView";
import { AccountView } from "../Account/AccountView";

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
        <Route path="/login" element={<LoginView />} />
        {/* Rutas privadas: Administrador*/}
        {user?.role?.name === "Administrador" ? (
          <Route path="/admin" element={<SideBar />}>
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="micuenta" element={<AccountView />} />
            <Route path="profesores" element={<ListProfessorView />} />
            <Route path="profesor/:id" element={<ProfView />} />
            <Route path="nuevo/profesor" element={<NewProfessorView />} />
            <Route path="editar/profesor/:id" element={<EditProfessorView />} />
            <Route path="usuarios" element={<ListUseView />} />
            <Route path="usuario/:id" element={<UseView />} />
            <Route path="nuevo/usuario" element={<NewUserView />} />
            <Route path="editar/usuario/:id" element={<EditUserView />} />
            <Route path="pacientes" element={<ListCustomeView />} />
            <Route path="paciente/:id" element={<CustomeView />} />
            <Route path="nuevo/paciente" element={<NewCustomerView />} />
            <Route path="editar/paciente/:id" element={<EditCustomerView />} />
          </Route>
        ) : null}
      </Routes>
      {/* Rutas privadas: */}
    </div>
  );
}
