import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import { getOneCustomerApi } from "../../../api/admin/customer";
import Avatar from "avvvatars-react";

export function CustomeView() {
  const { id } = useParams();
  const [custumer, setCustumer] = useState({});
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const doctor = await getOneCustomerApi(id, logout);
      setCustumer(doctor);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);
  function getEdad(birthday) {
    let hoy = new Date();
    let fechaNacimiento = new Date(birthday);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }
  const {
    user,
    name,
    last,
    address,
    birthday,
    gender,
    phone,
    created_at,
    updated_at,
  } = custumer;
  console.log(custumer);
  return cargando ? (
    <Spinner />
  ) : Object.keys(custumer).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Pacientes</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  No hay Resultados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Pacientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="w-full lg:w-1/3 lg:h-1/3">
          <div className="w-full p-4 rounded-lg bg-gradient-to-r from-cyan-800 to-teal-600">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-light text-white">Paciente</div>
                <div className="text-sm text-white font-bold">
                  <span>Información del Usuario(Paciente)</span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className="justify-center flex p-9">
              <Avatar
                value={user?.username ? user?.username : "NU"}
                size={100}
              />
            </div>
            <div className=" text-center flex flex-col w-full">
              <p className="py-1 font-bold text-white font-noto">
                Nombre de Usuario:{" "}
                <span className="">
                  {user?.username ? user?.username : "N/A"}
                </span>
              </p>
              <p className="py-1 font-bold text-white font-noto">
                Correo de Usuario:{" "}
                <span className="">{user?.email ? user?.email : "N/A"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full p-4 rounded-lg bg-gradient-to-r from-cyan-800 to-teal-600">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-bold text-white">Doctor</div>
                <div className="text-sm font-bold text-white">
                  <span>Información del Doctor</span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className=" flex flex-col w-full text-center">
              <p className="py-1 font-bold text-white font-noto">
                Nombre del Doctor:{" "}
                <span className="">
                  {name} {last}
                </span>
              </p>

              <p className="py-1 font-bold text-white font-noto">
                Dirección: <span className=""> {address}</span>
              </p>
              <p className="py-1 font-bold text-white font-noto">
                Fecha de Nacimiento:{" "}
                <span className="">
                  {format(new Date(created_at), "dd/MM/yyyy")}{" "}
                </span>
              </p>
              <p className="py-1 font-bold text-white font-noto">
                Edad del Cliente:{" "}
                <span className=""> {getEdad(birthday)} años</span>
              </p>
              <p className="py-1 font-bold text-white font-noto">
                Género: <span className=""> {gender}</span>
              </p>

              <p className="py-1 font-bold text-white font-noto">
                Teléfono: <span className=""> {phone}</span>
              </p>

              <p className="py-1 font-bold text-white font-noto">
                Fecha de Creación:{" "}
                <span className="">
                  {" "}
                  {format(new Date(created_at), "dd/MM/yyyy HH:mm:ss")}
                </span>
              </p>
              <p className="py-1 font-bold text-white font-noto">
                Última Actulización:{" "}
                <span className="">
                  {" "}
                  {format(new Date(updated_at), "dd/MM/yyyy HH:mm:ss")}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
