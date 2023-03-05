import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Dropdown, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import {
  createProfesorsApi,
  updateProfesorsApi,
} from "../../api/admin/profesors";
import {
  options,
  contriesOptions,
  specialtiesOptions,
  statusOptions,
  DateOptions,
} from "../../api/data/data.js";
import { Spinner } from "../spinner/Spinner";
import * as Yup from "yup";
import { toast } from "react-toastify";

export function FormProfessor({ professor, cargando }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues(professor),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user.filter((user) => user?.role?.name === "Administrador"));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleSubmit = async (formData) => {
    const formDataTemp = {
      ...formData,
    };
    let respuesta;
    try {
      setLoading(true);
      if (professor?.id) {
        respuesta = await updateProfesorsApi(
          professor?.id,
          formDataTemp,
          logout
        );
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar el profesor, inténtelo mas tarde"
          );
        } else toast.success("Datos actualizados correctamente");
        navigate("/admin/profesores");
      } else {
        respuesta = await createProfesorsApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning("Problemas con crear el profesor, inténtelo mas tarde");
        } else {
          toast.success("Profesor creado correctamente");
          navigate("/admin/profesores");
        }
      }
      await respuesta.json();
    } catch (err) {
      setLoading(false);
    }
  };

  return cargando ? (
    <Spinner />
  ) : (
    <>
      <button
        className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/profesores`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {professor?.id ? "Editar Profesor" : " Nuevo Profesor"}
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
                placeholder="Nombres"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!formik.dirty}
            loading={loading}
            primary
          >
            {professor?.id ? "Editar" : "Guardar cambios"}
          </Button>
        </Form>
      </div>
    </>
  );
}

function initialValues(professor) {
  return {
    name: professor?.name ?? "",
  };
}
function validationSchema() {
  return {
    name: Yup.string()
      .min(3, "El Nombre es muy corto.")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al final."
      )
      .max(50, "El Nombre es muy largo.")
      .required("El campo es requerido."),
  };
}
