import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getOnePrescripApi } from "../../../api/admin/prescription";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Spinner } from "../../../components/spinner/Spinner";
import Img404 from "../../../assets/img/story-404.svg";
import Logo from "../../../assets/img/SB sin fondo.png";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DocPdf } from "./DocPdf";

export function PrescripView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [prescription, setPrescription] = useState({});
  const {
    doctor,
    customer,
    weight,
    size,
    created_at,
    file_number,
    observations,
    treatment,
  } = prescription;
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const prescription = await getOnePrescripApi(id, logout);
      setPrescription(prescription);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);
  function calcularIMC(weight, size) {
    var size;
    var alturaEnMetros = size / 100;
    var weight;

    var imc = Math.round(weight / (alturaEnMetros * alturaEnMetros));
    var clasificacion;

    if (imc < 18.5) {
      clasificacion = "Bajo peso";
    } else if (imc < 25) {
      clasificacion = "Normal";
    } else {
      clasificacion = "Sobrepeso";
    }
    /* Consejo:
    +custumer?.name
    */
    var respuesta =
      "Tu  índice de masa corporal es : " + imc + ", " + clasificacion;
    return respuesta;
  }
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
  ) : Object.keys(prescription).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Doctores</span>
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
                  <span className="text-gray-600">Recetas</span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
            onClick={() => navigate(`/admin/recetas`)}
          >
            <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
            Regresar
          </button>
        </div>
        <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
          <div className="w-full mb-2 lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
            <div className="font-noto w-full p-4 rounded-lg shadow-2xl bg-white border-white">
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col"></div>
                <div className="relative inline-block text-left z-10">
                  <div className="inline-flex rounded-md shadow-sm">
                    <PDFDownloadLink
                      document={<DocPdf prescription={prescription} />}
                      fileName="Receta.pdf"
                    >
                      {cargando ? (
                        <button className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl">
                          <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
                          cargando
                        </button>
                      ) : (
                        <button className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl">
                          <i className="fas fa-file-pdf mr-2 text-lg"></i>
                          Descargar PDF
                        </button>
                      )}
                    </PDFDownloadLink>
                  </div>
                </div>
              </div>
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
                      <p className="py-1 font-bold text-black text-lg ">
                        Edad:{" "}
                        <span className="py-1 font-bold text-black text-lg">
                          {customer?.birthday
                            ? getEdad(customer?.birthday)
                            : "N/A"}{" "}
                          años
                        </span>
                      </p>{" "}
                      <p className="py-1 font-bold text-black text-lg">
                        Estatura:{" "}
                        <span className="py-1 font-bold text-black ">
                          {size ? size : "N/A"} cm{" "}
                        </span>
                      </p>
                      <p className="py-1 font-bold text-black text-lg">
                        Peso:{" "}
                        <span className="py-1 font-bold text-black ">
                          {weight ? weight : "N/A"} Kg{" "}
                        </span>
                      </p>
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
                      <p className="py-1 font-bold text-black ">
                        {calcularIMC(weight, size)}{" "}
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
                            new Date(created_at ? created_at : "No hay datos"),
                            "dd/MM/yyyy hh:mm:ss a"
                          )}
                        </span>
                      </p>
                      <p className="py-3 font-bold text-black text-lg">
                        Número de expediente:{" "}
                        <span className="py-1 font-bold text-black ">
                          {file_number ? file_number : "N/A"}
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
                      <h1 className="py-1 font-bold text-black text-lg ">
                        Observaciones:
                      </h1>

                      <p className="text-justify ">
                        {observations ? observations : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/4 lg:h-2/4 pt-0">
                  <div className="font-noto w-full p-4 rounded-lg bg-white border-black">
                    <div className=" flex flex-col w-full text-left">
                      <h1 className="py-1 font-bold text-black text-lg">
                        Tratamiento:
                      </h1>
                      <p className="text-justify ">
                        {treatment ? treatment : "N/A"}
                      </p>
                    </div>
                    <div className="relative h-32 w-32">
                      <div className="absolute bottom-0 -right-96 h-25 w-25 ">
                        _____________________
                        <p className="text-justify text-lg">Firma del doctor</p>
                      </div>
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
