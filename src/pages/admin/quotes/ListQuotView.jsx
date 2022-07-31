import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getQuotesApi, deleteQuotesApi } from "../../../api/admin/quote";
import { Spinner } from "../../../components/spinner/Spinner";
import Swal from "sweetalert2";
import { ListQuotesView } from "../../../components/Admin/quotes/ListQuotesView";
import Excel from "react-html-table-to-excel";
import Img404 from "../../../assets/img/story-404.svg";

export function ListQuotView() {
  const [quotes, setQuotes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const quote = await getQuotesApi(logout);
      setQuotes(quote);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);
  const handleDelited = async (id) => {
    Swal.fire({
      title: " ¿Estas seguro de eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "¡No, cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteQuotesApi(id, logout);
        if (response) {
          Swal.fire(
            "¡Eliminado!",
            "El registro ha sido eliminado correctamente.",
            "success"
          );
          const arrayQuotes = quotes.filter((quotes) => quotes.id !== id);
          setQuotes(arrayQuotes);
        }
      }
    });
  };

  return cargando ? (
    <Spinner />
  ) : Object.keys(quotes).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Citas</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  No hay Citas registradas
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2 ">
            <div className="inline-flex rounded-md shadow-sm">
              <Excel
                id="buttonExcel"
                className="flex flex-row items-center justify-center px-4 py-4 text-xs font-bold text-white uppercase bg-green-700 rounded-lg hover:bg-green-800 space-x-2"
                table="tablePrescription"
                filename="tablePrescription"
                sheet="pagina 1"
                buttonText="Exportar a excel"
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => navigate("/admin/nueva/cita")}
                type="button"
                className="flex flex-row items-center justify-center px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
              >
                <span className="p-1">Nuevo Registro</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(quotes).length === 0 ? (
        <div className="text-xs font-bold text-gray-500 uppercase">
          <div className="justify-center flex p-5">
            <img className="ui centered image w-96 h-96" src={Img404} />
          </div>
          <p className="text-center">No hay datos registrados</p>
        </div>
      ) : null}
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Citas</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2 ">
            <div className="inline-flex rounded-md shadow-sm">
              <Excel
                id="buttonExcel"
                className="flex flex-row items-center justify-center px-4 py-4 text-xs font-bold text-white uppercase bg-green-700 rounded-lg hover:bg-green-800 space-x-2"
                table="tablePrescription"
                filename="tablePrescription"
                sheet="pagina 1"
                buttonText="Exportar a excel"
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => navigate("/admin/nueva/cita")}
                type="button"
                className="flex flex-row items-center justify-center px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
              >
                <span className="p-1">Nuevo Registro</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table className="w-full text-sm text-center text-white">
          <thead className="text-xs uppercase bg-[#687584] text-white">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Nombre y Apellido del cliente
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Nombre y Apellido del Doctor
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Dia de la cita
              </th>

              <th
                scope="col"
                className="text-white font-bold py-3 px-6 text-center "
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {quotes?.map((quotes) => (
              <ListQuotesView
                key={quotes.id}
                handleDelited={handleDelited}
                quotes={quotes}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
