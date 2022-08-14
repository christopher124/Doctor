import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/admin/user";

export function ListQuotesUserView({ quotes, handleDelited }) {
  const [user, setUser] = useState({});
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();
  const { customer, doctor, date, room, service, id } = quotes;
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const me = await getMeApi(logout);
      setUser(me);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 400)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);
  return (
    <>
      {cargando ? null : user?.role?.name === "Administrador" ? (
        <tr className=" border-b bg-cyan-800 border-white">
          <td
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap"
          >
            {customer?.name ? customer?.name : "No hay paciente signado"}{" "}
            {customer?.last ? customer?.last : ""}
          </td>
          <td className="text-white px-6 py-4">
            {doctor?.name ? doctor?.name : "No hay doctor asignado "}
            {doctor?.last ? doctor?.last : ""}
          </td>
          <td className="text-white px-6 py-4">
            {" "}
            {date ? format(new Date(date), "dd/MM/yyyy hh:mm a") : "N/A"}
          </td>
          <td className="text-white px-6 py-4">
            {service ? service : "Sin asignación de servicio"}
          </td>
          <td className="text-white px-6 py-4">
            Consultorio: {room ? room : "Sin asignación de consultorio"}
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
              <button
                onClick={() => navigate(`/admin/cita/${id}`)}
                className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
              >
                <i class="pr-4 text-lg fa fas fa-eye"></i>
              </button>
              <button
                onClick={() => navigate(`/admin/editar/cita/${id}`)}
                className="w-4 mr-2 transform  hover:text-yellow-500 hover:scale-110"
              >
                <i className="px-2 text-lg fa fas fa-pencil-alt"></i>
              </button>
              <button
                onClick={() => handleDelited(id)}
                className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
              >
                <i className="px-4 text-lg fa fas fa-trash-alt"></i>
              </button>
            </div>
          </td>
        </tr>
      ) : user?.role?.name === "Recepción" ? (
        <tr className=" border-b bg-cyan-800 border-white">
          <td
            scope="row"
            className="px-6 py-4 font-medium text-white whitespace-nowrap"
          >
            {customer?.name} {customer?.last}
          </td>
          <td className="text-white px-6 py-4">
            {doctor?.name} {doctor?.last}
          </td>
          <td className="text-white px-6 py-4">
            {" "}
            {date ? format(new Date(date), "dd/MM/yyyy hh:mm a") : "N/A"}
          </td>
          <td className="text-white px-6 py-4">
            {service ? service : "Sin asignación de servicio"}
          </td>
          <td className="text-white px-6 py-4">
            Consultorio: {room ? room : "Sin asignación de consultorio"}
          </td>
        </tr>
      ) : null}
    </>
  );
}
