import { useNavigate } from "react-router-dom";
export function ListStudentsView({ student, handleDelited }) {
  const {
    name,
    last,

    id,
  } = student;
  const navigate = useNavigate();
  console.log(student);
  return (
    <tr className=" border-b bg-cyan-800 border-white">
      <td className="text-white px-6 py-4 text-center">
        {name ? name : "No hay datos"}
      </td>
      <td className="px-6 py-4 font-medium text-white ">
        {last ? last : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {/* {gender ? gender : "No hay datos"} */}
      </td>

      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <button
            onClick={() => navigate(`/admin/estudiante/${id}`)}
            className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
          >
            <i class="pr-4 text-lg fa fas fa-eye"></i>
          </button>
          <button
            onClick={() => navigate(`/admin/editar/estudiante/${id}`)}
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
  );
}
