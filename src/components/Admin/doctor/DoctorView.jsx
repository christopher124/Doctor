import { useState, useEffect } from "react";
export function DoctorView({ doctor }) {
  const { name, last, adress, condition, phone, specialtie } = doctor;

  const [estadoDoctor, setEstadoDoctor] = useState(condition?.name);
  const [clase, setClase] = useState("");

  useEffect(() => {
    if (estadoDoctor) {
      setEstadoDoctor(estadoDoctor);
    }
    claseDoctor();
  }, [estadoDoctor]);
  const claseDoctor = () => {
    if (condition?.name === "Disponible") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    } else if (condition?.name === "En consulta") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-yellow-400 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    } else if (condition === null) {
      setClase(" text-white whitespace-nowrap ");
    } else {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-red-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    }
  };
  return (
    <>
      <div className="flex items-center justify-start p-2 space-x-4">
        <div className="shrink-0 w-8">
          <img
            className="h-8 w-full shadow-lg rounded-full ring"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            alt="icon"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-sm font-bold text-white">
            Nombre y Apelido: {name + " " + last}
          </div>

          <div className="text-sm text-white">Direccion: {adress}</div>
          <div className="text-sm text-white">Telefono: {phone}</div>
          <div className="flex flex-row items-center justify-around">
            <div className="relative flex flex-row w-full text-center text-xs items-center h-1"></div>
          </div>
          <div className="text-white whitespace-nowrap">
            <span className=" text-white whitespace-nowrap">
              Especialidad: {specialtie?.name ? specialtie?.name : "N/A"}
            </span>
          </div>
          <div className="text-white whitespace-nowrap">
            <span className={`${clase} `}>
              Estatus: {condition?.name ? condition?.name : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
