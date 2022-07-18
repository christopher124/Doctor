import { NavBar } from "../components/navbar/NavBar";
import { Footer } from "../components/footer/Footer";

export function UsView() {
  return (
    <>
      <NavBar transparent />
      <main className="font-noto">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/foto-gratis/covid-coronavirus-enfermedad-trabajadores-sanitarios-concepto-seguro-feliz-medico-mujer-asiatica-medico-i_1258-84338.jpg?t=st=1658094285~exp=1658094885~hmac=a1794f394ec968636691c267f73d09920ca6db9845478105ce4242a7d07e2519&w=1380')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative pt-16 flex h-screen left-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                <h1 className="text-white font-semibold text-5xl text-center">
                  Misión
                </h1>
                <p className="mt-4 text-3xl text-justify text-blue-200">
                  Mejorar la salud y la calidad de vida de los ciudadanos,
                  ofertando servicios sanitarios de calidad, con el paciente como
                  centro de nuestra atención, y profesionales altamente cualificados,
                  en un hospital privado con vocación docente e investigadora.
                </p>
              </div>
            </div>
          </div>
          <div className="container relative pt-16 flex h-screen -right-80">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="pr-0">
                  <h1 className="text-white font-semibold text-5xl text-center">
                    Visión
                  </h1>
                  <p className="mt-4 text-3xl text-justify text-blue-200">
                    Conseguir la mejor asistencia médica y ética, que nos permita crecer,
                    mejorar en eficacia y eficiencia, ser reconocidos por nuestros
                    usuarios por la calidad en los servicios. Ofrecer
                    un servicio preciso, sensato e integral consiguiendo
                    la excelencia en el servicio asistencial y trato humano.
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
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nuestros Especialistas</h2>
                <p className="text-lg leading-relaxed m-4 text-blue-500">
                  Contamos con un grupo de especialistas y médicos generales
                  de gran categoría, preparados para brindarte el mejor servicio y la atención que mereces.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src falta poner fotos
                    src="https://img.freepik.com/foto-gratis/cerrar-sobre-trabajador-salud_23-2149112505.jpg?t=st=1658001251~exp=1658001851~hmac=634fd8010a50c914df922d249038e2c0f33ed7634ac0f0b8e3519031827cd424&w=740"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Iván Zepeda</h5>
                    <p className="mt-1 text-sm text-blue-400 uppercase font-semibold">
                      Cardiólogo
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src falta poner fotos
                    src="https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Denisse Rosas</h5>
                    <p className="mt-1 text-sm text-blue-400 uppercase font-semibold">
                      Oftalmóloga
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://img.freepik.com/foto-gratis/cerrar-sobre-trabajador-salud_23-2149112577.jpg?t=st=1658001465~exp=1658002065~hmac=04d6933953a2464608327be6613bad1786bebf643dfb8d76c4a5ab1dda029841&w=740"
                    // src falta poner fotos
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Benjamín Cuevas</h5>
                    <p className="mt-1 text-sm text-blue-400 uppercase font-semibold">
                      Ginecólogo
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src falta poner fotos
                    src="https://images.unsplash.com/photo-1623887669121-5d4081c7bec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Judith Espinoza</h5>
                    <p className="mt-1 text-sm text-blue-400 uppercase font-semibold">
                      Dermatóloga
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* aqui */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
