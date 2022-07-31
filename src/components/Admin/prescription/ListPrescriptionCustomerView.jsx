import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function ListPrescriptionCustomerView({ prescription }) {
  const navigate = useNavigate();
  const { file_number, allergies, observations, created_at, id } = prescription;

  let str = observations;
  let res = str.substring(0, 50);
  let observation = res + "...";
  return (
    <>
      <tr className="border-b bg-cyan-800 border-white">
        <td className="text-white px-6 py-4 font-medium text-center">
          {file_number ? file_number : "N/A"}
        </td>

        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
          {allergies ? allergies : "N/A"}
        </td>
        <td className="text-white font-medium px-6 py-4 text-center">
          {observation ? observation : "N/A"}
        </td>
        <td className="text-white font-medium px-6 py-4 text-center">
          {format(new Date(created_at), "dd/MM/yyyy hh:mm:ss a")}
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button
              onClick={() => navigate(`/admin/receta/${id}`)}
              className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
            >
              <i class="pr-4 text-lg fa fas fa-eye"></i>
            </button>
            <button
              onClick={() => navigate(`/admin/editar/receta/${id}`)}
              className="w-4 mr-2 transform  hover:text-yellow-500 hover:scale-110"
            >
              <i className="px-2 text-lg fa fas fa-pencil-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
