import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function ListDoctorView({ doctor, handleDelited }) {
  const navigate = useNavigate();

  const { name, last, user, birthday, id, phone, status, specialties } = doctor;
  const [estadoDoctor, setEstadoDoctor] = useState(status);
  const [clase, setClase] = useState("");
  console.log(doctor);
  useEffect(() => {
    if (estadoDoctor) {
      setEstadoDoctor(estadoDoctor);
    }
    claseDoctor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estadoDoctor]);

  //funcion que modifica el color del pedido de acuerdo a su estado
  const claseDoctor = () => {
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
            {name ? name : "N/A"}
          </td>
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap"
        >
          {last ? last : "N/A"}
        </th>
        <td className="text-white font-medium px-6 py-4 text-center">
          {user?.email ? user?.email : "N/A"}
        </td>
        <td className="text-white font-medium px-6 py-4 text-center">
          {format(new Date(birthday), "dd/MM/yyyy")}
        </td>
        {/* <td className="text-white px-6 py-4 text-center">{adress}</td> */}
        <td className="text-white font-medium px-6 py-4 text-center">
          {phone}
        </td>
        <td className="text-white font-medium px-6 py-4 text-center">
          {specialties ? specialties : "N/A"}
        </td>
        <td className="text-white whitespace-nowrap">
          <span className="relative inline-block px-3 py-1 text-white font-semibold  leading-tight">
            <span
              aria-hidden
              className={`${clase} absolute inset-0  rounded-full`}
            ></span>
            <span className="relative font-medium">
              {status ? status : "N/A"}
            </span>
          </span>
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button
              onClick={() => navigate(`/admin/doctor/${id}`)}
              className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
            >
              <i class="pr-4 text-lg fa fas fa-eye"></i>
            </button>
            <button
              onClick={() => navigate(`/admin/editar/doctor/${id}`)}
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
