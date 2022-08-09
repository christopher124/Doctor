import { NavBar } from "../components/navbar/NavBar";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Servicios from "../assets/img/Servicios-Principal.jpg"
import Paq1 from "../assets/img/Paq-parto.jpg"
import Paq2 from "../assets/img/Paq-cesarea.jpg"
import Paq3 from "../assets/img/paq-lips.jpg"
import Paq4 from "../assets/img/Paq-botox.jpg"
import cardiologo from "../assets/img/cardiologo.jpeg"
import oftalmologo from "../assets/img/oftalmologo.jpg"
import urologo from "../assets/img/urologo.jpeg"
import dermatologo from "../assets/img/dermatologo.jpeg"
import neurologo from "../assets/img/neurologa.jpeg"
import ginecologo from "../assets/img/ginecologo.jpeg"
import Pediatra from "../assets/img/pediatra.jpeg"
import nutri from "../assets/img/nutri.jpeg"

export function ServicesView() {
  return (
    <>
      {" "}
      <NavBar />
      <main className="font-noto">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-20 w-full h-full bg-center bg-cover bg-fixed "
            style={{
              backgroundImage:
                `url(${Servicios})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75"
            ></span>
          </div>
          <div className="container header relative pt-16 items-center flex h-screen max-h-860-px">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-2">
                <div className="pr-20">
                  <h1 className="text-[#46B0CF] font-semibold text-7xl">
                    Servicios
                  </h1>
                  <p className="mt-2 text-2xl text-black mr-60 px-2 py-1 text-justify">
                    Atención de primer nivel, contamos con un gran número de especialistas y médicos generales altamente cualificados,
                    listos para brindarte la hospitalidad y los servicios que mereces.
                  </p>
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

        <section className="pb-20 bg-blue-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-calendar text-xl"></i>
                    </div>

                    <h6 className="text-xl font-semibold">Antigüedad</h6>
                    <p className="mt-2 mb-4 text-blue-500 text-center text-lg">
                      Tenemos más de cinco años de experiencia
                      cuidando la salud de las personas y brindando el mejor servicio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 pt-3 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award text-xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Especialistas</h6>
                    <p className="mt-2 mb-4 text-blue-500 text-center text-lg">
                      Contamos con los mejores especialistas, listos para
                      brindarte la atención y el servicio que mereces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-syringe text-xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Equipos especializados</h6>
                    <p className="mt-2 mb-4 text-blue-500 text-center text-lg">
                      Nuestros quirófanos cuentan con equipos de la más alta
                      tecnología de vanguardia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 mb-10 ">
              <div className="w-full md:w-6/12 px-10 mr-auto ml-auto mb-20 bg-white rounded-3xl">
                <h3 className="text-3xl pt-3 pb-10 font-semibold leading-normal text-center">
                  Paquete de maternidad
                </h3>
                <h4 className="text-2xl font-semibold ">Instalaciones</h4>
                <p className="text-xl font-light leading-relaxed mt-1 mb-1 text-black ">
                  - Un día de hospitalización. <br />
                  - Un día de cunero. <br />
                  - Una habitación estándar. <br />
                  - Televisión Wi-Fi. <br />
                  - Cama eléctrica. <br />
                  - Equipo de cirugía de parto <br />
                  - Monitor de presión.
                </p>
                <h4 className="text-2xl mt-3 font-semibold ">Materiales (Mamá)</h4>
                <p className="text-xl font-light leading-relaxed mt-1 mb-1 text-black ">
                  - Una aguja desechable. <br />
                  - Un paquete de gasas. <br />
                  - Un rastrillo desechable. <br />
                  - Pañales para adulto. <br />
                  - Toalla obstétrica. <br />
                  - Una sutura. <br />
                  - Un yelco. <br />
                  - Una sonda Nélaton. <br />
                  - Una cinta umbilical. <br />
                  - Un equipo de venoclisis. <br />
                  - Dos guantes tacto. <br />
                  - Dos jeringas. <br />
                  <br />
                </p>
              </div>
              {/* Seccion 2 */}
              <div className=" -ml-96 mr-60 mb-40 ">
                <h4 className="text-2xl font-semibold ">Medicamento (Mamá)</h4>
                <p className="text-xl font-light leading-relaxed mt-1 mb-3 text-black  float-left">
                  - Tres sueros (1000 ml). <br />
                  - Cuatro oxitocinas AMP. <br />
                  - Veinte CC Xylocaína. <br />
                  - Tabletas para Prodolina<br />
                  u otro analgésico.
                </p>
                <h4 className="text-2xl font-semibold ">Materiales (Bebé)</h4>
                <p className="text-xl font-light leading-relaxed mt-1 mb-1 text-black float-left">
                  - Una sonda k-31. <br />
                  - Cuatro hrs. incubadora en cunero. <br />
                  - Cuatro hrs. oxígeno máx. <br />
                  - Pañales.<br />
                  - Cloranfenicol en gotas. <br />
                  - Una solución glucosada 500ml. <br />
                  - Un biberón. <br />
                  - Una jeringa #20. <br />
                  - Una jeringa insulina. <br />
                  - Fórmula durante la estancia.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#46B0CF] text-center">
                  <img
                    alt="..."
                    src={Paq1}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    ></svg>
                    <h4 className="text-2xl font-bold text-white">
                      EL MEJOR CUIDADO PARA TI Y TU BEBÉ
                    </h4>
                    <p className="text-xl font-light mt-2 text-white">
                      Paquete básico desde $9,999 MXN y $14,999 MXN el Paquete Plus que incluye
                      consultas y ecosonogramas.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segunda espècialidad */}

        <section className="relative py-20 mb-48">
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

          {/* Segunda */}

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto rounded-lg bg-[#46B0CF] text-center">
                <img
                  alt="..."
                  className="w-full align-middle rounded-t-lg"
                  src={Paq2}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                  <h4 className="text-2xl font-bold text-white">
                    LOS MEJORES CUIDADOS PARA TI Y TU BEBÉ
                  </h4>
                  <p className="text-xl font-light mt-2 text-white text-justify">
                    Paquete básico desde $14,999 MXN y $16,999 MXN el Paquete Plus que incluye
                    consultas y ecosonogramas.
                  </p>
                </blockquote>
              </div>

              {/* Texto */}

              <div className="w-full md:w-6/12 px-16 mr-auto ml-auto mb-0 bg-blue-200 rounded-3xl">
                <div className="md:pr-12">
                  <h3 className="text-3xl pt-3 pb-10 font-semibold leading-normal text-center">
                    Cesárea
                  </h3>
                  <h4 className="text-2xl font-semibold ">Instalaciones</h4>
                  <p className="text-xl font-light leading-relaxed mt-1 mb-1 text-black ">
                    - Un día de hospitalización. <br />
                    - Un día de cunero. <br />
                    - Una habitación estándar. <br />
                    - Televisión Wi-Fi. <br />
                    - Cama eléctrica. <br />
                    - Derecho de sala por dos horas. <br />
                    - Equipo de cirugía de cesárea. <br />
                    - Monitor de presión.
                  </p>
                  <h4 className="text-2xl font-semibold mt-3">Materiales (Bebé)</h4>
                  <p className="text-xl font-light leading-relaxed mt-1 mb-1 text-black float-left">
                    {/* bebe */}
                    - Una sonda k-31. <br />
                    - Cuatro hrs. incubadora en cunero. <br />
                    - Cuatro hrs. oxígeno máx. <br />
                    - Pañales.<br />
                    - Cloranfenicol en gotas. <br />
                    - Una solución glucosada 500ml. <br />
                    - Un biberón. <br />
                    - Una jeringa #20. <br />
                    - Una jeringa insulina. <br />
                    - Fórmula durante la estancia. <br />
                    <br />
                  </p>

                </div>
              </div>
              <div className="-ml-96 -mr-72 mb-0 mt-6 pr-72">
                <h4 className="text-2xl font-semibold">Medicamento (Mamá)</h4>
                <p className="text-xl font-light leading-relaxed mt-1 mb-3 text-black">
                  - Dos sueros (1000 ml). <br />
                  - Cuatro oxitocinas AMP. <br />
                  - Veinte CC Xylocaína. <br />
                  - Tabletas para Prodolina<br />
                  u otro analgésico.
                </p>
                <h4 className="text-2xl font-semibold ">Materiales (Mamá)</h4>
                <p className="text-xl font-light leading-relaxed mt-1 mb-1 text-black">
                  - Una aguja desechable. <br />
                  - Un paquete de gasas. <br />
                  - Un rastrillo desechable. <br />
                  - Pañales para adulto. <br />
                  - Toalla obstétrica. <br />
                  - Una sutura. <br />
                  - Un yelco. <br />
                  - Una sonda Nélaton. <br />
                  - Una cinta umbilical. <br />
                  - Un equipo de venoclisis. <br />
                  - Dos guantes tacto. <br />
                  - Dos jeringas. <br />
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* 3 paquete */}
        <div className="font-mont relative bg-blue-200 pt-0 pb-0" >
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
        </div>
        <section className="pb-28 bg-blue-200 pt-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-20 mb-10 ">
              <div className="w-full md:w-4/12 px-20 mr-auto ml-auto mb-20 bg-white rounded-3xl">
                <h3 className="text-3xl pt-5 pb-5 font-semibold leading-normal text-center">
                  Paquete Labios con volumen
                </h3>
                <h4 className="text-2xl font-semibold text-center">¿Qué es?</h4>
                <p className="text-xl font-light leading-relaxed mt-5 text-black text-justify px-5">
                  Es una cirugía estética que incluye: <br />
                  - Aumento de volumen en los labios. <br />
                  - Mejor hidratación. <br />
                  - Apariencia de labios naturales. <br />
                  - Corrección de asimetrías en los labios. <br />
                  - Mejora de la apariencia de tu sonrisa. <br />
                  - Duración de hasta 18 meses.  <br />
                  - Monitor de presión. <br />
                  <br />
                </p>
              </div>

              {/* Seccion 3*/}
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#46B0CF] text-center">
                  <img
                    alt="..."
                    src={Paq3}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    ></svg>
                    <h4 className="text-2xl font-bold text-white">
                      AUMENTO DE VOLUMEN DE LABIOS
                    </h4>
                    <p className="text-xl font-light mt-2 text-white text-justify">
                      Reponer el volumen perdido con los años en el tercio medio del rostro y rellenar arrugas
                      estéticas en el tercio inferior.
                      Precio establecido de $4,500 MXN.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 especialidad */}
        <section className="relative py-20 mb-20">
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

          {/* Cuarta */}

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto rounded-lg bg-[#46B0CF]">
                <img
                  alt="..."
                  className="w-full align-middle rounded-t-lg"
                  src={Paq4}
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                  <h4 className="text-2xl font-bold text-white text-center">
                    TRATAMIENTO ESPECIALIZADO CON BÓTOX
                  </h4>
                  <p className="text-xl font-light mt-2 text-white text-justify">
                    Procedimiento especializado no quirúrgico con precio de $4,000 MXN
                  </p>
                </blockquote>
              </div>

              {/* Texto */}

              <div className="w-full md:w-4/12 px-20 mr-auto ml-auto mb-5 bg-blue-200 rounded-3xl">
                <div className="md:pr-12">
                  <h3 className="text-3xl pt-5 pb-5 font-semibold leading-normal text-center ml-10">
                    Paquete Bótox Especial
                  </h3>
                  <h4 className="text-2xl font-semibold text-center ml-10">¿Qué es?</h4>
                  <p className="text-xl font-light leading-relaxed mt-5 text-black ml-8 mr-auto">
                    Procedimiento estético que incluye: <br />
                    - Eliminar líneas de expresión. <br />
                    - Eliminar patas de gallo. <br />
                    - Tratamiento de arrugas. <br />
                    - Relajación de músculos. <br />
                    - Duración de 4 a 8 meses. <br />
                    - Tratamiento del ojo vago. <br />
                    - Seguimiento regular. <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especialistas */}


        {/* Seccion 2 */}
        <section className="relative py-0 mb-0">
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
                className="text-gray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <>
          {/* component */}
          <div className="mb-[70px] bg-gray-100">
            {/* Code block starts */}
            <dh-component>
              <div className="container flex justify-center mx-auto pt-14">
                <div>
                  <p className="text-gray-500 text-3xl text-center font-normal pb-3">
                    EQUIPO DE ESPECIALISTAS
                  </p>
                  <h1 className="xl:text-2xl text-xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    Contamos con un grupo de especialistas y médicos generales
                    de gran categoría, preparados para brindarte el cuidado que mereces.
                  </h1>
                </div>
              </div>
              <div className="w-full bg-gray-100 px-10 pt-10">
                <div className="container mx-auto">
                  <div
                    aria-label="Behind the scenes People "
                    className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                  >
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={oftalmologo}
                              alt=""
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dr. Sergio Espinoza
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Oftalmólogo
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Especialista con más de 5 años de experiencia, listo para
                            brindarte el trato que mereces.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={cardiologo}
                              alt=""
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dr. Iván Zepeda
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Médico Cardiólogo
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Médico Cardiólogo, debidamente certificado por el Consejo
                            Mexicano de Cardiología (No. Certificación 3139).
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={urologo}
                              alt=""
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dr. Uriel García
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Úrologo
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Alta Especialidad en Endourología, caracterizado por un trato humano y
                            profesional.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram" >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={dermatologo}
                              alt="Dermatologo"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dra. Sofía Vargas
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Dermatología cosmética
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Dermatóloga certificada que cuenta con una amplia formación
                            en el campo de la Dermatología cosmética.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={neurologo}
                              alt="Neurologo"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dra. Judith Rosas
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Neuróloga
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Neuróloga con alta especialidad en enfermedades neuromusculares,
                            siendo la única en el occidente del país con esta formación.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram" >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={ginecologo}
                              alt="Ginecologo"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dr. Brandon Rubio
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Ginecólogo
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Más de 5 años de experiencia, médico egresado de la Universidad de Guadalajara,
                            con la especialidad de Ginecología y obstetricia.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter" >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram" >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={Pediatra}
                              alt="Pediatra"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Dra. Denisse Sandoval
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Pediatra
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Certificada ante el Consejo Mexicano de Certificación en Pediatría,
                            en constante actualización y altamente comprometida en brindar atención de calidad.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={nutri}
                              alt="Nutriologo"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            Lic. Carolina Ávila
                          </h1>
                          <p className="text-gray-800 text-lg text-center">
                            Nutrióloga
                          </p>
                          <p className="text-center text-gray-600 text-base pt-3 font-normal">
                            Especialista en Nutrición Clínica y Deportiva,
                            realicé mis prácticas clínicas en el servicio de bariatría, obesidad, gastroenterología, prevención,
                            geriatría y control de peso.
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="https://twitter.com/?lang=es" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.facebook.com/" className="mx-5">
                              <div aria-label="Twitter">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 17 18"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-facebook"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-5">
                              <div aria-label="Instagram">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={5}
                                    ry={5}
                                  />
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dh-component>
          </div>
        </>

        {/* <section className="pb-20 relative block bg-blue-800">
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
                className="text-blue-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> 
        </section> */}
      </main>
      <Footer />
    </>
  );
}
