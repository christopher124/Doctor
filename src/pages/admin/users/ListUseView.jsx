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

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user);
      console.log(user);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);

  const handleDelited = async (id) => {
    Swal.fire({
      title: " ¿Estas seguro de eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteUserApi(id, logout);
        if (response) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          const arrayUser = user.filter((user) => user.id !== id);
          setUser(arrayUser);
        }
      }
    });
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
                  No hay Usuarios Registrados
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nuevo/usuario")}
              className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <i className="fa fa-solid fa-plus"></i>
              <span>Nuevo Registro</span>
            </button>
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
                className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
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
                className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
              >
                <span className="p-1">Nuevo Registro</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          id="tableUsers"
          className="w-full text-sm text-left text-gray-500 text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Foto de usuario
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Nombre de usuario{" "}
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Correo
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-left">
                Rol de usuario
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-left">
                Status del usuario
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-left">
                Status del usuario
              </th>
              <th
                scope="col"
                className="text-white font-bold py-3 px-6 text-left "
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
