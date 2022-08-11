import { useState, useEffect } from "react";
import Avatar from "avvvatars-react";

export function UsersView({ users }) {
  const { email, role, username, blocked, confirmed } = users;
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
        "p-2 uppercase font-bold inline-flex text-center bg-green-700 text-white rounded-lg text-xs px-2 py-0"
      );
    } else {
      setClase(
        "p-2 uppercase font-bold inline-flex text-center bg-red-700 text-white rounded-lg text-xs px-2 py-0"
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-start  space-x-4">
        <div className="shrink-0 w-8">
          <Avatar value={username ? username : "NU"} size={40} />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-1 font-bold text-white">
            Nombre Usuario: {username ? username : "N/A"}
          </div>

          <div className="p-1 font-bold text-white"> Correo: {email}</div>
          <div className="p-1 font-bold text-white">Rol: {role?.name}</div>
          <div className="p-1 font-bold text-white">
            Verificación del usuario:{" "}
            <span className={`${clase}`}>
              {confirmed === true ? "Confirmado" : "No confirmado"}
            </span>
          </div>

          <div className="p-[0.25rem] text-white font-bold whitespace-nowrap mb-2">
            Estatus del usuario:{" "}
            <span className={`${clase}`}>
              {blocked === true ? "Bloqueado" : "Activo"}
            </span>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
