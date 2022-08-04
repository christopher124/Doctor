import { useState, useEffect, useCallback, useRef } from "react";
import { getUserApi } from "../../api/admin/user";

import useAuth from "../../hooks/useAuth";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChartUser() {
  const [usersA, setUsersA] = useState([]);
  const [usersP, setUsersP] = useState([]);

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const users = await getUserApi(logout);
      setUsersA(users.filter((user) => user?.confirmed === true));
      setUsersP(users.filter((user) => user?.blocked === true));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);
  let data = {
    labels: ["Activos", "Bloqueados"],
    datasets: [
      {
        data: [usersA.length, usersP.length],
        backgroundColor: ["#6BB19A", "#E77C71"],
        borderColor: ["#6BB19A", "#E77C71"],
        borderWidth: 1,
      },
    ],
  };
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: true,
        labels: {
          color: "#ffff",
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
      <div className="flex flex-row items-center justify-between mb-10">
        <div className="flex flex-col">
          <div className="text-sm font-light text-white">
            <span className="text-white">
              <i className="p-1 fas fa-user text-white text-2xl"></i>
            </span>
            <div className="text-base font-bold text-white">
              ESTATUS DEL USUARIO
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
      <Doughnut data={data} ref={ref} options={options} />
    </div>
  );
}
