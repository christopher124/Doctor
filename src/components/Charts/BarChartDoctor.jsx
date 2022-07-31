import { useState, useEffect, useRef, useCallback } from "react";
import { getQuotesApi } from "../../api/admin/quote";
import useAuth from "../../hooks/useAuth";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export function BarChartDoctor() {
  const [citasG, setCitasG] = useState([]);
  const [citasCa, setCitasCa] = useState([]);
  const [citasCp, setCitasCp] = useState([]);
  const [citasD, setCitasD] = useState([]);
  const [citasGas, setCitasGas] = useState([]);
  const [citasGeri, setCitasGeri] = useState([]);
  const [citasGine, setCitasGine] = useState([]);
  const [citasNe, setCitasNe] = useState([]);
  const [citasNu, setCitasNu] = useState([]);
  const [citasOf, setCitasOf] = useState([]);
  const [citasOn, setCitasOn] = useState([]);
  const [citasOto, setCitasOto] = useState([]);
  const [citasPedi, setCitasPedi] = useState([]);
  const [citasTrau, setCitasTrau] = useState([]);
  const [citasUro, setCitasUro] = useState([]);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const Citas = await getQuotesApi(logout);
      setCitasG(
        Citas.filter((citas) => citas?.doctor?.specialties === "General")
      );
      console.log(Citas);

      setCitasCa(
        Citas.filter((citas) => citas?.doctor?.specialties === "Cardiólogo")
      );
      setCitasCp(
        Citas.filter(
          (citas) => citas?.doctor?.specialties === "Cirujano plástico"
        )
      );
      setCitasD(
        Citas.filter((citas) => citas?.doctor?.specialties === "Dermatólogo")
      );
      setCitasGas(
        Citas.filter(
          (citas) => citas?.doctor?.specialties === "Gastroenterólogo"
        )
      );
      setCitasGeri(
        Citas.filter((citas) => citas?.doctor?.especialites === "Geriatra")
      );
      setCitasGine(
        Citas.filter((citas) => citas?.doctor?.especialites === "Ginecólogo")
      );
      setCitasNe(
        Citas.filter((citas) => citas?.doctor?.especialites === "Neurólogo")
      );
      setCitasNu(
        Citas.filter((citas) => citas?.doctor?.especialites === "Nutriólogo")
      );
      setCitasOf(
        Citas.filter((citas) => citas?.doctor?.especialites === "Oftalmólogo")
      );
      setCitasOn(
        Citas.filter((citas) => citas?.doctor?.especialites === "Oncólogo")
      );
      setCitasOto(
        Citas.filter(
          (citas) => citas?.doctor?.especialites === "Otorrinolaringólogo"
        )
      );
      setCitasPedi(
        Citas.filter((citas) => citas?.doctor?.especialites === "Pediatra")
      );
      setCitasTrau(
        Citas.filter((citas) => citas?.doctor?.especialites === "Traumatólogo")
      );
      setCitasUro(
        Citas.filter((citas) => citas?.doctor?.especialites === "Urólogo")
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);
  let data = {
    labels: [
      "General",
      "Cardiólogo",
      "Cirujano plástico",
      "Dermatólogo",
      "Gastroenterólogo",
      "Geriatra",
      "Ginecólogo",
      "Neurólogo",
      "Nutriólogo",
      "Oftalmólogo",
      "Oncólogo",
      "Otorrinolaringólogo",
      "Pediatra",
      "Traumatólogo",
      "Urólogo",
    ],
    datasets: [
      {
        data: [
          citasG.length,
          citasCa.length,
          citasCp.length,
          citasD.length,
          citasGas.length,
          citasGeri.length,
          citasGine.length,
          citasNe.length,
          citasNu.length,
          citasOf.length,
          citasOn.length,
          citasOto.length,
          citasPedi.length,
          citasTrau.length,
          citasUro.length,
        ],
        backgroundColor: [
          "#FFB6AF",
          "#FFE1AD",
          "#FAFDB0",
          "#B0F2C2",
          "#B0C2F2",
          "#FFFFE6",
          "#EAE2CC",
          "#FFE6ED",
          "#8064a2",
          "#E9B1F2",
          "#BBDFF1",
          "#80A5CB",
          "#5B97AF",
          "#429BD6",
          "#AD5E95",
        ],
        borderColor: [
          "#FFB6AF",
          "#FFE1AD",
          "#FAFDB0",
          "#B0F2C2",
          "#B0C2F2",
          "#FFFFE6",
          "#EAE2CC",
          "#FFE6ED",
          "#8064a2",
          "#E9B1F2",
          "#BBDFF1",
          "#80A5CB",
          "#5B97AF",
          "#429BD6",
          "#AD5E95",
        ],
        borderWidth: 1,
      },
    ],
  };
  let options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#fff",
          beginAtZero: true,
          callback: function (value) {
            if (value % 1 === 0) {
              return value;
            }
          },
        },
      },
      x: {
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  const ref = useRef(null);

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.jpeg";
    link.href = ref.current.toBase64Image("image/jpeg", 1);
    link.click();
  }, []);

  return (
    <div className="w-full p-4 rounded-lg border bg-gradient-to-r from-cyan-700 to-slate-700">
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="flex flex-col">
          <div className="text-sm font-light text-white">
            <span className="text-white">
              <i className=" p-1 fas fa-user-md text-white text-xl"></i>
            </span>
            <div className="text-ls font-bold text-white">
              Citas por especialidad
            </div>
          </div>
        </div>
        <div className="relative inline-block text-left z-10">
          <button
            className="inline-flex items-center justify-center w-8 h-8 text-white  rounded-full bg-slate-700  hover:bg-slate-500  focus:outline-none"
            id="headlessui-menu-button-:Rcmal6:"
            type="button"
            onClick={downloadImage}
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-solid fa-download"></i>
          </button>
        </div>
      </div>
      <Bar data={data} ref={ref} options={options} />
    </div>
  );
}
