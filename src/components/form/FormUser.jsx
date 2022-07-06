import React from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
import { registerApi, updateUserApi } from "../../api/admin/user";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { roleOptions } from "../../api/data/data";
import { toast } from "react-toastify";

export function FormUser({ user }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSutmit(formData);
    },
  });
  const { auth, logout } = useAuth();

  const handleSutmit = async (formData) => {
    let respuesta;
    try {
      if (user?.id) {
        respuesta = await updateUserApi(user?.id, formData, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actulizar al usaurio, intentelo mas tarde"
          );
        } else toast.success("Usuario actulizado correctamente");
        navigate("/admin/usuarios");
      } else {
        respuesta = await registerApi(formData, logout);
        if (!respuesta) {
          toast.warning("El nombre de usuario y el correo ya estan utilizados");
        } else {
          toast.success("Usuario creado correctamente");
          navigate("/admin/usuarios");
        }
      }
      await respuesta.json();
    } catch (err) {}
  };

  return (
    <>
      <div className=" mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {user?.username ? "Editar usuario" : "Agregar usuario"}
        </h1>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-3 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <p
                htmlFor="username"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre de usuario
              </p>
              <Form.Input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.errors.username}
                placeholder="Nombre de usuario"
              />
            </div>
            <div className="  w-full mb-6 group">
              <p
                htmlFor="email"
                className="block font-bold text-xl  text-gray-700"
              >
                Correo
              </p>
              <Form.Input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                placeholder="Apellidos"
              />
            </div>
            <div className=" w-full mb-6 group">
              <p
                htmlFor="password"
                className="block font-bold text-xl text-gray-700"
              >
                password
              </p>
              <Form.Input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                placeholder="Ingrese una contraseña"
              />
            </div>

            <div className=" w-full mb-6 group">
              <p
                htmlFor="password"
                className="block font-bold text-xl text-gray-700"
              >
                Estatus del usuario
              </p>
              <Form.Checkbox
                checked={formik.values.confirmed}
                error={formik.errors.confirmed}
                onChange={(_, data) =>
                  formik.setFieldValue("confirmed", data.checked)
                }
                toggle
                label="usuario no confirmado / usuario confirmado"
              />
              <Form.Checkbox
                checked={formik.values.blocked}
                error={formik.errors.blocked}
                onChange={(_, data) =>
                  formik.setFieldValue("blocked", data.checked)
                }
                toggle
                label="Usuario no bloquedo / Usuario bloqueado"
              />
            </div>
          </div>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value={user?.username ? "Editar Usuario" : "Agregar Usuario"}
          />
        </Form>
      </div>
    </>
  );
}

function initialValues(user) {
  return {
    username: user?.username ?? "",
    email: user?.email ?? "",
    password: "",
    confirmed: user?.confirmed ?? "",
    blocked: user?.blocked ?? false,
  };
}
function validationSchema() {
  return {
    username: Yup.string().required(true).min(5).max(15),
    email: Yup.string().email().required(true),
    password: Yup.string()
      .min(9, "La contraseña debe de tener minimo 9 caracteres")
      .required(true),
  };
}
