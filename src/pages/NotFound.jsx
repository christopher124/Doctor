import { NavBar } from "../components/navbar/NavBar";
import { useNavigate, Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";
export function NotFound() {
  const { auth } = useAuth();

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Desde NotFound
      {auth ? (
        <div>
          <li className="flex items-center">
            <Link
              className={
                "px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold " +
                (window.location.href.indexOf("/dashboard") !== -1
                  ? "text-black-700 hover:text-blue-600"
                  : "text-blue-700 hover:text-blue-500")
              }
              to="/admin/dashboard"
            >
              Tablero principal
            </Link>
            <p>Al parecer esta perdido regresa a tu cuenta</p>
          </li>
        </div>
      ) : (
        <div>
          <li className="flex items-center">
            <Link
              className={
                "px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold " +
                (window.location.href.indexOf("/login") !== -1
                  ? "text-black-700 hover:text-blue-600"
                  : "text-blue-700 hover:text-blue-500")
              }
              to="/"
            >
              Inicio
            </Link>
          </li>
          <p>No estas logueado o no tienes permisos para ver esta sesion</p>
        </div>
      )}
    </div>
  );
}
