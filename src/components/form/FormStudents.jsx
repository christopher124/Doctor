import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { createStudentsApi, updateStudentsApi } from "../../api/admin/students";
import { toast } from "react-toastify";

export function FormStudents({ student }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user.filter((user) => user?.role?.name === "Administrador"));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(student),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });

  const handleSubmit = async (formData) => {
    const formDataTemp = {
      ...formData,
      // users: auth.idUser,
    };
    let respuesta;
    try {
      setLoading(true);
      if (student?.id) {
        respuesta = await updateStudentsApi(student?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar el estuduante, Inténtelo más tarde."
          );
        } else toast.success("Datos actualizado correctamente.");
        navigate("/admin/estudiantes");
      } else {
        respuesta = await createStudentsApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con crear el estudiante, Inténtelo más tarde."
          );
        } else {
          toast.success("Estudiante creado correctamente.");
          navigate("/admin/estudiantes");
        }
      }
      await respuesta.json();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/estudiantes`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {student?.id ? "Editar Estudiante" : "Nuevo Estudiante"}
        </h1>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-3 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre (s)
              </label>
              <Form.Input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
                placeholder="Nombres..."
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="last"
                className="block text-xl font-bold  text-gray-800 "
              >
                Apellido (s)
              </label>
              <Form.Input
                type="text"
                id="last"
                name="last"
                value={formik.values.last}
                onChange={formik.handleChange}
                error={formik.errors.last}
                placeholder="Apellidos..."
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!formik.dirty}
            loading={loading}
            primary
          >
            {student?.id ? "Editar" : "Guardar cambios"}
          </Button>
        </Form>
      </div>
    </>
  );
}

function initialValues(students) {
  return {
    name: students?.name ?? "",
    last: students?.last ?? "",
  };
}
function validationSchema() {
  return {
    name: Yup.string()
      .required("El campo es requerido.")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al final."
      )
      .min(3, "El Nombre es muy corto.")
      .max(50, "El Nombre es muy largo."),
    last: Yup.string()
      .min(2, "El Apellidos es muy corto.")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al final."
      )
      .max(50, "El Apellidos es muy largo.")
      .required("El campo es requerido."),
  };
}
