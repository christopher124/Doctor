import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function ListQuotesView({ quotes, handleDelited }) {
  const { customer, doctor, date, id } = quotes;
  const navigate = useNavigate();

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
