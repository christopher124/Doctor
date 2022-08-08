import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function ListQuotesView({ quotesDoctor, handleDelited }) {
  const { customer, doctor, date, status, id } = quotesDoctor;
  const [estadoQuotes, setEstadoQuotes] = useState(status);
  const [clase, setClase] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (estadoQuotes) {
      setEstadoQuotes(estadoQuotes);
    }
    claseDoctor();
  }, [estadoQuotes]);
  const claseDoctor = () => {
    if (status === "Completa") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-white rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === "En proceso") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-orange-400 text-white rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === "Cancelada") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-red-700 text-white rounded-lg text-xs px-2 py-0 "
      );
    }
  };
  return (
    <>
      <tr className=" border-b bg-cyan-800 border-white">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap"
        >
          {customer?.name}
        </th>
        <td className="text-white px-6 py-4">{doctor?.name}</td>
        <td className="text-white px-6 py-4">
          {" "}
          {date ? format(new Date(date), "dd/MM/yyyy hh:mm a") : "N/A"}
        </td>
        <td className="text-white px-6 py-4">
          <span className={`${clase} `}>
            {status ? status : "No hay datos"}
          </span>
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
    </>
  );
}
