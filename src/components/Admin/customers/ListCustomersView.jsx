import { useNavigate } from "react-router-dom";
export function ListCustomersView({ customer, handleDelited }) {
  const {
    name,
    last,
    address,
    gender,
    phone,
    state,
    zip,
    suburb,
    town,
    status,
    id,
  } = customer;
  const navigate = useNavigate();
  console.log(customer);
  return (
    <tr className=" border-b bg-cyan-800 border-white">
      <th
        scope="row"
        className=" justify-center font-medium flex p-9 px-6 py-4 text-center"
      >
        {name ? name : "No hay datos"}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap"
      >
        {last ? last : "No hay datos"}
      </th>
      <td className="text-white font-medium px-6 py-4 text-center">
        {address ? address : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {zip ? zip : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {town ? town : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {suburb ? suburb : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {state ? state : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {gender ? gender : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {phone ? phone : "No hay datos"}
      </td>
      <td className="text-white px-6 font-medium py-4 text-center">
        {" "}
        {status === true
          ? "Usuario En Consulta"
          : "El usuario no esta en consulta"}
      </td>

      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <button
            onClick={() => navigate(`/admin/cliente/${id}`)}
            className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
          >
            <i class="pr-4 text-lg fa fas fa-eye"></i>
          </button>
          <button
            onClick={() => navigate(`/admin/editar/cliente/${id}`)}
            className="w-4 mr-2 transform  hover:text-purple-500 hover:scale-110"
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
