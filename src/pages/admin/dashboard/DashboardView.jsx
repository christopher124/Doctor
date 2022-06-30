import { useState, useEffect } from "react";
import { getCountUserApi } from "../../../api/admin/user";
import { getDoctorApi, getCountDoctorApi } from "../../../api/admin/doctor";
import { Spinner } from "../../../components/spinner/Spinner";
import { DoctorView } from "../../../components/Admin/doctor/DoctorView";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

export function DashboardView() {
  const [Usercount, setUserCount] = useState(<Spinner />);
  const [Doctorcount, setDoctorCount] = useState(<Spinner />);
  const [cargando, setCargando] = useState(true);

  const [doctor, setDoctor] = useState([]);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const countUser = await getCountUserApi(logout);
      setUserCount(countUser);
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor.slice(0, 2));
      const countDoctor = await getCountDoctorApi(logout);
      setDoctorCount(countDoctor);
      console.log(doctor);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      })
    );
  }, [auth, logout]);

  return (
    <>
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
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full lg:w-1/4">
            <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-800 border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="font-mont font-semibold  text-xs  text-white uppercase">
                    Usuarios
                    <div className=" font-mont  p-1.5 text-xl font-bold">
                      {Usercount}
                    </div>
                  </div>
                </div>
                <i className="fas fa-users text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-800 border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-mont text-xs font-bold text-white uppercase">
                    Doctores
                    <div className=" p-1.5 text-xl font-bold">
                      {Doctorcount ? Doctorcount : "0"}
                    </div>
                  </div>
                </div>
                <i className="fas fa-users text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            {" "}
            <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-800 border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-white uppercase">
                    Usuarios
                    <div className="p-1.5 text-xl font-bold">
                      {Usercount ? Usercount : "0"}
                    </div>
                  </div>
                </div>
                <i className="fas fa-users text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            {" "}
            <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-800 border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-white uppercase">
                    Usuarios
                    <div className="p-1.5 text-xl font-bold">{Usercount}</div>
                  </div>
                </div>
                <i className="fas fa-users text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full lg:w-1/2">
            <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-900 border-gray-800">
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col">
                  <div className="text-sm font-light text-white">
                    <span className="text-white">
                      <i className="fas fa-chart-bar text-white"></i>
                    </span>
                    <div className="text-ls font-bold text-white">
                      Lista de Especialistas
                    </div>
                  </div>
                </div>
                <div className="relative inline-block text-left z-10">
                  <Link
                    to="/admin/doctores"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-900  rounded-full bg-gray-900 text-white hover:bg-gray-100 hover:bg-gray-800 focus:outline-none"
                  >
                    <i className="fas fa-solid fa-eye"></i>
                  </Link>
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
                          <button className="text-center underline  text-white">
                            Ver mas
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
            <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-900 border-gray-800">
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col">
                  <div className="text-sm font-light text-white">
                    Inventario
                  </div>
                  <div className="text-sm font-bold">
                    <span className="text-white"> Lista de inventario</span>
                  </div>
                </div>
                <div className="relative inline-block text-left z-10">
                  <Link
                    to="/admin/inventario"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-900  rounded-full bg-gray-900 text-white hover:bg-gray-100 hover:bg-gray-800 focus:outline-none"
                  >
                    <i class="fas fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div>
                  <div className="recharts-responsive-container">
                    <div className="recharts-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full p-4 rounded-lg  border border-gray-100 bg-gray-900 border-gray-800"></div>
        </div>
      </div>
    </>
  );
}
