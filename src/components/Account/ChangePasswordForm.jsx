import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import * as Yup from "yup";
import { Form, Button } from "semantic-ui-react";
import { updatePasswordApi, getMeApi } from "../../api/admin/user";
import { toast } from "react-toastify";

export function ChangePasswordForm() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();

  const { id } = user;
  console.log(id);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getMeApi(logout);
      setUser(user);
    })();
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(id, formData, logout);
      if (!response) {
        toast.warning("Error al actulizar el nombre del usuario");
      } else {
        logout();
      }
      setLoading(false);
    },
  });

  return (
    <>
      <div className="font-noto bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          Editar Contraseña
        </h1>

        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-2 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="password"
                className="block text-xl font-bold  text-gray-800 "
              >
                Contraseña
              </label>
              <Form.Input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                placeholder="*********"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="repeatPassword"
                className="block text-xl font-bold  text-gray-800 "
              >
                Repetir contraseña
              </label>
              <Form.Input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.errors.repeatPassword}
                placeholder="*********"
              />
            </div>
          </div>
          <Button loading={loading} type="submit" color="blue" value="">
            Actulizar
          </Button>
        </Form>
      </div>
    </>
  );
}

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}
function validationSchema() {
  return {
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref("repeatPassword")], true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}
