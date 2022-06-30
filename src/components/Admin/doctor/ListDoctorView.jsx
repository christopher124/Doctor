import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export function ListDoctorView({ doctor, handleDelited }) {
  const navigate = useNavigate();

  const { name, last, user, birthday, id, phone, condition, specialtie } =
    doctor;
  const [estadoDoctor, setEstadoDoctor] = useState(condition?.name);
  const [clase, setClase] = useState("");

  useEffect(() => {
    if (estadoDoctor) {
      setEstadoDoctor(estadoDoctor);
    }
    claseDoctor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estadoDoctor]);

  //funcion que modifica el color del pedido de acuerdo a su estado
  const claseDoctor = () => {
    if (condition?.name === "Disponible") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-green-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    } else if (condition?.name === "En consulta") {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-yellow-400 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    } else if (condition === null) {
      setClase(" p-2 uppercase font-bold inline-flex text-center ");
    } else {
      setClase(
        " p-2 uppercase font-bold inline-flex text-center bg-red-700 text-pink-100 rounded-lg text-xs px-2 py-0 "
      );
    }
  };

  return (
    <>
      <tr className="bg-white border-b bg-gray-800 border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 text-white whitespace-nowrap"
        >
          {name} {last}
        </th>
        <td className="text-white px-6 py-4">
          {user?.email ? user?.email : "N/A"}
        </td>
        <td className="text-white px-6 py-4">
          {format(new Date(birthday), "dd/MM/yyyy")}
        </td>
        {/* <td className="text-white px-6 py-4">{adress}</td> */}
        <td className="text-white px-6 py-4">{phone}</td>
        <td className="text-white whitespace-nowrap">
          <span className="relative inline-block px-3 py-1 text-white font-semibold  leading-tight">
            <span
              aria-hidden
              className={`${clase} absolute inset-0  rounded-full`}
            ></span>
            <span className="relative">
              {condition?.name ? condition?.name : "N/A"}
            </span>
          </span>
        </td>
        <td className="text-white px-6 py-4">
          {specialtie?.name ? specialtie.name : "N/A"}
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
            <button className="w-4 mr-2 transform  hover:text-purple-500 hover:scale-110">
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
