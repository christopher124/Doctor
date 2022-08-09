export function Footer() {
  return (
    <>
      <footer className="font-mont relative bg-blue-200 pt-8 pb-6">
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
              className="text-blue-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Clínica Santa Bárbara</h4>
              <h5 className="text-xl mt-0 -mb-2 text-blue-600">
                Encuentra tu especialista y pide tu cita
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://www.facebook.com/SBClinicaSantaBarbara">
                    <i className="fab fa-facebook-square text-2xl"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-500 text-base font-semibold mb-2">
                    Enlaces de Interés
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/nosotros"
                      >
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/servicios"
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/ubicacion"
                      >
                        Ubicación
                      </a>
                      <li>
                        <a
                          href="https://www.iubenda.com/privacy-policy/41356316"
                          className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm "
                          title="Política de Privacidad "
                        >
                          Política de Privacidad
                        </a>
                      </li>
                    </li>
                    <li>
                      <a
                        className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/servicios"
                      >
                        CSB@clinicasantabarbaramx.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blue-500 text-base font-semibold mb-2">
                    Información Adicional
                  </span>
                  <div className="list-unstyled">
                    <p
                      className="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                    >
                      Domicilio: Arenales Tapatíos 92, 45066 Zapopan, Jalisco,
                      México.
                      <br />
                      Tel: 33 1028 8440
                      <br />
                      Tel: 33 1981 4337
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blue-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blue-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Gocare Doc by{" "}
                <a
                  href="https://nextiasolutionsmx.com/"
                  className="text-blue-500 hover:text-blue-800"
                >
                  Nextia Solutions MX
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
