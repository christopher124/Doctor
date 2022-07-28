import { useState, useEffect } from "react";
import { getCountUserApi, getUserApi } from "../../../api/admin/user";
import { getCountCustomerApi } from "../../../api/admin/customer";
import { getDoctorApi, getCountDoctorApi } from "../../../api/admin/doctor";
import { getCountQuoteApi } from "../../../api/admin/quote";
import { getMeApi } from "../../../api/admin/user";
import { Spinner } from "../../../components/spinner/Spinner";
import { DoctorView } from "../../../components/Admin/doctor/DoctorView";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { UsersView } from "../../../components/Admin/user/UsersView";
import { DoughnutChartUser } from "../../../components/Charts/DoughnutChartUser";

export function DashboardView() {
  const [user, setUser] = useState({});
  const [Usercount, setUserCount] = useState(<Spinner />);
  const [Doctorcount, setDoctorCount] = useState(<Spinner />);
  const [Customercount, setCustomerCount] = useState(<Spinner />);
  const [Quotecount, setQuoteCount] = useState(<Spinner />);

  const [cargando, setCargando] = useState(true);

  const [doctor, setDoctor] = useState([]);
  const [users, setUsers] = useState([]);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
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
      const countQuote = await getCountQuoteApi(logout);
      setQuoteCount(countQuote);
      const me = await getMeApi(logout);
      setUser(me);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 2400)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="font-mont  text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="font-mont text-gray-600">Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cargando ? (
        <Spinner />
      ) : user?.role?.name === "Admin" ? (
        <>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/4">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="font-mont font-semibold text-xs text-white uppercase">
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
                    <div className="text-mont text-xs font-bold text-white uppercase">
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
                    <div className="text-xs font-bold text-white uppercase">
                      Clientes Registrados
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
                    <div className="text-xs font-bold text-white uppercase">
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
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700"></div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <DoughnutChartUser />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <div className="text-sm font-light text-white">
                      <span className="text-white">
                        <i className=" p-1 fas fa-user-md text-white text-xl"></i>
                      </span>
                      <div className="text-ls font-bold text-white">
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
                    <i className="p-1 fas fa-users text-white text-xl"></i>
                    <div className="text-sm font-bold">
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
      ) : user?.role?.name === "Doctor" ? (
        <>
          {" "}
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full ">
              {" "}
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-xs font-bold text-white uppercase">
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
        </>
      ) : user?.role?.name === "Recepción" ? (
        <>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/4">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <div className="font-mont font-semibold text-xs text-white uppercase">
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
                    <div className="text-mont text-xs font-bold text-white uppercase">
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
                    <div className="text-xs font-bold text-white uppercase">
                      Clientes Registrados
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
                    <div className="text-xs font-bold text-white uppercase">
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
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700"></div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <DoughnutChartUser />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="w-full lg:w-1/2">
              <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
                <div className="flex flex-row items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <div className="text-sm font-light text-white">
                      <span className="text-white">
                        <i className=" p-1 fas fa-user-md text-white text-xl"></i>
                      </span>
                      <div className="text-ls font-bold text-white">
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
                    <i className="p-1 fas fa-users text-white text-xl"></i>
                    <div className="text-sm font-bold">
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
      ) : null}
    </div>
  );
}
