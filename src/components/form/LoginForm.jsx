import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginApi, resetPasswordApi } from "../../api/admin/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Clinica from "../../assets/img/LogoClinica.jpeg";

export function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);
      setLoading(false);
      console.log(response);
      if (response.jwt && response.user.role.name === "Admin") {
        login(response.jwt);
        toast.success("Bienvenido" + " " + response.user.username);
        navigate("/admin/dashboard");
      } else {
        toast.error("Usuario o contraseña incorrectos");
      }
      setLoading(false);
    },
  });

  const resetPassword = () => {
    formik.setErrors({});
    const validateEmail = Yup.string().email().required();

    if (!validateEmail.isValidSync(formik.values.identifier)) {
      formik.setErrors({ identifier: true });
    } else {
      resetPasswordApi(formik.values.identifier);
    }
  };

  return (
    <>
      <div className="flex w-full h-screen bg-[#2ea4e1]">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
            <h1 className="text-5xl font-semibold">Bienvenido</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              ¡Bienvenido! por favor ingresa tus datos.
            </p>
            <div className=" mt-8">
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="max-w-md mx-auto mt-8 mb-0 space-y-4"
              >
                <div>
                  <label htmlFor="email" className="text-lg font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="identifier"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.identifier && formik.errors.identifier
                      }
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                      placeholder="Example@gmail.com"
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="text-lg font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      error={formik.touched.password && formik.errors.password}
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* <div className=" mt-7 items-center ml-12">
                  <button
                    type="button"
                    onClick={resetPassword}
                    className="font-medium text-base text-violet-500"
                  >
                    ¿Has olvidado tu contraseña?
                  </button>
                </div> */}
                <div className="mt-12 flex flex-col gap-y-4">
                  <button
                    loading={loading}
                    type="submit"
                    className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
                  >
                    Iniciar sesion
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*section*/}
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr" />
          <img src={Clinica} alt=""></img>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10" />
        </div>
      </div>{" "}
      {/*section*/}
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
    identifier: Yup.string()
      .email("Correo electronico invalido")
      .required("Correo electronico es requerido"),
    password: Yup.string()
      .required("Contraseña es requerida")
      .min(8, "Minimo 8 caracteres"),
  };
}
