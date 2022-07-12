/*eslint-disable*/
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/img/Logo.jpeg";
import useAuth from "../../hooks/useAuth";
import { NavBarDashboard } from "../navbar/NavBarDashboard";

export function SideBar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {})();
  }, [auth, logout]);
  return (
    <>
      <nav className="font-noto lg:left-0 lg:block lg:fixed lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-nowrap lg:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative lg:w-72 z-10 py-4 px-6">
        <div className="lg:flex-col lg:items-stretch lg:min-h-full lg:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50  lg:hidden  px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="lg:block text-center lg:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/dashboard"
          >
            <img
              src={Logo}
              alt="logo"
              className=" items-center h-24 w-24 rounded-full"
            />
          </Link>
          {/* User */}
          <ul className=" lg:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "lg:flex lg:flex-col lg:items-stretch lg:opacity-100 lg:relative lg:mt-4 lg:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="lg:min-w-full lg:hidden block pb-4 mb-4 border-b border-solid border-blue-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="lg:block text-left lg:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/admin/dashboard"
                  >
                    <img
                      src={Logo}
                      alt="logo"
                      className=" items-center h-24 w-24 rounded-full"
                    />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 lg:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            {/*<hr className="my-4 lg:min-w-full" />*/}
            {/* Heading */}

            {/* Navigation */}

            <ul className="lg:flex-col lg:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? " px-4 py-3 flex  space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fab fa-slideshare mr-2 text-base " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
              <hr className="my-4 lg:min-w-full " />

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/clientes") !== -1
                      ? "relative px-4 py-3 flex space-x-4 rounded-xl text-white bg-gradient-to-r from-slate-500 to-cyan-400"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/admin/clientes"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-base " +
                      (window.location.href.indexOf("/admin/clientes") !== -1
                        ? "opacity-75 "
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  CLientes
                </Link>
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/doctores") !== -1
                      ? "relative px-4 py-3 flex space-x-4 rounded-xl text-white bg-gradient-to-r from-slate-500 to-cyan-400"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/admin/doctores"
                >
                  <i
                    className={
                      "fas fa-stethoscope mr-2 text-base " +
                      (window.location.href.indexOf("/admin/doctores") !== -1
                        ? "opacity-75 "
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  Doctores
                </Link>
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/usuarios") !== -1
                      ? " px-4 py-3 flex  space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/admin/usuarios"
                >
                  <i
                    className={
                      "fas fa-users  mr-2 text-base " +
                      (window.location.href.indexOf("/admin/usuarios") !== -1
                        ? "opacity-75"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  Usuarios
                </Link>
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/citas") !== -1
                      ? " px-4 py-3 flex  space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                      : "text-blue-700 hover:text-blue-500")
                  }
                  to="/admin/citas"
                >
                  <i
                    className={
                      "fas fa-users  mr-2 text-base " +
                      (window.location.href.indexOf("/admin/citas") !== -1
                        ? "opacity-75"
                        : "text-blue-300")
                    }
                  ></i>{" "}
                  Citas
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 lg:min-w-full" />
            {/* Heading */}

            {/* Navigation */}
            <button
              className="text-blue-700 hover:text-blue-500 text-xs uppercase py-3 font-bold block"
              onClick={() => logout()}
            >
              <i className="fas fa-fingerprint text-blue-400 mr-2 text-sm"></i>{" "}
              Cerra sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="font-noto ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <NavBarDashboard />
        <Outlet />
      </div>
    </>
  );
}
