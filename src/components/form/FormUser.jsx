import { useState } from "react";
import { useFormik } from "formik";
import { Form, Checkbox } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { registerApi, updateUserApi } from "../../api/admin/user";
import useAuth from "../../hooks/useAuth";
import * as Yup from "yup";
import { toast } from "react-toastify";
export function FormUser({ user, cargando }) {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      createUser(formData);
    },
  });

  const createUser = async (formData) => {
    const formDataTemp = {
      ...formData,
    };
    if (user.id) {
      const EditUser = await updateUserApi(user.id, formDataTemp, logout);

      if (!EditUser) {
        toast.warning("El correo o el usuario ya existen");
      } else {
        toast.success("Usuario creado correctamente");
        navigate("/admin/usuarios");
      }
    } else {
      const newUser = await registerApi(formDataTemp);

      if (!newUser) {
        toast.warning("El correo o el usuario ya existen");
      } else {
        toast.success("Usuario creado correctamente");
        navigate("/admin/usuarios");
      }
    }
  };

  return (
    <div className=" mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {user?.username ? "Editar usuario" : "Agregar Cliente"}
      </h1>
      <Form onSubmit={formik.handleSubmit} className="mt-10">
        <div className=" grid xl:grid-cols-3 xl:gap-6">
          <div className="text-lg w-full mb-6 group">
            <text
              htmlFor="username"
              className="block text-xl font-bold  text-gray-800 "
            >
              Nombre de usuario
            </text>
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
            <text
              htmlFor="email"
              className="block font-bold text-xl  text-gray-700"
            >
              Correo
            </text>
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
              Estatus
            </p>
            <Form.Checkbox
              toggle
              label="Aceptar condiciones"
              checked={formik.values.confirmed}
              error={formik.errors.confirmed}
              onChange={(_, data) =>
                formik.setFieldValue("confirmed", data.checked)
              }
            />
          </div>
          <div className=" w-full mb-6 group">
            <p
              htmlFor="password"
              className="block font-bold text-xl text-gray-700"
            >
              Estatus
            </p>
            <Form.Checkbox
              toggle
              label="Aceptar condiciones"
              checked={formik.values.blocked}
              error={formik.errors.blocked}
              onChange={(_, data) =>
                formik.setFieldValue("blocked", data.checked)
              }
            />
          </div>
        </div>
      </Form>
    </div>
  );
}

function initialValues(user) {
  return {
    username: user?.username ?? "",
    email: user?.email ?? "",
    password: user?.password ?? "",
    confirmed: user?.confirmed ?? "",
    blocked: user?.confirmed ?? "",
  };
}
function validationSchema() {
  return {
    username: Yup.string().required().min(5).max(15),
    email: Yup.string().email().required(),
    // password: Yup.string().password().required(),
  };
}
