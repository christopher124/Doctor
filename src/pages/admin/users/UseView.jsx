import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import { getOneUserApi } from "../../../api/admin/user";

export function UseView() {
  const { id } = useParams();
  const [user, setuser] = useState({});
  const { email, role, username, blocked, confirmed, media } = user;
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getOneUserApi(id, logout);
      setuser(user);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);

  return cargando ? (
    <Spinner />
  ) : Object.keys(user).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Doctores</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  No hay Resultados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Ver Doctor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="w-full lg:w-2/3">
          <div className="w-full p-4 rounded-lg bg-white border border-gray-100 bg-gray-900 border-gray-800">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-light text-white">Doctor</div>
                <div className="text-sm text-white font-bold">
                  <span>Informacion Usuario</span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className="flex flex-row px-12 w-full">
              <img
                className="text-center rounded-full"
                src={
                  media
                    ? media
                    : "https://img.freepik.com/free-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg?w=740"
                }
                alt="Random"
              />
            </div>
            <div className=" flex flex-col w-full">
              <p className="py-1 text-white font-normal">
                Nombre de Usuario:{" "}
                <span className="text-bold">{user?.username}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Correo de Usuario:{" "}
                <span className="text-bold">{user?.email}</span>
              </p>
              <p className="py-1 text-white font-normal">
                Nombre de Usuario:{" "}
                <span className="text-bold">{user?.username}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
