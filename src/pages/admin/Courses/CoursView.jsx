import { useEffect, useState } from "react";
import { Spinner } from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneCoursesApi } from "../../../api/admin/courses";
import Avatar from "avvvatars-react";
import Img404 from "../../../assets/img/story-404.svg";
import { Description } from "@mui/icons-material";

export function CoursView() {
  const { id } = useParams();
  const [course, setcourse] = useState({});
  const { name, created_at, updated_at } = course;
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const course = await getOneCoursesApi(id, logout);
      setcourse(course);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, auth]);

  return cargando ? (
    <Spinner />
  ) : Object.keys(course).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Cursos</span>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Ver Cursos</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
          onClick={() => navigate(`/admin/cursos`)}
        >
          <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
          Regresar
        </button>
      </div>
      <div className="flex flex-col w-full mb-2 lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 lg:mb-4">
        <div className="w-full lg:w-1/3 lg:h-1/3">
          <div className="font-noto w-full p-4 rounded-lg bg-cyan-800 border-white">
            <div className="w-full flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-lg font-light text-white">Cursos</div>
                <div className="text-base text-white font-bold">
                  <span>Información de usuario</span>
                </div>
              </div>
            </div>
            <div
              className=" justify-center flex p-7
            "
            >
              {/* <Avatar
                value={user?.username ? user?.username : "NU"}
                size={99}
              /> */}
            </div>
            <div className="p-5 text-center flex flex-col w-full">
              {/* <p className="py-1 text-white ">
                Nombre de Usuario:{" "}
                <span className="">
                  {user?.username ? user?.username : "No hay datos"}
                </span>
              </p>
              <p className="py-1 text-white ">
                Correo:{" "}
                <span className="">
                  {user?.email ? user?.email : "No hay datos"}
                </span>
              </p> */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg:h-1/3">
          <div className="w-full p-3 rounded-lg bg-cyan-800">
            <div className="flex flex-row items-center justify-between mb-6">
              <div className="flex flex-col">
                <div className="text-lg font-bold text-white">Cursos</div>
                <div className="text-base font-bold text-white">
                  <span>Información </span>
                </div>
              </div>
              <div className="relative inline-block text-left z-10"></div>
            </div>
            <div className="p-0 flex flex-col w-full">
              <p className="py-[0.15rem] text-white font-noto">
                Nombre del curso: <span className="text-bold">{name}</span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Descripción: <span className="text-bold">{}</span>
              </p>
              
              <p className="py-[0.15rem] text-white font-noto">
                Fecha de creación:{" "}
                <span className="text-bold">
                  {" "}
                  {format(
                    new Date(created_at ? created_at : "No hay datos"),
                    "dd/MM/yyyy hh:mm:ss a"
                  )}
                </span>
              </p>
              <p className="py-[0.15rem] text-white font-noto">
                Última actualización:{" "}
                <span className="text-bold">
                  {" "}
                  {format(
                    new Date(updated_at ? updated_at : "No hay datos"),
                    "dd/MM/yyyy hh:mm:ss a"
                  )}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
