import { useState, useEffect } from "react";

export function UsersView({ users }) {
  const { email, role, username, blocked, confirmed, photo } = users;
  const [estadoDoctor, setEstadoDoctor] = useState(blocked);
  const [clase, setClase] = useState("");

  useEffect(() => {
    if (estadoDoctor) {
      setEstadoDoctor(estadoDoctor);
    }
    claseDoctor();
  }, [estadoDoctor]);
  const claseDoctor = () => {
    if (blocked === false) {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
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
            src={
              photo && photo.formats.small.url
                ? "http://localhost:1337" + photo.formats.small.url
                : "https://img.freepik.com/free-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg?w=740"
            }
            alt="icon"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-sm font-bold text-white">
            Nombre de usuario: {username}
          </div>

          <div className="text-sm text-white"> Correo: {email}</div>
          <div className="text-sm text-white">Telefono: {role?.name}</div>
          <div className="flex flex-row items-center justify-around">
            <div className="relative flex flex-row w-full text-center text-xs items-center h-1"></div>
          </div>
          <div className="text-white whitespace-nowrap">
            <span className=" text-white whitespace-nowrap">
              Estauts:
              {confirmed === true ? "Confirmado" : "usuario no confirmado"}
            </span>
          </div>
          <div className="text-white whitespace-nowrap">
            <span className={`${clase} `}>
              {blocked === true ? "Usuario bloquedado" : "Usuario Activo"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
