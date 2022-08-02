import React from "react";
import GoogleMaps from "simple-react-google-maps";
import { NavBar } from "../../components/navbar/NavBar";
import { TOKENMAP } from "../../utils/constants";
import SBFuera from "../../assets/img/SB-porfuera3.jpg"
import SBNoche from "../../assets/img/SB-noche.jpg"
import { Footer } from "../../components/footer/Footer";

export function MapsView() {
  return (
    <>
      <NavBar />
      {/* Map */}
      <div className=" mt-[80px] px-1 mb-1 items-center ml-auto mr-auto ">
        <GoogleMaps
          apiKey={TOKENMAP}
          style={{ height: "885px", width: "100%" }}
          zoom={17}
          center={{
            lat: 20.63296,
            lng: -103.468021,
          }}
          markers={{
            lat: 20.63296,
            lng: -103.468021,
          }}
        />
      </div>
      <section className="pb-40 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-18">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-40">
              <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 600 502">
                  <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Ubicación
              </h3>
              <p className="text-2xl font-light leading-relaxed mt-0 mb-4 text-black text-justify">
                Ubicación accesible, Arenales Tapatíos 92, 45066 Zapopan, Jalisco, México.
                Ampllio estacionamiento las 24hrs para nuestros clientes y personal.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg pt-28">
                <img
                  alt="..."
                  src={SBFuera}
                  className="w-[100%] align-middle rounded-3xl"
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
                className="max-w-full rounded-3xl shadow-lg mb-20"
                src={SBNoche}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12 -mt-20">
                <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 0 600 502">
                    <path d="M320.5 381.5C324.6 435.5 353 482.6 394.8 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L522.1 193.9C513.6 192.7 504.9 192 496 192C453.6 192 414.7 207 384.3 232L384 232H328V176C328 167.2 320.8 160 311.1 160H263.1C255.2 160 247.1 167.2 247.1 176V232H191.1C183.2 232 175.1 239.2 175.1 248V296C175.1 304.8 183.2 312 191.1 312H247.1V368C247.1 376.8 255.2 384 263.1 384H311.1C315.1 384 318 383.1 320.5 381.5H320.5zM328 312H329.1C328.7 313.1 328.4 314.3 328 315.4V312zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z" /></svg>
                </div>
                <h3 className="text-3xl font-semibold">Atención</h3>
                {/* text-blue-500 */}
                <p className="mt-4 text-2xl leading-relaxed text-black text-justify ">
                  Clínica Santa Bárbara les recuerda que brindamos el mejor servício
                  de atención médica las 24hrs durante los 365 días del año.
                </p>
                <ul className="list-none mt-6">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
