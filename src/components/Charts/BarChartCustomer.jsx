import { useState, useEffect, useRef, useCallback } from "react";
import { getCustomerApi } from "../../api/admin/customer";
import useAuth from "../../hooks/useAuth";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export function BarChartCustomer() {
  const [customerZ, setCustomerZ] = useState([]);
  const [customerG, setCustomerG] = useState([]);
  const [customerTLA, setCustomerTLA] = useState([]);
  const [customerT, setCustomerT] = useState([]);
  const [customerTlajo, setCustomerTlajo] = useState([]);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const Customer = await getCustomerApi(logout);
      setCustomerZ(Customer.filter((doctor) => doctor?.town === "Zapopan"));

      setCustomerG(Customer.filter((doctor) => doctor?.town === "Guadalajara"));
      setCustomerTLA(
        Customer.filter((doctor) => doctor?.town === "San Pedro Tlaquepaque")
      );
      setCustomerT(Customer.filter((doctor) => doctor?.town === "Tonalá"));
      setCustomerTlajo(
        Customer.filter((doctor) => doctor?.town === "Tlajomulco de Zúñiga")
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);
  let data = {
    labels: [
      "Zapopan",
      "Guadalajara",
      "San Pedro Tlaquepaque",
      "Tonalá",
      "Tlajomulco de Zúñiga",
    ],
    datasets: [
      {
        data: [
          customerZ.length,
          customerG.length,
          customerTLA.length,
          customerT.length,
          customerTlajo.length,
        ],
        backgroundColor: [
          "#FFB6AF",
          "#FFE1AD",
          "#FAFDB0",
          "#B0F2C2",
          "#FFE6ED",
        ],
        borderColor: ["#FFB6AF", "#FFE1AD", "#FAFDB0", "#B0F2C2", "#FFE6ED"],
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
              <i className=" p-1 fas fa-map-marker-alt text-white text-2xl"></i>
            </span>
            <div className="text-base font-bold text-white">
              CLIENTES POR MUNICIPIO
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
            <i className="fas fa-solid fa-download text-2xl"></i>
          </button>
        </div>
      </div>
      <Bar data={data} ref={ref} options={options} />
    </div>
  );
}
