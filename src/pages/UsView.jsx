import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";
import Imgn from "../assets/img/home.png"
export function UsView() {
  return (
    <>
      <NavBar transparent />
      <main className="font-noto">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-20 w-[100%] h-[90%] bg-center bg-cover">
            <img src={Imgn} alt="" />
            <span
              id="blackOverlay"
              className="w-[20%] h-[20%] absolute opacity-75 "
            ></span>
          </div>
          {/* bug */}
          <div className="container relative  flex h-screen left-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
              </div>
            </div>
          </div>
        </div>
        <section className="pb-40 bg-blue-200 -mt-60">
          <div className="container mx-auto px-4">
            {/* <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>

                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blue-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 pt-3 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blue-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blue-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap items-center mt-18">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-40">
                <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-check text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Misión
                </h3>
                <p className="text-xl font-light leading-relaxed mt-0 mb-4 text-black text-justify">
                  Mejorar la salud y la calidad de vida de los ciudadanos,
                  ofertando servicios sanitarios de calidad, con el paciente como
                  centro de nuestra atención, y profesionales altamente cualificados,
                  en un hospital privado con vocación docente e investigadora.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg pt-40">
                  <img
                    alt="..."
                    src="https://img.freepik.com/foto-gratis/joven-doctora-pulgares-arriba-gesto-pie-pasillo-hospital_1303-21220.jpg?t=st=1658298917~exp=1658299517~hmac=fd6abd477f30e7c616df4b49ec5965c94fdd61ca19e9ab08cfdf5f1bd5ff9300&w=1380"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          {/* mision */}
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg mb-20"
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12 -mt-20">
                  <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-hospital text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Visión</h3>
                  {/* text-blue-500 */}
                  <p className="mt-4 text-xl leading-relaxed text-black text-justify ">
                    Conseguir la mejor asistencia médica y ética, que nos permita crecer,
                    mejorar en eficacia y eficiencia, ser reconocidos por nuestros
                    usuarios por la calidad en los servicios. Ofrecer
                    un servicio preciso, sensato e integral consiguiendo
                    la excelencia en el servicio asistencial y trato humano.
                  </p>
                  <ul className="list-none mt-6">
                  </ul>
                </div>
              </div>
            </div>
            {/* Acordion */}
          </div>
        </section>
        <div className="p-10 bg-gray-200 text-gray-700">
          <div className=" relative w-[400px] overflow-hidden">
            <input type="checkbox" />
            <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
              <h1 className=" text-lg font-semibold text-white">¿Donde estamos ubicados?</h1>
            </div>
            {/* icono de flecha */}
            <div>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        {/* Preguntas frecuentes */}
      </main>

      <Footer />
    </>
  );
}
