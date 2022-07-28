import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import * as Yup from "yup";
import { Form, Button } from "semantic-ui-react";
import { updateEmailApi, getMeApi } from "../../api/admin/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function ChangeEmailForm() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();
  const { id } = user;
  const { auth, logout, setReloadUser } = useAuth();
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
      const response = await updateEmailApi(id, formData, logout);
      if (!response) {
        toast.warning("Error al actulizar el correo");
      } else {
        setReloadUser(true);
        toast.success("Correo actulizado correctamente");
      }
      setLoading(false);
    },
  });
  return (
    <>
      <div className="font-noto bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          Editar Correo
        </h1>
        <span className="text-gray-600 font-bold text-base text-center">
          Tu correo actual es: {user?.email}
        </span>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-2 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="email"
                className="block text-xl font-bold  text-gray-800 "
              >
                Correo
              </label>
              <Form.Input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                placeholder="ejemplo@gmail.com"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="repeatEmail"
                className="block text-xl font-bold  text-gray-800 "
              >
                Repetir correo
              </label>
              <Form.Input
                type="email"
                id="repeatEmail"
                name="repeatEmail"
                value={formik.values.repeatEmail}
                onChange={formik.handleChange}
                error={formik.errors.repeatEmail}
                placeholder="ejemplo@gmail.com"
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
    email: "",
    repeatEmail: "",
  };
}
function validationSchema() {
  return {
    email: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("repeatEmail")], true),
    repeatEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("email")], true),
  };
}
