import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneDoctorApi } from "../../../api/admin/doctor";
import { getQuotesDoctorApi } from "../../../api/admin/quote";
import Avatar from "avvvatars-react";
import { ListQuotesUserView } from "../../../components/Admin/quotes/ListQuotesUserView";
import Img404 from "../../../assets/img/story-404.svg";

export function DocView() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const {
    name,
    last,
    user,
    birthday,
    address,
    number_int_address,
    suburb,
    town,
    state,
    zip,
    gender,
    phone,
    status,
    specialties,
    created_at,
    updated_at,
  } = doctor;
  const [quotes, serQuotes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const doctor = await getOneDoctorApi(id, logout);
      setDoctor(doctor);
      const Quotes = await getQuotesDoctorApi(id, logout);
      serQuotes(Quotes.slice(0, 5));
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);

  function getEdad(birthday) {
    let hoy = new Date();
    let fechaNacimiento = new Date(birthday);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }

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
            </div>
          </div>
        </div>
        <div className="text-xs font-bold text-gray-500 uppercase">
          <div className="justify-center flex p-5">
            <img className="ui centered image w-96 h-96" src={Img404} />
          </div>
          <p className="text-center">No se encontraron resultados</p>
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
                <span className="text-gray-600 ">Ver Doctor</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
          onClick={() => navigate(`/admin/doctores`)}
        >
          <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
          Regresar
        </button>
      </div>
      <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="w-full lg:w-1/3 lg:h-1/3">
          <div className="font-noto w-full p-3 rounded-lg bg-cyan-800 border-white">
            <div className="w-full flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-light text-white">Doctor</div>
                <div className="text-sm text-white font-bold">
                  <span>Información de usuario</span>
                </div>
              </div>
            </div>
            <div
              className=" justify-center flex p-7
            "
            >
              <Avatar
                value={user?.username ? user?.username : "NU"}
                size={99}
              />
            </div>
            <div className="p-5 text-center flex flex-col w-full">
              <p className="py-1 text-white ">
                Nombre de Usuario:{" "}
                <span className="">
                  {user?.username ? user?.username : "No hay datos"}
                </span>
              </p>
              <p className="py-1 text-white ">
                Correo:{" "}
                <span className="">
                  {user?.email ? user?.email : "No hay datos"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg:h-1/3">
          <div className="w-full p-3 rounded-lg bg-cyan-800">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-sm font-bold text-white">Doctor</div>
                <div className="text-sm font-bold text-white">
                  <span>Información personal</span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className="p-0 flex flex-col w-full">
              <p className="py-[0.15rem] text-white font-noto">
                Nombre completo:{" "}
                <span className="text-bold">
                  {name} {last}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Género:{" "}
                <span className="text-bold">
                  {" "}
                  {gender ? gender : "No hay datos"}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Teléfono:{" "}
                <span className="text-bold">
                  {" "}
                  {phone ? phone : "No hay datos"}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Fecha de nacimiento:
                <span className="text-bold">
                  {birthday ? birthday : "No hay datos"}{" "}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Edad:{" "}
                <span className="text-bold"> {getEdad(birthday)} años</span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Estatus:{" "}
                <span className="text-bold">
                  {" "}
                  {status ? status : "No hay datos"}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Especialidad:{" "}
                <span className="text-bold">
                  {" "}
                  {specialties ? specialties : "No hay datos"}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Domicilio:{" "}
                <span className="text-bold">
                  {" "}
                  {address ? address : "No hay datos"}, INT:{" "}
                  {number_int_address ? number_int_address : "N/A"},{" "}
                  {suburb ? suburb : "No hay datos"},{" "}
                  {town ? town : "No hay datos"},{" "}
                  {state ? state : "No hay datos"}, {zip ? zip : "No hay datos"}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Fecha de creación:{" "}
                <span className="text-bold">
                  {" "}
                  {format(
                    new Date(created_at ? created_at : "No hay datos"),
                    "dd/MM/yyyy hh:mm:ss a"
                  )}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Última actualización:{" "}
                <span className="text-bold">
                  {" "}
                  {format(
                    new Date(updated_at ? updated_at : "No hay datos"),
                    "dd/MM/yyyy hh:mm:ss a"
                  )}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-2 lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="font-noto w-full p-4 rounded-lg  bg-cyan-800 border-white">
          <div className="flex flex-row items-center justify-between mb-6">
            <div className="flex flex-col">
              <div className="text-sm font-bold text-white">Doctor</div>
              <div className="text-sm font-bold text-white">
                <span>Citas</span>
              </div>
            </div>
          </div>
          {cargando ? (
            <Spinner />
          ) : Object.keys(quotes).length === 0 ? (
            <p className="py-[0.15rem] font-bold text-center text-white ">
              El Doctor no tiene citas agendadas
            </p>
          ) : (
            <div className="flex flex-col w-full">
              <div className="overflow-x-scroll lg:overflow-hidden">
                <table
                  id="tableCustomers"
                  className="w-full text-sm text-center text-white"
                >
                  <thead className="text-xs uppercase bg-cyan-800 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="text-white py-3 px-6  text-center"
                      >
                        paciente
                      </th>
                      <th
                        scope="col"
                        className="text-white py-3 px-6  text-center"
                      >
                        doctor
                      </th>
                      <th
                        scope="col"
                        className="text-white py-3 px-6  text-center"
                      >
                        Fecha de la cita
                      </th>
                      <th
                        scope="col"
                        className="text-white py-3 px-6  text-center"
                      >
                        Tipo de servicio
                      </th>
                      <th
                        scope="col"
                        className="text-white py-3 px-6 text-center"
                      >
                        Consultorio asignado
                      </th>
                      <th
                        scope="col"
                        className="text-white font-bold py-3 px-6  text-center "
                      >
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes?.map((quotes) => (
                      <ListQuotesUserView key={quotes.id} quotes={quotes} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
