import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import { getOneStudentsApi } from "../../../api/admin/students";
import Avatar from "avvvatars-react";
import Img404 from "../../../assets/img/story-404.svg";
import { getMeApi } from "../../../api/admin/user";
import Swal from "sweetalert2";

export function StudenView() {
  const [users, setUsers] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [quotes, setQuotes] = useState([]);
  const [prescription, setprescription] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const student = await getOneStudentsApi(id, logout);
      setStudent(student);
      const me = await getMeApi(logout);
      setUsers(me);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);

  function getEdad(birthday) {
    let hoy = new Date();
    let fechaNacimiento = new Date(birthday);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }
  const {
    user,
    name,
    last,
    address,
    birthday,
    gender,
    phone,
    number_int_address,
    suburb,
    town,
    zip,
    state,
    created_at,
    updated_at,
  } = student;
  return (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        {cargando ? (
          <Spinner />
        ) : Object.keys(student).length === 0 ? (
          <div className="text-xs font-bold text-gray-500 uppercase">
            <div className="justify-center flex p-5">
              <img
                className="ui centered image w-96 h-96"
                src={Img404}
                alt="Logo"
              />
            </div>
            <p className="text-center">No se encontraron resultados</p>
          </div>
        ) : users?.role?.name === "Administrador" ? (
          <div className="w-full min-h-screen p-4">
            <div className="w-full mb-6 pt-3">
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex flex-col">
                  <div className="text-base font-bold text-gray-500 uppercase">
                    <span className="text-gray-600">Vista General</span>
                    <div className="text-xl font-bold">
                      <span className="text-gray-600">Estudiantes</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
                onClick={() => navigate(`/admin/estudiantes`)}
              >
                <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
                Regresar
              </button>
            </div>
            <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
              {/* <div className="w-full lg:w-1/3 lg:h-1/3">
                <div className="font-noto w-full p-4 rounded-lg bg-cyan-800 border-white">
                  <div className="w-full flex flex-row items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <div className="text-lg font-light text-white">
                        Paciente
                      </div>
                      <div className="text-base text-white font-bold">
                        <span>Información de usuario</span>
                      </div>
                    </div>
                    <div className="relative inline-block text-left z-10"></div>
                  </div>
                  <div className="justify-center flex p-9">
                    <Avatar
                      value={user?.username ? user?.username : "NU"}
                      size={99}
                    />
                  </div>
                  <div className=" text-center flex flex-col w-full">
                    <p className="py-1 font-bold text-white ">
                      Nombre de Usuario:{" "}
                      <span className="">
                        {user?.username ? user?.username : "N/A"}
                      </span>
                    </p>
                    <p className="py-3 font-bold text-white ">
                      Correo:{" "}
                      <span className="">
                        {user?.email ? user?.email : "N/A"}
                      </span>
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="w-full lg:w-2/3">
                <div className="font-noto w-full p-[22px]  rounded-lg bg-cyan-800 border-white">
                  <div className="flex flex-row items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <div className="text-lg font-bold text-white">
                        Estudiantes
                      </div>
                      <div className="text-base font-bold text-white">
                        <span>Información personal</span>
                      </div>
                    </div>
                    <div className="relative inline-block text-left z-10"></div>
                  </div>
                  <div className=" flex flex-col w-full text-left">
                    <p className="py-1 font-bold text-white ">
                      Nombre completo:{" "}
                      <span className="">
                        {name} {last}
                      </span>
                    </p>
                    <p className="py-1 font-bold text-white ">
                      Género: <span className=""> {gender}</span>
                    </p>
                    <p className="py-1 font-bold text-white ">
                      Teléfono: <span className=""> {phone}</span>
                    </p>
                    <p className="py-1 font-bold text-white ">
                      Fecha de nacimiento:{" "}
                      <span className="">
                        {format(new Date(created_at), "dd/MM/yyyy")}{" "}
                      </span>
                    </p>
                    <p className="py-1 font-bold text-white ">
                      Edad: <span className=""> {getEdad(birthday)} años</span>
                    </p>
                    <p className="py-[0.15rem] font-bold text-white font-noto">
                      Domicilio:{" "}
                      <span className="text-bold">
                        {" "}
                        {address ? address : "No hay datos"}, INT:{" "}
                        {number_int_address ? number_int_address : "N/A"},{" "}
                        {suburb ? suburb : "No hay datos"},{" "}
                        {town ? town : "No hay datos"},{" "}
                        {state ? state : "No hay datos"},{" "}
                        {zip ? zip : "No hay datos"}
                      </span>
                    </p>
                    <p className="py-1 font-bold text-white ">
                      Fecha de creación:{" "}
                      <span className="">
                        {" "}
                        {format(new Date(created_at), "dd/MM/yyyy hh:mm:ss a")}
                      </span>
                    </p>
                    <p className="py-1 font-bold text-white ">
                      Última actualización:{" "}
                      <span className="">
                        {" "}
                        {format(
                          new Date(updated_at),
                          "dd/MM/yyyy hh:mm:ss a"
                        )}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}