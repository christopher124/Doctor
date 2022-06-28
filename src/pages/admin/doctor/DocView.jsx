import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { format, parse } from "date-fns";
import { Rating } from "@mui/material";

import useAuth from "../../../hooks/useAuth";
import { getOneDoctorApi } from "../../../api/admin/doctor";

export function DocView() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState([]);
  const {
    name,
    last,
    user,
    age,
    birthday,
    adress,
    gender,
    phone,
    condition,
    specialtie,
    star,
    created_at,
    updated_at,
  } = doctor;

  const [cargando, setCargando] = useState(true);

  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const doctor = await getOneDoctorApi(id, logout);
      setDoctor(doctor);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 3000)
    );
  }, [logout]);

  //funcion que modifica el color del pedido de acuerdo a su estado

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
  return cargando ? (
    <Spinner />
  ) : Object.keys(doctor).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Doctores</span>
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
                <span className="text-gray-600 ">Ver Doctor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="w-full lg:w-1/3">
          <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-light text-white">Doctor</div>
                <div className="text-sm text-white font-bold">
                  <span>Informacion Usuario</span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className="flex flex-row px-12 w-full">
              <img
                className="text-center rounded-full"
                src="https://source.unsplash.com/random/200x200?sig=1"
                alt="Random"
              />
            </div>
            <div className=" flex flex-col w-full">
              <p className="py-1 text-white font-normal">
                Nombre de usuario:{" "}
                <span className="text-bold">{user?.username}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Correo de usuario:{" "}
                <span className="text-bold">{user?.email}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Nombre de usuario:{" "}
                <span className="text-bold">{user?.username}</span>
              </p>
              <Rating
                className="py-1"
                name="half-rating-read"
                value={star ? star : 0}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-bold text-white">Doctor</div>
                <div className="text-sm font-bold text-white">
                  <span>Informacion del Doctor</span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className=" flex flex-col w-full">
              <p className="py-1 text-white font-normal">
                Nombre del doctor:{" "}
                <span className="text-bold">
                  {name} {last}
                </span>
              </p>

              <p className="py-1 text-white font-normal">
                Direccion: <span className="text-bold"> {adress}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Fecha de nacimiento:
                <span className="text-bold">{birthday} </span>
              </p>
              <p className="py-1 text-white font-normal">
                Edad de Medico:{" "}
                <span className="text-bold"> {getEdad(birthday)} años</span>
              </p>
              <p className="py-1 text-white font-normal">
                Genero: <span className="text-bold"> {gender}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Telefono: <span className="text-bold"> {phone}</span>
              </p>

              <div className="text-white whitespace-nowrap">
                Estatus del doctor: <span>{condition?.name}</span>
              </div>
              <p className="py-1 text-white font-normal">
                Especialidad del doctor:{" "}
                <span className="text-bold"> {specialtie?.name}</span>
              </p>

              <p className="py-1 text-white font-normal">
                Fecha de creacion:{" "}
                <span className="text-bold"> {created_at}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Ultima Actulizacion:{" "}
                <span className="text-bold"> {updated_at}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
