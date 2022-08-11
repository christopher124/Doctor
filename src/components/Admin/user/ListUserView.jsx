import React from "react";
import { useNavigate } from "react-router-dom";
import Avvvatars from "avvvatars-react";

export function ListUserView({ user, handleDelited }) {
  const { username, email, role, confirmed, blocked, id } = user;

  const navigate = useNavigate();

  return (
    <>
      <tr className=" border-b  bg-cyan-800 border-white">
        <th
          scope="row"
          className=" justify-center flex p-9 px-6 py-4 text-center"
        >
          <Avvvatars value={user?.username ? user?.username : "NU"} size={40} />
        </th>
        <td className="text-white px-6 py-4 text-center">
          {username ? username : "N/A"}
        </td>
        <td className="text-white px-6 py-4 text-center">
          {email ? email : "N/A"}
        </td>

        <td className="text-white px-6 py-4 text-center">
          {role?.name ? role.name : "N/A"}
        </td>
        <td className="text-white text-center">
          <span className="relative inline-block px-3 py-1 text-white  leading-tight">
            <span className="relative text-center">
              {confirmed === true ? "Confirmado" : "usuario no confirmado"}
            </span>
          </span>
        </td>
        <td className="text-white px-6 py-4 text-center">
          {blocked === true ? "Usuario bloqueado" : "Usuario Activo"}
        </td>

        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <button
              onClick={() => navigate(`/admin/editar/usuario/${id}`)}
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
