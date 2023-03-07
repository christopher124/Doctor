import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ListCoursesView({ courses, handleDelited }) {
  const navigate = useNavigate();
  const { id, name, description } = courses;

  let str = description;
  let res = (str || "").substring(0, 10) || "";
  let descriptions = res + "...";

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
          {descriptions ? descriptions : "No hay datos"}
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button
              onClick={() => navigate(`/admin/curso/${id}`)}
              className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
            >
              <i class="pr-4 text-lg fa fas fa-eye"></i>
            </button>
            <button
              onClick={() => navigate(`/admin/editar/curso/${id}`)}
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
