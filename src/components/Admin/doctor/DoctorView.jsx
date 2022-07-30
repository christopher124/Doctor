import { useState, useEffect } from "react";
import Avatar from "avvvatars-react";

export function DoctorView({ doctor }) {
  const { name, last, address, status, phone, specialties, user } = doctor;
  console.log(doctor);
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
          <Avatar value={user?.username ? user?.username : "NU"} size={40} />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-1 text-sm font-bold text-white">
            Nombre y Apelido:{" "}
            {name + " " + last ? name + " " + last : "No hay datos"}
          </div>

          <div className=" font-bold p-1 text-sm text-white">
            Dirección: {address ? address : "No hay datos"}
          </div>
          <div className=" font-bold p-1 text-sm text-white">
            Teléfono: {phone ? phone : "No hay datos"}
          </div>
          <div className=" font-bold p-1 text-sm text-white">
            Especialidad: {specialties ? specialties : "No hay datos"}
          </div>

          <div className="p-1 text-white whitespace-nowrap">
            Estatus:{" "}
            <span className={`${clase} `}>
              {status ? status : "No hay datos"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
