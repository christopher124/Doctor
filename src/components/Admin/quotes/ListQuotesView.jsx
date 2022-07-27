import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function ListQuotesView({ quotes, handleDelited }) {
  const { customer, doctor, date, id } = quotes;
  const navigate = useNavigate();

  return (
    <>
      <tr className=" border-b bg-gray-800 border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap"
        >
          {customer?.name} {customer?.last}
        </th>
        <td className="text-white px-6 py-4">
          {doctor?.name} {doctor?.last}
        </td>
        <td className="text-white px-6 py-4">
          {" "}
          {format(new Date(date ? date : "N/A"), "dd/MM/yyyy HH:mm")}
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button
              onClick={() => navigate(`/admin/doctor/${id}`)}
              className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate(`/admin/editar/doctor/${id}`)}
              className="w-4 mr-2 transform  hover:text-yellow-500 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button
              onClick={() => handleDelited(id)}
              className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
