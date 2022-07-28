import { useState, useEffect } from "react";
import { getCountUserApi, getUserApi } from "../../api/admin/user";
import { getDoctorApi, getCountDoctorApi } from "../../api/admin/doctor";

import useAuth from "../../hooks/useAuth";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChartUser() {
  const [usersA, setUsersA] = useState([]);
  const [usersP, setUsersP] = useState([]);
  const [usersD, setUsersD] = useState([]);

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const users = await getUserApi(logout);
      setUsersA(users.filter((user) => user?.role?.name === "Admin"));
      setUsersP(users.filter((user) => user?.role?.name === "Paciente"));
      setUsersD(users.filter((user) => user?.role?.name === "Doctor"));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);
  let data = {
    labels: [" administradores", " Doctores", " Pacientes"],
    datasets: [
      {
        label: "Roles de usuarios",
        data: [usersA.length, usersD.length, usersP.length],
        backgroundColor: ["#EC7652", "#00A652", "#f2f2f2"],
        borderColor: ["#EC7652", "#00A652", "#f2f2f2"],
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
  return <Doughnut data={data} options={options} />;
}
