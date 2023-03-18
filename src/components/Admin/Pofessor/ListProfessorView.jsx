import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ListProfessorView({ professor, handleDelited }) {
  const navigate = useNavigate();

  const { name, last, user, id, phone, status, specialties, gender } =
    professor;
  const [estadoProfessor, setEstadoProfessor] = useState(status);
  const [clase, setClase] = useState("");
  useEffect(() => {
    if (estadoProfessor) {
      setEstadoProfessor(estadoProfessor);
    }
    claseProfessor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estadoProfessor]);

  //funcion que modifica el color del pedido de acuerdo a su estado
  const claseProfessor = () => {
    if (status === "Disponible") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-white rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === "En consulta") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-orange-400 text-white rounded-lg text-xs px-2 py-0 "
      );
    } else if (status === null) {
      setClase(" p-2 uppercase font-bold inline-flex text-center ");
    } else {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-red-700 text-white rounded-lg text-xs px-2 py-0 "
      );
    }
  };

  return (
    <>
      <tr className="border-b bg-cyan-800 border-white">
        <th
          scope="row"
          className=" justify-center flex p-9 px-6 py-4 text-center"
        >
          <td className="text-white px-6 py-4 font-medium text-center">
            {name ? name : "No hay datos"}
          </td>
        </th>
        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
          {last ? last : "No hay datos"}
        </td>
        <td className="text-white font-medium px-6 py-4 text-center">
          {gender ? gender : "No hay datos"}
        </td>
        <td className="text-white font-medium px-6 py-4 text-center">
          {phone ? phone : "No hay datos"}
        </td>

        <td className="text-white font-medium px-6 py-4 text-center">
          {specialties ? specialties : "No hay datos"}
        </td>
        <td className="text-white whitespace-nowrap">
          <span className="relative inline-block px-3 py-1 text-white font-semibold  leading-tight">
            <span
              aria-hidden
              className={`${clase} absolute inset-0  rounded-full`}
            ></span>
            <span className="relative font-medium">
              {status ? status : "No hay datos"}
            </span>
          </span>
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button
              onClick={() => navigate(`/admin/profesor/${id}`)}
              className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
            >
              <i class="pr-4 text-lg fa fas fa-eye"></i>
            </button>
            <button
              onClick={() => navigate(`/admin/editar/profesor/${id}`)}
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
    </>
  );
}
