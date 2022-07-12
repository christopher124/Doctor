import { useState, useEffect } from "react";
export function DoctorView({ doctor }) {
  const { name, last, address, status, phone, specialties, user } = doctor;

  const [estadoDoctor, setEstadoDoctor] = useState(status);
  const [clase, setClase] = useState("");

  useEffect(() => {
    if (estadoDoctor) {
      setEstadoDoctor(estadoDoctor);
    }
    claseDoctor();
  }, [estadoDoctor]);
  const claseDoctor = () => {
    if (status === "Disponible") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === "En consulta") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-yellow-400 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === null) {
      setClase(" text-white whitespace-nowrap ");
    } else {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-red-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    }
  };
  return (
    <>
      <div className="flex items-center justify-start  space-x-4 ">
        <div className="shrink-0 w-8">
          <img
            className="h-8 w-full shadow-lg rounded-full ring"
            src={
              user?.photo && user?.photo.formats.small.url
                ? "http://localhost:1337" + user?.photo.formats.small.url
                : "https://img.freepik.com/free-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg?w=740"
            }
            alt="icon"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-1 text-sm font-bold text-white">
            Nombre y Apelido: {name + " " + last ? name + " " + last : "N/A"}
          </div>

          <div className=" font-bold p-1 text-sm text-white">
            Direccion: {address ? address : "N/A"}
          </div>
          <div className=" font-bold p-1 text-sm text-white">
            Telefono: {phone ? phone : "N/A"}
          </div>
          <div className=" font-bold p-1 text-sm text-white">
            Especialidad: {specialties ? specialties : "N/A"}
          </div>

          <div className="p-1 text-white whitespace-nowrap">
            <span className={`${clase} `}>
              Estatus: {status ? status : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
