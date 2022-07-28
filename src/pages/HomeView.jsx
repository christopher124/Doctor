import { NavBar } from "../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Imghome from "../assets/img/prueba3.jpg";

export function HomeView() {
  return (
    <>
      <NavBar fixed />
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div
          className="absolute w-[100%] h-[100%] bg-center bg-cover right-0 mt-56"
          style=
          {{
            backgroundImage: `url(${Imghome})`
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 "
          ></span>
        </div>
        <div className="container header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pr-12">
                <h1 className=" font-semibold text-7xl text-black">
                  Clínica Santa Bárbara
                </h1>
                <p className="mt-4 text-black mr-[78px] text-2xl text-justify">
                  Instalaciones cómodas y equipo médico de la más alta calidad,
                  convergen para ofrecer una experiencia que sobrepasa las expectativas
                  de un hospital convencional.
                </p>
                <div className="mt-8">
                  <Link
                    to="/citas"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Agendar cita
                  </Link>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.christopherurielsosagarcia.qrcode"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    target="_blank"
                  >
                    Descargar App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          ></svg>
        </div>
      </div>
      <section className=" font-noto mt-48 md:mt-40 pb-40 relative bg-blue-100">
        {/* SVG white */}
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-100 fill-current"
              points="0 0 39000 100 0 100"
            ></polygon>
          </svg>
        </div>


        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://t4.ftcdn.net/jpg/02/93/11/31/240_F_293113129_4K3WjrKQY6BEnW7xBINa5NY5vpzFsWxm.jpg"
                  className="w-full align-middle rounded-t-lg -mb-44"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-stethoscope text-xl"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Más experiencia
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-justify">
                        Los millones de pacientes a quienes brindamos
                        tratamiento cada año nos preparan para tratar a la
                        persona que más importa: tú.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-user-nurse text-xl"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Tú eres la prioridad
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-justify">
                        El tratamiento en Santa Barbara es verdaderamente una
                        experiencia humana. Recibes atención médica como una
                        persona, antes que nada.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-notes-medical text-xl"></i>{" "}
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold ">
                        Las respuestas correctas
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-justify">
                        Confía en nuestros expertos para obtener un diagnóstico
                        preciso y el mejor plan para ti la primera vez.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt text-xl"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Innovación con repercusión
                      </h6>
                      <p className="mb-4 text-blueGray-500 text-xl text-justify">
                        Toda la atención médica a nuestros pacientes, la
                        educación y la investigación están orientadas a realizar
                        descubrimientos que puedan ayudar a que te recuperes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
