import { useState, useEffect } from "react";
import { getCountUserApi } from "../../../api/admin/user";
import { getDoctorApi, getCountDoctorApi } from "../../../api/admin/doctor";
import { Spinner } from "../../../components/spinner/Spinner";
import { DoctorView } from "../../../components/form/DoctorView";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

export function DashboardView() {
  const [Usercount, setUserCount] = useState(<Spinner />);
  const [Doctorcount, setDoctorCount] = useState(<Spinner />);
  const [doctor, setDoctor] = useState([]);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const countUser = await getCountUserApi(logout);
      setUserCount(countUser);
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor);
      const countDoctor = await getCountDoctorApi(logout);
      setDoctorCount(countDoctor);
    })();
  }, [auth, logout]);

  return (
    <>
      <div className="w-full min-h-screen p-4">
        <div className="w-full mb-6 pt-3">
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex flex-col">
              <div className="text-xs font-bold text-gray-500 uppercase">
                <span className="text-gray-600">Vista General</span>
                <div className="text-xl font-bold">
                  <span className="text-gray-600">Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full lg:w-1/4">
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-white uppercase">
                    Usuarios
                    <div className=" p-1.5 text-xl font-bold">{Usercount}</div>
                  </div>
                </div>
                <i className="fas fa-users text-white"></i>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-white uppercase">
                    Doctores
                    <div className="p-1.5 text-xl font-bold">
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
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-800">
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
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-800">
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
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col">
                  <div className="text-sm font-light text-white">
                    <span className="text-white">
                      <i className="fas fa-chart-bar text-white"></i>
                    </span>
                    <div className="text-ls font-bold text-white">
                      Estatus Citas Médicas
                    </div>
                  </div>
                </div>
                <div className="relative inline-block text-left z-10">
                  <Link
                    to="/admin/clientes"
                    className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white rounded-full dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  >
                    <i class="fas fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-full mb-4">
                  {doctor.map((doctor) => (
                    <DoctorView key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col">
                  <div className="text-sm font-light text-gray-500">Ventas</div>
                  <div className="text-sm font-bold">
                    <span className="text-gray-500"> Este mes</span>
                  </div>
                </div>
                <div className="relative inline-block text-left z-10">
                  <button className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white rounded-full dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-lg stroke-current"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
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
      </div>
    </>
  );
}
