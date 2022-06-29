import { NavBar } from "../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
export function HomeView() {
  return (
    <>
      <NavBar fixed />
      <section className=" font-noto header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className=" font-bold text-4xl text-blueGray-600">
                Clinica Santa Barbara
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Los millones de pacientes a quienes brindamos tratamiento cada
                año nos preparan para tratar a la persona que más importa: tú.
              </p>
              <div className="mt-12">
                <Link
                  to="/citas"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Agendar cita
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.christopherurielsosagarcia.qrcode"
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  target="_blank"
                >
                  Descargar App
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://demos.creative-tim.com/notus-react/static/media/pattern_react.01996482.png"
          alt="..."
        />
      </section>

      <section className=" font-noto mt-48 md:mt-40 pb-40 relative bg-blue-100">
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
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-stethoscope"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Más experiencia
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Los millones de pacientes a quienes brindamos
                        tratamiento cada año nos preparan para tratar a la
                        persona que más importa: tú.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-user-nurse"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Tú eres la prioridad
                      </h6>
                      <p className="mb-4 text-blueGray-500">
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
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-notes-medical"></i>{" "}
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Las respuestas correctas
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Confía en nuestros expertos para obtener un diagnóstico
                        preciso y el mejor plan para ti la primera vez.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Innovación con repercusión
                      </h6>
                      <p className="mb-4 text-blueGray-500">
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
