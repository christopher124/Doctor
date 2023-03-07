import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/admin/user";
import { Route, Routes } from "react-router-dom";
import { DashboardView } from "../../pages/admin/dashboard/DashboardView";
import { LoginView } from "../../pages/LoginView";
import { SideBar } from "../sidebar/SideBar";
// Modelos de profesores

import { ListProfessorView } from "../../pages/admin/Professor/ListProfessorView";
import { ProfView } from "../../pages/admin/Professor/ProfView";
import { NewProfessorView } from "../../pages/admin/Professor/NewProfessorView";
import { EditProfessorView } from "../../pages/admin/Professor/EditProfessorView";
//****** */
// Modelos de usuarios
import { ListUseView } from "../../pages/admin/users/ListUseView";
import { NewUserView } from "../../pages/admin/users/NewUserView";
import { EditUserView } from "../../pages/admin/users/EditUserView";
import { UseView } from "../../pages/admin/users/UseView";
//************************* */

// Modelos de estudiantes
import { ListStudenView } from "../../pages/admin/Student/ListStudenView";
import { NewStudentView } from "../../pages/admin/Student/NewStudentView";
import { EditStudentsView } from "../../pages/admin/Student/EditStudentsView";
import { StudenView } from "../../pages/admin/Student/StudenView";
//********************* */

// Modelos de cuenta
import { AccountView } from "../Account/AccountView";
//************ */

// Modelos de cursos
import { CoursView } from "../../pages/admin/Courses/CoursView";
import { EditCourseView } from "../../pages/admin/Courses/EditCourseView";
import { ListCourseView } from "../../pages/admin/Courses/ListCourseView";
import { NewCourseView } from "../../pages/admin/Courses/NewCourseView";
//***************** */
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
            <Route path="estudiantes" element={<ListStudenView />} />
            <Route path="estudiante/:id" element={<StudenView />} />
            <Route path="nuevo/estudiante" element={<NewStudentView />} />
            <Route
              path="editar/estudiante/:id"
              element={<EditStudentsView />}
            />
            <Route path="cursos" element={<ListCourseView />} />
            <Route path="curso/:id" element={<CoursView />} />
            <Route path="nuevo/curso" element={<NewCourseView />} />
            <Route path="editar/curso/:id" element={<EditCourseView />} />
          </Route>
        ) : null}
      </Routes>
      {/* Rutas privadas: */}
    </div>
  );
}
