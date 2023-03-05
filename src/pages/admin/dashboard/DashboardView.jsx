import { useState, useEffect } from "react";
import { getCountUserApi, getUserApi } from "../../../api/admin/user";
import { getCountCustomerApi } from "../../../api/admin/customer";
import {
  getProfesorsApi,
  getCountProfesorsApi,
} from "../../../api/admin/profesors";
import {
  getCountQuotesApi,
  getCountQuotesDoctorApi,
} from "../../../api/admin/quote";
import { getMeApi } from "../../../api/admin/user";
import { Spinner } from "../../../components/spinner/Spinner";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { UsersView } from "../../../components/Admin/user/UsersView";
import { DoughnutChartUser } from "../../../components/Charts/DoughnutChartUser";
import { BarChartDoctor } from "../../../components/Charts/BarChartDoctor";
import Img404 from "../../../assets/img/story-404.svg";

export function DashboardView() {
  const [user, setUser] = useState({});
  const [Usercount, setUserCount] = useState(<Spinner />);
  const [Doctorcount, setDoctorCount] = useState(<Spinner />);
  const [Customercount, setCustomerCount] = useState(<Spinner />);
  const [Quotecount, setQuoteCount] = useState(<Spinner />);
  const [QuotecountDoctor, setQuoteCountDoctor] = useState(<Spinner />);
  const [cargando, setCargando] = useState(true);

  const [doctor, setDoctor] = useState([]);
  const [users, setUsers] = useState([]);
  const { auth, logout } = useAuth();
  localStorage.setItem("idUser", user?.id);
  localStorage.getItem("idUser", user?.id);
  localStorage.removeItem(user?.id);
  useEffect(() => {
    (async () => {
      const user = await getMeApi(logout);
      setUser(user);
      const countUser = await getCountUserApi(logout);
      setUserCount(countUser);
      const doctor = await getProfesorsApi(logout);
      setDoctor(doctor.slice(0, 2));
      const users = await getUserApi(logout);
      setUsers(users.slice(0, 2));
      const countDoctor = await getCountProfesorsApi(logout);
      setDoctorCount(countDoctor);
      const countCustumer = await getCountCustomerApi(logout);
      setCustomerCount(countCustumer);
      const countQuote = await getCountQuotesApi(logout);
      setQuoteCount(countQuote);
      const countQuoteDoctor = await getCountQuotesDoctorApi(user?.id, logout);
      setQuoteCountDoctor(countQuoteDoctor);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 3400)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="font-mont  text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="font-mont text-gray-600">
                  Tablero principal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cargando ? (
        <Spinner />
      ) : user?.role?.name === "Administrador" ? (
        <>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/4">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="font-mont font-semibold text-base text-white uppercase">
                      Usuarios
                      <div className=" font-mont  p-1.5 text-xl font-bold">
                        {Usercount ? Usercount : "0"}
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <div className="w-full p-4 rounded-lg  border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-mont text-base font-bold text-white uppercase">
                      Profesores
                      <div className=" p-1.5 text-xl font-bold"></div>
                    </div>
                  </div>
                  <i className="fas fa-user-md text-white text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              {" "}
              <div className="w-full p-4 rounded-lg  border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-base font-bold text-white uppercase">
                      Estudiantes
                      <div className="p-1.5 text-xl font-bold"></div>
                    </div>
                  </div>
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              {" "}
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-base font-bold text-white uppercase">
                      Cursos
                      <div className="p-1.5 text-xl font-bold"></div>
                    </div>
                  </div>
                  <i class="fas fa-solid fa-clipboard-list text-2xl text-white "></i>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
