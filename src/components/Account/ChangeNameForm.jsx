import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import * as Yup from "yup";
import { Form, Button } from "semantic-ui-react";
import { updateNameApi, getMeApi } from "../../api/admin/user";
import { toast } from "react-toastify";

export function ChangeNameForm() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();

  const { id } = user;
  console.log(id);
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
      const response = await updateNameApi(id, formData, logout);
      if (!response) {
        toast.warning("Error al actulizar el nombre del usuario");
      } else {
        setReloadUser(true);
        toast.success("Nombre de usuario actulizado correctamente");
      }
      setLoading(false);
    },
  });

  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          Editar Nombre de usuario
        </h1>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-1 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="username"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre de Usuario
              </label>
              <Form.Input
                type="text"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.errors.username}
                placeholder="Nombre de Usuario"
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
    username: "",
  };
}
function validationSchema() {
  return {
    username: Yup.string().required(true),
  };
}
