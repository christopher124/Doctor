import { useState, useEffect } from "react";
import Avvvatars from "avvvatars-react";

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
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-white rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === "En consulta") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-orange-400 text-white rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === null) {
      setClase(" text-white whitespace-nowrap ");
    } else {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-red-700 text-white rounded-lg text-xs px-2 py-0 "
      );
    }
  };
  return (
    <>
      <div className="flex items-center justify-start space-x-4 ">
        <div className="shrink-0 w-8">
          <Avvvatars value={user?.username ? user?.username : "NU"} size={40} />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-1 text-sm font-bold text-white">
            Nombre y Apelido: {name + " " + last ? name + " " + last : "N/A"}
          </div>

          <div className=" font-bold p-1 text-sm text-white">
            Dirección: {address ? address : "N/A"}
          </div>
          <div className=" font-bold p-1 text-sm text-white">
            Teléfono: {phone ? phone : "N/A"}
          </div>
          <div className=" font-bold p-1 text-sm text-white">
            Especialidad: {specialties ? specialties : "N/A"}
          </div>

          <div className="p-1 text-white whitespace-nowrap">
            Estatus:{" "}
            <span className={`${clase} `}>{status ? status : "N/A"}</span>
          </div>
        </div>
      </div>
    </>
  );
}
