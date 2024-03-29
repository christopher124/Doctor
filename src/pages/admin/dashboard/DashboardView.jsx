import { useState, useEffect } from "react";
import { getCountUserApi, getUserApi } from "../../../api/admin/user";
import { getCountCustomerApi } from "../../../api/admin/customer";
import { getDoctorApi, getCountDoctorApi } from "../../../api/admin/doctor";
import {
  getCountQuotesApi,
  getCountQuotesDoctorApi,
} from "../../../api/admin/quote";
import { getMeApi } from "../../../api/admin/user";
import { Spinner } from "../../../components/spinner/Spinner";
import { DoctorView } from "../../../components/Admin/doctor/DoctorView";
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
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor.slice(0, 2));
      const users = await getUserApi(logout);
      setUsers(users.slice(0, 2));
      const countDoctor = await getCountDoctorApi(logout);
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
                      Doctores
                      <div className=" p-1.5 text-xl font-bold">
                        {Doctorcount ? Doctorcount : "0"}
                      </div>
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
                      Pacientes
                      <div className="p-1.5 text-xl font-bold">
                        {Customercount ? Customercount : "0"}
                      </div>
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
                      Citas
                      <div className="p-1.5 text-xl font-bold">
                        {Quotecount ? Quotecount : "0"}
                      </div>
                    </div>
                  </div>
                  <i class="fas fa-solid fa-clipboard-list text-2xl text-white "></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-2/3">
              <BarChartDoctor />
            </div>
            <div className="w-full lg:w-1/3">
              <DoughnutChartUser />
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <div className="text-sm font-light text-white">
                      <span className="text-white">
                        <i className=" p-1 fas fa-user-md text-white text-2xl"></i>
                      </span>
                      <div className="text-base font-bold text-white">
                        LISTA DE ESPECIALISTAS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-full mb-4">
                    {cargando ? (
                      <Spinner />
                    ) : Object.keys(doctor).length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-center text-white">
                          No hay doctores registrados
                        </div>
                      </div>
                    ) : (
                      <div>
                        {doctor.map((doctor) => (
                          <DoctorView key={doctor.id} doctor={doctor} />
                        ))}
                        <div className="flex flex-col items-center justify-center h-full">
                          <Link to="/admin/doctores">
                            <button className="text-center underline text-white">
                              Ver más
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <i className="p-1 fas fa-users text-white text-2xl"></i>
                    <div className="text-base font-bold">
                      <span className="text-white">LISTA DE USUARIOS</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-full mb-4">
                    {cargando ? (
                      <Spinner />
                    ) : Object.keys(users).length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-center text-white">
                          No hay Usuarios registrados
                        </div>
                      </div>
                    ) : (
                      <div>
                        {users.map((users) => (
                          <UsersView key={users.id} users={users} />
                        ))}
                        <div className="flex flex-col items-center justify-center h-full">
                          <Link to="/admin/usuarios">
                            <button className="text-center underline text-white">
                              Ver más
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : user?.role?.name === "Doctor" ? (
        <>
          {" "}
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full ">
              {" "}
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-base font-bold text-white uppercase">
                      Citas
                      <div className="p-1.5 text-xl font-bold">
                        {QuotecountDoctor ? QuotecountDoctor : "0"}
                      </div>
                    </div>
                  </div>
                  <i class="fas fa-solid fa-clipboard-list text-2xl text-white "></i>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : user?.role?.name === "Recepción" ? (
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
                      Doctores
                      <div className=" p-1.5 text-xl font-bold">
                        {Doctorcount ? Doctorcount : "0"}
                      </div>
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
                      Pacientes
                      <div className="p-1.5 text-xl font-bold">
                        {Customercount ? Customercount : "0"}
                      </div>
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
                      Citas
                      <div className="p-1.5 text-xl font-bold">
                        {Quotecount ? Quotecount : "0"}
                      </div>
                    </div>
                  </div>
                  <i class="fas fa-solid fa-clipboard-list text-2xl text-white "></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-2/3">
              <BarChartDoctor />
            </div>
            <div className="w-full lg:w-1/3">
              <DoughnutChartUser />
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <div className="text-sm font-light text-white">
                      <span className="text-white">
                        <i className=" p-1 fas fa-user-md text-white text-2xl"></i>
                      </span>
                      <div className="text-base font-bold text-white">
                        Lista de Especialistas
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-full mb-4">
                    {cargando ? (
                      <Spinner />
                    ) : Object.keys(doctor).length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-center text-white">
                          No hay doctores registrados
                        </div>
                      </div>
                    ) : (
                      <div>
                        {doctor.map((doctor) => (
                          <DoctorView key={doctor.id} doctor={doctor} />
                        ))}
                        <div className="flex flex-col items-center justify-center h-full">
                          <Link to="/admin/doctores">
                            <button className="text-center underline text-white">
                              Ver más
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <i className="p-1 fas fa-users text-white text-2xl"></i>
                    <div className="text-base font-bold">
                      <span className="text-white">Lista de Usuarios</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full">
                  <div className="w-full mb-4">
                    {cargando ? (
                      <Spinner />
                    ) : Object.keys(users).length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-center text-white">
                          No hay Usuarios registrados
                        </div>
                      </div>
                    ) : (
                      <div>
                        {users.map((users) => (
                          <UsersView key={users.id} users={users} />
                        ))}
                        <div className="flex flex-col items-center justify-center h-full">
                          <Link to="/admin/usuarios">
                            <button className="text-center underline text-white">
                              Ver más
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-xs font-bold text-gray-500 uppercase">
          <div className="justify-center flex p-5">
            <img
              className="ui centered image w-96 h-96"
              src={Img404}
              alt="logo"
            />
          </div>
          <p className="text-center">No hay datos registrados</p>
        </div>
      )}
    </div>
  );
}
