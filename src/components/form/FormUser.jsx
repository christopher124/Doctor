import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
import { registerApi, updateUserApi } from "../../api/admin/user";
import { getRolesApi } from "../../api/admin/roles";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export function FormUser({ user }) {
  const navigate = useNavigate();
  const [role, setRoles] = useState([]);
  const { auth, logout, setReloadUser } = useAuth();
  const { roles } = role;
  console.log(roles);
  useEffect(() => {
    (async () => {
      const role = await getRolesApi(logout);
      setRoles(role);
    })();
  }, [auth]);
  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });
  const handleSubmit = async (formData) => {
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    let respuesta;
    try {
      if (user?.id) {
        respuesta = await updateUserApi(user?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar el doctor, inténtelo mas tarde"
          );
        } else setReloadUser(true);
        toast.success("Doctor actulizado correctamente");
        navigate("/admin/usuarios");
      } else {
        respuesta = await registerApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning("Problemas con crear el doctor, inténtelo mas tarde");
        } else {
          toast.success("Doctor creado correctamente");
          navigate("/admin/usuarios");
        }
      }
      await respuesta.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="text-white bg-blue-600 font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/usuarios`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>

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
                Contraseña
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
            <div className="text-lg w-full mb-6 group">
              <p
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Rol de Usuario
              </p>
              <select
                value={formik.values.role}
                name="role"
                id="role"
                onChange={(data) =>
                  formik.setFieldValue("role", data.target.value)
                }
              >
                {user?.id ? (
                  <option value="">
                    Selecione un nuevo Rol para el usuario
                  </option>
                ) : (
                  <option value="">Selecione un Rol para el usuario</option>
                )}

                {roles?.map((role) => (
                  <option key={role?.id} value={role?.id}>
                    {role?.name}
                  </option>
                ))}
              </select>
              {formik.errors.role && (
                <p
                  style={{
                    whitespace: "normal",
                    background: "#fff",
                    border: "1px solid #e0b4b4",
                    color: "#9f3a38",
                  }}
                  className="ui pointing above prompt label "
                  id="birthday-error-message"
                  role="alert"
                  aria-atomic="true"
                >
                  El Rol del usuario es obligatorio
                </p>
              )}
            </div>
          </div>
          <input
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    role: null,
    confirmed: user?.confirmed ?? "",
    blocked: user?.blocked ?? false,
  };
}
function validationSchema() {
  return {
    username: Yup.string()
      .required("El Nombre del usuario es obligatorio")
      .min(5)
      .max(15),
    email: Yup.string()
      .email("Formato de correo inválido")
      .required("El mail correo es obligatorio"),

    password: Yup.string()
      .min(9, "La contraseña debe de tener minimo 9 caracteres")
      .required("La contraseña es obligatorio"),
    role: Yup.string().required(true),
  };
}
