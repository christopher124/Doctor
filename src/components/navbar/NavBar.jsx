/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

export function NavBar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="font-noto top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Logo
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className={
                    "px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (window.location.href.indexOf("/nosotros") !== -1
                      ? "text-black-700 hover:text-blue-600"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/nosotros"
                >
                  Nosotros
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={
                    "px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (window.location.href.indexOf("/servicios") !== -1
                      ? "text-black-700 hover:text-blue-600"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/servicios"
                >
                  Servicios
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={
                    "px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (window.location.href.indexOf("/login") !== -1
                      ? "text-black-700 hover:text-blue-600"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/login"
                >
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
