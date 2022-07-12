import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Rating } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { getOneDoctorApi } from "../../../api/admin/doctor";

export function DocView() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const {
    name,
    last,
    user,
    birthday,
    address,
    gender,
    phone,
    status,
    specialties,
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
          <div className="w-full p-4 rounded-lg bg-white border border-gray-100 bg-gray-900 border-gray-800">
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
                src={
                  user?.photo && user?.photo.formats.small.url
                    ? "http://localhost:1337" + user?.photo.formats.small.url
                    : "https://img.freepik.com/free-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg?w=740"
                }
                alt="Random"
              />
            </div>
            <div className=" flex flex-col w-full">
              <p className="py-1 text-white font-normal">
                Nombre de usuario:{" "}
                <span className="text-bold">
                  {user?.username ? user?.username : "N/A"}
                </span>
              </p>
              <p className="py-1 text-white font-normal">
                Correo de usuario:{" "}
                <span className="text-bold">
                  {user?.email ? user?.email : "N/A"}
                </span>
              </p>

              <div>
                {" "}
                <p className=" text-white font-normal">
                  Puntuacion del doctor:{" "}
                  <Rating
                    className="py-0"
                    name="half-rating-read"
                    value={star ? star : "N/A"}
                    precision={0.5}
                    readOnly
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full p-4 rounded-lg bg-white border border-gray-100 bg-gray-900 border-gray-800">
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
                Direccion:{" "}
                <span className="text-bold"> {address ? address : "N/A"}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Fecha de nacimiento:
                <span className="text-bold">
                  {birthday ? birthday : "N/A"}{" "}
                </span>
              </p>
              <p className="py-1 text-white font-normal">
                Edad de Medico:{" "}
                <span className="text-bold"> {getEdad(birthday)} años</span>
              </p>
              <p className="py-1 text-white font-normal">
                Genero:{" "}
                <span className="text-bold"> {gender ? gender : "N/A"}</span>
              </p>

              <p className="py-1 text-white font-normal">
                Telefono:{" "}
                <span className="text-bold"> {phone ? phone : "N/A"}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Estatus del doctor:{" "}
                <span className="text-bold"> {status ? status : "N/A"}</span>
              </p>

              <p className="py-1 text-white font-normal">
                Especialidad del doctor:{" "}
                <span className="text-bold">
                  {" "}
                  {specialties ? specialties : "N/A"}
                </span>
              </p>

              <p className="py-1 text-white font-normal">
                Fecha de creacion:{" "}
                <span className="text-bold">
                  {" "}
                  {format(
                    new Date(created_at ? created_at : "N/A"),
                    "dd/MM/yyyy HH:mm:ss"
                  )}
                </span>
              </p>
              <p className="py-1 text-white font-normal">
                Ultima Actulizacion:{" "}
                <span className="text-bold">
                  {" "}
                  {format(
                    new Date(updated_at ? updated_at : "N/A"),
                    "dd/MM/yyyy HH:mm:ss"
                  )}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
