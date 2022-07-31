/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getUserApi } from "../../../api/admin/user";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../components/spinner/Spinner";
import { deleteUserApi } from "../../../api/admin/user";
import Swal from "sweetalert2";
import { ListUserView } from "../../../components/Admin/user/ListUserView";
import Excel from "react-html-table-to-excel";

export function ListUseView() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [cargando, setCargando] = useState(true);
  const [tableUser, SetTableUser] = useState([]);
  const [searchUserName, setSearchUserName] = useState("");
  const [searchRole, setSearchRole] = useState("");

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user);
      SetTableUser(user);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth, logout]);

  if (user === undefined) {
    return null;
  }
  if (!auth && !user) {
    navigate("/");
    return null;
  }

  const handleDelited = async (id) => {
    Swal.fire({
      title: " ¿Estas seguro de eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "¡No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteUserApi(id, logout);
        if (response) {
          Swal.fire(
            "¡Eliminado!",
            "El registro ha sido eliminado correctamente.",
            "success"
          );
          const arrayUser = user.filter((user) => user.id !== id);
          setUser(arrayUser);
        }
      }
    });
  };

  const handleChangeUserName = (e) => {
    setSearchUserName(e.target.value);
    filtrarUserName(e.target.value);
  };
  const filtrarUserName = (searchUsers) => {
    let searchResult = tableUser.filter((elements) => {
      if (
        elements?.username
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase())
      ) {
        return elements;
      }
    });
    setUser(searchResult);
  };
  const handleChangeRole = (e) => {
    setSearchRole(e.target.value);
    filtrarRole(e.target.value);
  };
  const filtrarRole = (searchUsers) => {
    let searchResult = tableUser.filter((elements) => {
      if (
        elements?.role?.name
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase())
      ) {
        return elements;
      }
    });
    setUser(searchResult);
  };

  return cargando ? (
    <Spinner />
  ) : Object.keys(user).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Usuarios</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  {Object.keys(user).length === 0
                    ? "No hay usuarios registrados"
                    : "Usuario no encontrado"}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nuevo/usuario")}
              type="button"
              className="flex flex-row items-center justify-center px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <span className="p-1">Nuevo Registro</span>
            </button>
          </div>
        </div>
      </div>
      <div className="shrink-0 space-x-2">
        <div className="inline-flex justify-start">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Búsqueda por usuario"
              value={searchUserName}
              onChange={handleChangeUserName}
            />
          </div>
        </div>

        <div className="inline-flex justify-start">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Búsqueda por rol de usuario"
              value={searchRole}
              onChange={handleChangeRole}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Usuarios</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2 ">
            <div className="inline-flex rounded-md shadow-sm">
              <Excel
                id="buttonExcel"
                className="flex flex-row items-center justify-center px-4 py-4 text-xs font-bold text-white uppercase bg-green-700 rounded-lg hover:bg-green-800 space-x-2"
                table="tableUsers"
                filename="tableUsers"
                sheet="pagina 1"
                buttonText="Exportar a excel"
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => navigate("/admin/nuevo/usuario")}
                type="button"
                className="flex flex-row items-center justify-center px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
              >
                <span className="p-1">Nuevo Registro</span>
              </button>
            </div>
          </div>
        </div>
        <div className="shrink-0 space-x-2">
          <div className="inline-flex justify-start">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Búsqueda por usuario"
                value={searchUserName}
                onChange={handleChangeUserName}
              />
            </div>
          </div>

          <div className="inline-flex justify-start">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Búsqueda por rol de usuario"
                value={searchRole}
                onChange={handleChangeRole}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table
          id="tableUsers"
          className="w-full text-sm text-center text-white"
        >
          <thead className="text-xs uppercase bg-[#687584] text-white">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-center">
                FOTO
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                NOMBRE{" "}
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Correo
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-center">
                Rol
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-center">
                Verificación del Usuario
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-center">
                Estatus
              </th>
              <th
                scope="col"
                className="text-white font-bold py-3 px-6 text-center "
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <ListUserView
                key={user.id}
                user={user}
                handleDelited={handleDelited}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
