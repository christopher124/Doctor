/*eslint-disable*/
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/img/Gocare.png";
import useAuth from "../../hooks/useAuth";
import { NavBarDashboard } from "../navbar/NavBarDashboard";
import Swal from "sweetalert2";
import { getMeApi } from "../../api/admin/user";

export function SideBar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [user, setUser] = useState({});
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const user = await getMeApi(logout);
      setUser(user);
    })();
  }, [auth]);

  const exit = async () => {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, salir!",
      cancelButtonText: "¡No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  return (
    <>
      <nav className="font-noto lg:left-0 lg:block lg:fixed lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-nowrap lg:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative lg:w-[19rem] z-10 py-4 px-6">
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
              className="items-center h-28 w-32 rounded-full ml-auto mr-auto"
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
            <div className="lg:min-w-full lg:hidden block pb-4 mb-4">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="lg:block text-left lg:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
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

            {user?.role?.name === "Administrador" ? (
              <ul className="lg:flex-col lg:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/dashboard"
                  >
                    <i
                      className={
                        "fab fa-slideshare mr-2 text-lg " +
                        (window.location.href.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75 "
                          : "text-black hover:text-gray-600 ")
                      }
                    ></i>{" "}
                    Tablero principal
                  </Link>
                </li>
                <hr className="my-4 lg:min-w-full" />

                <li className="items-center">
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/pacientes") !== -1
                        ? "relative px-4 py-3 flex space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/pacientes"
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-base " +
                        (window.location.href.indexOf("/admin/pacientes") !== -1
                          ? "opacity-75 "
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Pacientes
                  </Link>
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/doctores") !== -1
                        ? "relative px-4 py-3 flex space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/doctores"
                  >
                    <i
                      className={
                        "fas fa-stethoscope mr-2 text-base " +
                        (window.location.href.indexOf("/admin/doctores") !== -1
                          ? "opacity-75 "
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Doctores
                  </Link>
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/usuarios") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/usuarios"
                  >
                    <i
                      className={
                        "fas fa-users  mr-2 text-base " +
                        (window.location.href.indexOf("/admin/usuarios") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Usuarios
                  </Link>
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/citas") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/citas"
                  >
                    <i
                      className={
                        "fas fa-solid fa-clipboard-list mr-2 text-base " +
                        (window.location.href.indexOf("/admin/citas") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Citas
                  </Link>
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/recetas") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/recetas"
                  >
                    <i
                      className={
                        "fas fa-laptop-medical mr-2 text-base " +
                        (window.location.href.indexOf("/admin/recetas") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Recetas
                  </Link>
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/Reportes") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/Reportes"
                  >
                    <i
                      className={
                        "fas fa-file-download mr-2 text-base " +
                        (window.location.href.indexOf("/admin/Reportes") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Reportes
                  </Link>
                </li>
              </ul>
            ) : user?.role?.name === "Doctor" ? (
              <ul className="lg:flex-col lg:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/dashboard"
                  >
                    <i
                      className={
                        "fab fa-slideshare mr-2 text-base " +
                        (window.location.href.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Tablero principal
                  </Link>
                </li>
                <hr className="my-4 lg:min-w-full" />

                <li className="items-center">
                  <Link
                    className={
                      "text-base uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/doctores") !== -1
                        ? "relative px-4 py-3 flex space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/doctores"
                  >
                    <i
                      className={
                        "fas fa-stethoscope mr-2 text-base " +
                        (window.location.href.indexOf("/admin/doctores") !== -1
                          ? "opacity-75 "
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Doctores
                  </Link>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/citas") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/citas"
                  >
                    <i
                      className={
                        "fas fa-solid fa-clipboard-list mr-2 text-base " +
                        (window.location.href.indexOf("/admin/citas") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Citas
                  </Link>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/recetas") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/recetas"
                  >
                    <i
                      className={
                        "fas fa-laptop-medical mr-2 text-base " +
                        (window.location.href.indexOf("/admin/recetas") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Recetas
                  </Link>
                </li>
              </ul>
            ) : user?.role?.name === "Recepción" ? (
              <ul className="lg:flex-col lg:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/dashboard"
                  >
                    <i
                      className={
                        "fab fa-slideshare mr-2 text-base " +
                        (window.location.href.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Tablero principal
                  </Link>
                </li>
                <hr className="my-4 lg:min-w-full" />

                <li className="items-center">
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/pacientes") !== -1
                        ? "relative px-4 py-3 flex space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/pacientes"
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-base " +
                        (window.location.href.indexOf("/admin/pacientes") !== -1
                          ? "opacity-75 "
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Pacientes
                  </Link>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/doctores") !== -1
                        ? "relative px-4 py-3 flex space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/doctores"
                  >
                    <i
                      className={
                        "fas fa-stethoscope mr-2 text-base " +
                        (window.location.href.indexOf("/admin/doctores") !== -1
                          ? "opacity-75 "
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Doctores
                  </Link>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/usuarios") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/usuarios"
                  >
                    <i
                      className={
                        "fas fa-users  mr-2 text-base " +
                        (window.location.href.indexOf("/admin/usuarios") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Usuarios
                  </Link>
                  <Link
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/citas") !== -1
                        ? " px-4 py-3 flex  space-x-4 rounded-xl hover:text-white text-white bg-gradient-to-r from-cyan-800 to-sky-700"
                        : "text-black hover:text-gray-600")
                    }
                    to="/admin/citas"
                  >
                    <i
                      className={
                        "fas fa-solid fa-clipboard-list mr-2 text-base " +
                        (window.location.href.indexOf("/admin/citas") !== -1
                          ? "opacity-75"
                          : "text-black hover:text-gray-600")
                      }
                    ></i>{" "}
                    Citas
                  </Link>
                </li>
              </ul>
            ) : null}

            {/* Divider */}
            <hr className="my-4 lg:min-w-full" />
            {/* Heading */}

            {/* Navigation */}
            <button
              className="text-white bg-gradient-to-r from-cyan-800 to-sky-700 font-bold py-2 px-4 rounded-xl text-lg"
              onClick={() => exit()}
            >
              <i className="fas fa-door-open text-white mr-2 text-sm"></i>{" "}
              Cerrar sesión
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
