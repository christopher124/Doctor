import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  getPrescripApi,
  deletePrescripApi,
} from "../../../api/admin/prescription";
import {
  ListDoctorView,
  ListPrescriptionView,
} from "../../../components/Admin/prescription/ListPrescriptionView";
import { Spinner } from "../../../components/spinner/Spinner";
import Swal from "sweetalert2";
import Excel from "react-html-table-to-excel";
import Img404 from "../../../assets/img/story-404.svg";

export function ListPrescripView() {
  const navigate = useNavigate();
  const [prescription, setPrescription] = useState([]);
  const [tableRecetas, SetTableRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const prescription = await getPrescripApi(logout);
      setPrescription(prescription);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);
  if (logout === undefined) {
    return null;
  }
  if (!auth && !logout) {
    navigate("/");
    return null;
  }

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
        const response = await deletePrescripApi(id, logout);
        if (response) {
          Swal.fire(
            "¡Eliminado!",
            "El registro ha sido eliminado correctamente.",
            "success"
          );
          const arrayPescriptions = prescription.filter(
            (prescription) => prescription.id !== id
          );
          setPrescription(arrayPescriptions);
        }
      }
    });
  };

  return cargando ? (
    <Spinner />
  ) : Object.keys(prescription).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Recetas</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  {Object.keys(prescription).length === 0
                    ? "No hay Recetas registradas"
                    : null}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nueva/receta")}
              type="button"
              className="flex flex-row items-center justify-center px-4 py-3 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <span className="p-1">Nuevo Registro</span>
            </button>
          </div>
        </div>
      </div>
      {Object.keys(prescription).length === 0 ? (
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
                <span className="text-gray-600">Recetas</span>
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
                onClick={() => navigate("/admin/nueva/receta")}
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
        <table
          id="tablePrescription"
          className="w-full text-sm text-center text-white"
        >
          <thead className="text-xs uppercase bg-[#687584] text-white">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Número de expediente
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Nombre del paciente
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Alergias
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Observaciones
              </th>
              <th scope="col" className="text-white py-3 px-6 text-center">
                Fecha y hora de elaboración
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
            {prescription.map((prescription) => (
              <ListPrescriptionView
                handleDelited={handleDelited}
                key={prescription.id}
                prescription={prescription}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
