import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneCoursesApi } from "../../../api/admin/courses";
import { FormCourses } from "../../../components/form/FormCourses";
import { Spinner } from "../../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";

import Img404 from "../../../assets/img/story-404.svg";

export function EditCourseView() {
  const [courses, setCourses] = useState({});
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const course = await getOneCoursesApi(id, logout);
      setCourses(course);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return cargando ? (
    <Spinner />
  ) : Object.keys(courses).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <button
        className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/cursos`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col"></div>
        </div>
      </div>
      <div className="text-base font-bold text-gray-500 uppercase">
        <span className="text-gray-600">Vista general</span>
        <div className="text-xl font-bold">
          <span className="text-gray-600">Editar Curso</span>
        </div>
        <div className="justify-center flex p-5">
          <img
            className="ui centered image w-96 h-96"
            src={Img404}
            alt="No image"
          />
        </div>
        <p className="text-center">No se encontraron resultados</p>
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
                <span className="text-gray-600 ">Editar Curso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormCourses
        courses={courses}
        cargando={cargando}
        setCargando={setCargando}
      />
    </div>
  );
}
