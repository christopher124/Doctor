import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getOneQuotesApi } from "../../../api/admin/quote";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Spinner } from "../../../components/spinner/Spinner";
import Img404 from "../../../assets/img/story-404.svg";
import Logo from "../../../assets/img/SB sin fondo.png";

export function QuotView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quotes, setQuotes] = useState({});
  const { doctor, customer, status, date, room, service } = quotes;
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const quotes = await getOneQuotesApi(id, logout);
      setQuotes(quotes);
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
  ) : Object.keys(quotes).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Cita</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs font-bold text-gray-500 uppercase">
          <div className="justify-center flex p-5">
            <img
              className="ui centered image w-96 h-96"
              src={Img404}
              alt="logo"
            />
          </div>
          <p className="text-center">No se encontraron resultados</p>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="w-full min-h-screen p-4">
        <div className="w-full mb-6 pt-3">
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex flex-col">
              <div className="text-base font-bold text-gray-500 uppercase">
                <span className="text-gray-600">Vista General</span>
                <div className="text-xl font-bold">
                  <span className="text-gray-600">cita</span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
            onClick={() => navigate(`/admin/citas`)}
          >
            <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
            Regresar
          </button>
        </div>
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full mb-2 lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="font-noto w-full p-4 rounded-lg shadow-2xl bg-white border-white">
              <div className="flex flex-row items-center justify-between mb-6"></div>
              <div className="flex flex-col w-full h-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
                <div className="w-full lg:w-2/4">
                  <div className="font-noto w-full p-4 rounded-lg bg-white border-black">
                    <div className=" flex flex-col w-full text-left">
                      <h1 className="py-1 font-bold text-black text-lg">Doctor</h1>
                      <p className="py-1 font-bold text-black text-lg">
                        Nombre :{" "}
                        <span className="py-1 font-bold text-black ">
                          {doctor?.name ? doctor?.name : "N/A"}{" "}
                          {doctor?.last ? doctor?.last : "N/A"}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        Especialidad:{" "}
                        <span className="py-1 font-bold text-black ">
                          {doctor?.specialties ? doctor?.specialties : "N/A"}{" "}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        CED. PROF. PROV.{""}
                        <span className="py-1 font-bold text-black ">
                          {doctor?.cellule ? doctor?.cellule : "N/A"}{" "}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        Teléfono:{" "}
                        <span className="py-1 font-bold text-black ">
                          {" "}
                          {doctor?.phone ? doctor?.phone : "N/A"}
                        </span>
                      </p>
                      <h1 className="py-1 font-bold text-black text-lg">Paciente</h1>
                      <p className="py-1 font-bold text-black text-lg">
                        Nombre:{" "}
                        <span className="py-1 font-bold text-black ">
                          {customer?.name ? customer?.name : "N/A"}{" "}
                          {customer?.last ? customer?.last : "N/A"}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        Edad:{" "}
                        <span className="py-1 font-bold text-black text-lg">
                          {customer?.birthday
                            ? getEdad(customer?.birthday)
                            : "N/A"}{" "}
                          años
                        </span>
                      </p>{" "}
                      <p className="py-1 font-bold text-black text-lg">
                        Fecha de nacimiento:{" "}
                        <span className="py-1 font-bold text-black ">
                          {" "}
                          {format(
                            new Date(
                              customer?.birthday
                                ? customer?.birthday
                                : "No hay datos"
                            ),
                            "dd/MM/yyyy"
                          )}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        Teléfono:{" "}
                        <span className="py-1 font-bold text-black ">
                          {" "}
                          {customer?.phone ? customer?.phone : "N/A"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/4 lg:h-2/4">
                  <div className="font-noto w-full  p-4 rounded-lg bg-white border-white">
                    <div className="w-full flex flex-row items-center justify-between mb-6"></div>
                    <div className="justify-center flex ">
                      {/* <img
                        className="ui centered circular image w-[14.50rem] h-[14.50rem]"
                        src={Img404}
                        alt="logo"
                      /> */}
                      <img
                        src={Logo}
                        className="ui centered circular image w-[24.50rem] h-[14.50rem]"
                        alt="LOGO"
                      />
                    </div>
                    <div className=" text-center flex flex-col w-full">
                      <p className="py-1 font-bold text-black text-lg">
                        Fecha y hora de elaboración:{" "}
                        <span className="py-1 font-bold text-black ">
                          {" "}
                          {format(
                            new Date(date ? date : "No hay datos"),
                            "dd/MM/yyyy hh:mm:ss a"
                          )}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        Consultorio asignado:{" "}
                        <span className="py-1 font-bold text-black ">
                          {" "}
                          {room ? room : "N/A"}
                        </span>
                      </p>
                      <p className="py-3 font-bold text-black text-lg">
                        Estatus de la cita:{" "}
                        <span className="py-1 font-bold text-black ">
                          {status ? status : "N/A"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full h-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
                <div className="w-full lg:w-2/4">
                  <div className="font-noto w-full p-4 rounded-lg bg-white border-black">
                    <div className=" flex flex-col w-full text-left">
                      <h1 className="py-1 font-bold text-black text-lg">
                        Comentarios de la cita:
                      </h1>

                      <p className="text-justify ">
                        {service ? service : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
