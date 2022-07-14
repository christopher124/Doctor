import { useState, useEffect } from "react";
import Avvvatars from "avvvatars-react";

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
      <div className="flex items-center justify-start  space-x-4">
        <div className="shrink-0 w-8">
          <Avvvatars value={username ? username : "NU"} size={40} />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-1 text-sm font-bold text-white">
            Nombre de usuario: {username}
          </div>

          <div className="p-1 font-bold text-sm text-white">
            {" "}
            Correo: {email}
          </div>
          <div className="p-1  font-bold text-sm text-white">
            Rol de usuario: {role?.name}
          </div>
          <div className="p-1  font-bold text-sm text-white">
            {confirmed === true
              ? "Usuario Confirmado"
              : "Usuario no confirmado"}
          </div>

          <div className="p-1 text-white whitespace-nowrap">
            <span className={`${clase} `}>
              {blocked === true ? "Usuario bloquedado" : "Usuario Activo"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
