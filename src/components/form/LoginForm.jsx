import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import { loginApi } from "../../api/admin/user";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Clinica from "../../assets/img/SB2.jpg";

export function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await loginApi(formData);
        if (response?.jwt && response?.user?.role?.name === "Administrador") {
          login(response.jwt);
          toast.success("Bienvenido," + " " + response.user.username);
          navigate("/admin/dashboard");
        } else if (
          response?.jwt &&
          response?.user?.role?.name === "Recepción"
        ) {
          login(response.jwt);
          toast.success("Bienvenido," + " " + response?.user?.username);
          navigate("/admin/dashboard");
        } else if (response?.jwt && response?.user?.role?.name === "Doctor") {
          login(response.jwt);
          toast.success("Bienvenido," + " " + response?.user?.username);
          navigate("/admin/dashboard");
        } else {
          setLoading(false);
          toast.error(
            "Usuario y/o contraseña incorrecto o su cuenta ha sido bloqueada."
          );
        }
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <>
      <div className="flex w-full h-screen bg-gradient-to-r from-cyan-800 to-slate-900 ">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="bg-white px-20 py-32 rounded-3xl border-2 border-gray-100">
            <h1 className="text-5xl font-semibold">¡Bienvenido(a)!</h1>
            <p className="font-medium text-xl text-gray-500 mt-4 text-center">
              A continuación, ingrese sus datos.
            </p>
            <div className=" mt-8">
              <Form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="email" className="text-xl font-semibold">
                    Correo / Usuario
                  </label>
                  <div className="relative">
                    <Form.Input
                      type="text"
                      name="identifier"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.identifier && formik.errors.identifier
                      }
                      placeholder="ejemplo@gmail.com"
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <i className="fas fa-solid fa-at"></i>
                    </span>
                  </div>
                  <div>
                    <label htmlFor="password" className="text-xl font-semibold">
                      Contraseña
                    </label>
                    <div className="relative">
                      <Form.Input
                        type="Password"
                        name="password"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password && formik.errors.password
                        }
                        placeholder="********"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex flex-col gap-y-4">
                  <Button
                    disabled={!formik.dirty}
                    type="submit"
                    primary
                    loading={loading}
                  >
                    Iniciar sesión
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          {/*section*/}
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr" />
          <img
            src={Clinica}
            style={{ width: "10000%", height: "100%" }}
            alt="Logo"
          />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10" />
        </div>
      </div>{" "}
    </>
  );
}
function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}
function validationSchema() {
  return {
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  };
}
