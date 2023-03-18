import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  getProfesorsApi,
  deleteProfesorsApi,
} from "../../../api/admin/profesors";
import { getMeApi } from "../../../api/admin/user";
import { ListProfessorView as ListProfessorViews } from "../../../components/Admin/Pofessor/ListProfessorView";
import { Spinner } from "../../../components/spinner/Spinner";
import Swal from "sweetalert2";
import Excel from "react-html-table-to-excel";
import Img404 from "../../../assets/img/story-404.svg";

export function ListProfessorView() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [professor, setProfessor] = useState([]);
  const [tableProfessor, SetTableProfessor] = useState([]);
  const [searchProfessor, setSearchProfessor] = useState("");
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const users = await getMeApi(logout);
      setUsers(users);
      const professor = await getProfesorsApi(logout);
      setProfessor(professor);
      SetTableProfessor(professor);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
  }, [auth]);
  localStorage.setItem("idUser", users?.id);
  localStorage.getItem("idUser", users?.id);
  localStorage.removeItem(users?.id);
  if (logout === undefined) {
    return null;
  }
  if (!auth && !logout) {
    navigate("/");
    return null;
  }

  const handleDelited = async (id) => {
    Swal.fire({
      title: " ¿Estás seguro de eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "¡No, cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteProfesorsApi(id, logout);
        if (response) {
          Swal.fire(
            "¡Eliminado!",
            "El registro ha sido eliminado correctamente.",
            "success"
          );
          const arrayProfessor = professor.filter(
            (professor) => professor.id !== id
          );
          setProfessor(arrayProfessor);
        }
      }
    });
  };

  const handleChangeProfessors = (e) => {
    setSearchProfessor(e.target.value);
    filtrarProfessor(e.target.value);
  };

  const filtrarProfessor = (searchUsers) => {
    let searchResult = tableProfessor.filter((elements) => {
      if (
        elements?.name
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase()) ||
        elements?.last
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase())
      ) {
        return elements;
      }
    });
    setProfessor(searchResult);
  };

  return cargando ? (
    <Spinner />
  ) : Object.keys(professor).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Profesor</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  {Object.keys(professor).length === 0
                    ? "No hay usuarios registrados"
                    : "Usuario no encontrado"}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nuevo/profesor")}
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
              placeholder="Búsqueda por nombres"
              value={searchProfessor}
              onChange={handleChangeProfessors}
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
          </div>
        </div>
      </div>
      {Object.keys(professor).length === 0 ? (
        <div className="text-xs font-bold text-gray-500 uppercase">
          <div className="justify-center flex p-5">
            <img
              className="ui centered image w-96 h-96"
              src={Img404}
              alt="Logo"
            />
          </div>
          <p className="text-center">No hay datos registrados</p>
        </div>
      ) : null}
    </div>
  ) : users?.role?.name === "Administrador" ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Profesores</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2 ">
            <div className="inline-flex rounded-md shadow-sm">
              <Excel
                id="buttonExcel"
                className="flex flex-row items-center justify-center px-4 py-4 text-xs font-bold text-white uppercase bg-green-700 rounded-lg hover:bg-green-800 space-x-2"
                table="tableProfessor"
                filename="Professor"
                sheet="pagina 1"
                buttonText="Exportar a excel"
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => navigate("/admin/nuevo/profesor")}
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
                placeholder="Búsqueda por nombre"
                value={searchProfessor}
                onChange={handleChangeProfessors}
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
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table
          id="tableProfessor"
          className="w-full text-base text-center text-white"
        >
          <thead className="text-base uppercase bg-[#687584] text-white">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Nombre(s)
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Apellido(s)
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Género
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Teléfono
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Especialidad
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
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
            {professor?.map((professor) => (
              <ListProfessorViews
                handleDelited={handleDelited}
                key={professor.id}
                professor={professor}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
}