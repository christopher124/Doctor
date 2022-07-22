import { useState, useEffect } from "react";
import { getCountUserApi, getUserApi } from "../../api/admin/user";
import { getDoctorApi, getCountDoctorApi } from "../../api/admin/doctor";

import useAuth from "../../hooks/useAuth";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function BarChartUser() {
  const [chartCount, setChartCount] = useState([]);
  const [usersA, setUsersA] = useState([]);
  const [usersP, setUsersP] = useState([]);
  const [usersD, setUsersD] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [Doctorcount, setDoctorCount] = useState([]);

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const countUser = await getCountUserApi(logout);
      setChartCount(countUser);
      const users = await getUserApi(logout);
      setUsersA(users.filter((user) => user?.role?.name === "Admin"));
      setUsersP(users.filter((user) => user?.role?.name === "Paciente"));
      setUsersD(users.filter((user) => user?.role?.name === "Doctor"));
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor.filter((word) => word.length > 6));
      const countDoctor = await getCountDoctorApi(logout);
      setDoctorCount(countDoctor);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, logout]);
  let data = {
    labels: [" administradores", " Doctores", " Pacientes"],
    datasets: [
      {
        label: "Roles de usuarios",
        data: [usersA.length, usersD.length, usersP.length],
        backgroundColor: [
          "#102034",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 50,
        color: ["#102034"],
      },
    },
  };
  return <Doughnut data={data} options={options} />;
}
