import { useEffect, useState } from "react";
import { BarChartDoctor } from "../../../components/Charts/BarChartDoctor";
import { DoughnutChartDoctor } from "../../../components/Charts/DoughnutChartDoctor";
import { BarChartCustomer } from "../../../components/Charts/BarChartCustomer";
import { DoughnutChartDoctorGender } from "../../../components/Charts/DoughnutChartDoctorGender";
import { getMeApi } from "../../../api/admin/user";
import useAuth from "../../../hooks/useAuth";
import { Spinner } from "../../../components/spinner/Spinner";
import Img404 from "../../../assets/img/story-404.svg";

export function ReportView() {
  const [user, setUser] = useState({});
  const { auth, logout } = useAuth();
  const [cargando, setCargando] = useState(true);
  console.log(user);
  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
  }, [auth, logout]);
  return cargando ? (
    <Spinner />
  ) : <div className="w-full min-h-screen p-4">
    <div className="w-full mb-6 pt-3">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="text-base font-bold text-gray-500 uppercase">
            <span className="text-gray-600">Vista General</span>
            <div className="text-xl font-bold">
              <span className="text-gray-600">Doctores</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs font-bold text-gray-500 uppercase">
        <div className="justify-center flex p-5">
          <img
            className="ui centered image w-96 h-96"
            src={Img404}
            alt="logo"
          />
        </div>
        <p className="text-center">No se encontraron resultados</p>
      </div>
    </div>
  </div> ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="font-mont  text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="font-mont text-gray-600">Reportes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full lg:w-2/3">
            <BarChartDoctor />
          </div>
          <div className="w-full lg:w-1/3">
            <DoughnutChartDoctorGender />
          </div>
        </div>
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full lg:w-2/3">
            <BarChartCustomer />
          </div>
          <div className="w-full lg:w-1/3">
            <DoughnutChartDoctor />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
