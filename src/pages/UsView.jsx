import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";
import Imgn from "../assets/img/home.png"
import Mision from "../assets/img/Mision-img.jpg"
import Vision from "../assets/img/Vision-img.jpg"

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
                <p className="text-2xl font-light leading-relaxed mt-0 mb-4 text-black text-justify">
                  Mejorar la salud y la calidad de vida de los ciudadanos,
                  ofreciendo servicios sanitarios de calidad, con el paciente como
                  centro de nuestra atención, en una Clínica privada con vocación docente e investigadora.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg pt-40">
                  <img
                    alt="..."
                    src={Mision}
                    className="w-full align-middle rounded-2xl"
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
                  className="max-w-full rounded-2xl shadow-lg mb-20"
                  src={Vision}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12 -mt-20">
                  <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-hospital text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Visión</h3>
                  {/* text-blue-500 */}
                  <p className="mt-4 text-2xl leading-relaxed text-black text-justify ">
                    Conseguir la mejor asistencia médica y ética, que nos permita crecer,
                    mejorar en eficacia y eficiencia, ser reconocidos por nuestros
                    clientes por la calidad en los servicios. Ofrecer
                    un diagnóstico preciso, sensato e integral, obteniendo
                    la excelencia en el servicio asistencial y trato humano.
                  </p>
                  <ul className="list-none mt-6">
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-10 text-gray-700 mb-32 mt-20 pb-10 pt-5 w-[50%] ml-auto mr-auto">
            <h2 className=" text-center text-3xl mt-3 mb-3 text-black font-semibold">Preguntas frecuentes</h2>
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Qué costos tienen las consultas?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">La consulta general tiene un costo de $200 y las especialidades $700.</p>
                </div>
              </div>
            </div>
            {/* Segunda Pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Qué especialidades tienen?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">Contamos con cardiólogo, cirujano plástico, dermatólogo,
                    gastroenterólogo, geriatra, ginecólogo, neurólogo, nutriólogo,
                    oftalmólogo, oncólogo, oncólogo, otorrinolaringólogo, pediatra,
                    traumatólogo y urólogo.</p>
                </div>
              </div>
            </div>
            {/* Tercera Pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Cuentan con farmacia?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              {/* Contenido */}
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">Sí, contamos una gran variedad de medicamentos en nuestra farmacia.</p>
                </div>
              </div>
            </div>
            {/* Cuarta Pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Qué horario de trabajo tienen?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              {/* Contenido */}
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">La clínica está abierta las 24 horas y nuestros especialistas atienden de 9 a.m. - 5 p.m.
                    (consultar agenda de citas para ver disponibilidad).</p>
                </div>
              </div>
            </div>
            {/* Quinta Pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Cómo puedo agendar una cita?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              {/* Contenido */}
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">A través de la aplicación móvil GoCare Doc o contactando a nuestro
                    personal mediante teléfono, correo o redes sociales.</p>
                </div>
              </div>
            </div>
            {/* Sexta Pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Cómo puedo pagar mi cita?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              {/* Contenido */}
              <div className="bg-gray-200 overflow-hidden transition-all 
              duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">El pago se realiza en la cínica con efectivo, tarjeta de crédito o débito.</p>
                </div>
              </div>
            </div>
            {/* Septima Pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Cuentan con estacionamiento?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              {/* Contenido */}
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">Sí, contamos con amplio estacionamiento para clientes y empleados.</p>
                </div>
              </div>
            </div>
            {/* Octava pregunta */}
            <div className=" relative w-auto overflow-hidden">
              <input type="checkbox" className="
             absolute top-0 inset-x-0 peer
             w-full h-12
             opacity-0 z-10 cursor-pointer
            "/>
              <div className=" bg-blue-500 h-12 w-full pl-5 flex items-center">
                <h1 className=" text-2xl font-semibold text-white">¿Cómo llegar mediante transporte público?</h1>
              </div>
              {/* icono de flecha */}
              <div className=" absolute top-3 right-3
            text-white transition-transform duration-500
            rotate-0 peer-checked:rotate-180
            ">
                <i className="fas fa-chevron-down"></i>
              </div>
              {/* Contenido */}
              <div className="bg-gray-200 overflow-hidden transition-all 
            duration-500
             max-h-0 peer-checked:max-h-40
            ">
                <div className=" p-4 ">
                  <p className=" text-xl text-justify">Las rutas T11A-C02 (51A Guadalupe), T11A-C03 (51B Tepeyac-Colli), T04B-1 (59-B) y la R-101 Vía 1 pasan cerca de nuestras instalaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Acordion */}

      </main>

      <Footer />
    </>
  );
}
