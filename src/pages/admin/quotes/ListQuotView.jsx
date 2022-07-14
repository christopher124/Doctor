import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getQuotesApi } from "../../../api/admin/quote";
import { ListDoctorView } from "../../../components/Admin/doctor/ListDoctorView";
import { Spinner } from "../../../components/spinner/Spinner";
import Swal from "sweetalert2";
import { ListQuotesView } from "../../../components/Admin/quotes/ListQuotesView";

export function ListQuotView() {
  const [quotes, setQuotes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const quote = await getQuotesApi(logout);
      setQuotes(quote);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);
  const handleDelited = async (id) => { };

  return cargando ? (
    <Spinner />
  ) : Object.keys(quotes).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Citas</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  No hay Citas registradas
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nueva/cita")}
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
                <span className="text-gray-600">Citas</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nueva/cita")}
              className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <i className="fa fa-solid fa-plus"></i>
              <span>Nuevo Registro</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Nombre y Apellido del cliente
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Nombre y Apellido del Doctor
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Dia de la cita
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
            {quotes.map((quotes) => (
              <ListQuotesView key={quotes.id} quotes={quotes} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
