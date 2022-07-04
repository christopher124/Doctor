import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneUserApi } from "../../../api/admin/user";
import { FormUser } from "../../../components/form/FormUser";
export function EditUserView() {
  const [user, setUser] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getOneUserApi(id, logout);
      setUser(user);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Editar Usuario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user?.username ? (
        <FormUser user={user} cargando={cargando} />
      ) : (
        <p>Cliente ID no Valido</p>
      )}
    </div>
  );
}
