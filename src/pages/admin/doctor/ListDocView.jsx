import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getDoctorApi, deleteDoctorApi } from "../../../api/admin/doctor";
import { ListDoctorView } from "../../../components/Admin/doctor/ListDoctorView";
import { Spinner } from "../../../components/spinner/Spinner";
import Swal from "sweetalert2";
export function ListDocView() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor);
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
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteDoctorApi(id, logout);
        if (response) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          const arrayDoctor = doctor.filter((doctor) => doctor.id !== id);
          setDoctor(arrayDoctor);
        }
      }
    });
  };

  return cargando ? (
    <Spinner />
  ) : Object.keys(doctor).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Doctores</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  No hay doctores registrados
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nuevo/doctor")}
              className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <i className="fa fa-solid fa-plus"></i>
              <span>Nuevo Registro</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Doctores</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nuevo/doctor")}
              className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <i className="fa fa-solid fa-plus"></i>
              <span>Nuevo Registro</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Nombre y apellido
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Correo
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-left">
                Fecha de cumpleaños
              </th>
              {/* <th scope="col" className="text-white py-3 px-6 text-left">
                Direccion
              </th> */}
              <th scope="col" className="text-white py-3 px-6 text-left">
                Telefono
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Status
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Especalidad
              </th>

              <th
                scope="col"
                className="text-white font-bold py-3 px-6 text-left "
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {doctor.map((doctor) => (
              <ListDoctorView
                handleDelited={handleDelited}
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
