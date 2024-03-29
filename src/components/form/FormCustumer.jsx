import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { contriesOptions, options } from "../../api/data/data.js";
import { createCustomerApi, updateCustomerApi } from "../../api/admin/customer";
import { toast } from "react-toastify";

export function FormCustumer({ customer }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user.filter((user) => user?.role?.name === "Paciente"));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(customer),
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
      if (customer?.id) {
        respuesta = await updateCustomerApi(customer?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar al paciente, Inténtelo más tarde."
          );
        } else toast.success("Datos actualizado correctamente.");
        navigate("/admin/pacientes");
      } else {
        respuesta = await createCustomerApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con crear el paciente, Inténtelo más tarde."
          );
        } else {
          toast.success("Paciente creado correctamente.");
          navigate("/admin/pacientes");
        }
      }
      await respuesta.json();
    } catch (err) {
      setLoading(false);
    }
  };
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  let minDate = "1902-01-01";

  return (
    <>
      <button
        className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/pacientes`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {customer?.id ? "Editar Paciente" : "Nuevo Paciente"}
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
            <div className=" w-full mb-6 group">
              <label
                htmlFor="state"
                className="block font-bold text-xl text-gray-700"
              >
                Género
              </label>
              <Form.Dropdown
                placeholder="Seleciona un Género"
                options={options}
                value={formik.values.gender}
                error={formik.errors.gender}
                onChange={(_, data) =>
                  formik.setFieldValue("gender", data.value)
                }
                fluid
                search
                selection
              />
            </div>
          </div>
          <div className="grid xl:grid-cols-6 xl:gap-6">
            <div className="  w-full mb-6 group">
              <label
                htmlFor="address"
                className="block font-bold text-xl text-gray-700"
              >
                Calle y número
              </label>
              <Form.Input
                type="text"
                name="address"
                id="address"
                value={formik.values.address}
                error={formik.errors.address}
                onChange={formik.handleChange}
                placeholder="Av. Patria #32"
              />
            </div>
            <div className="w-full mb-6 group">
              <label
                htmlFor="suburb"
                className="block font-bold text-xl text-gray-700"
              >
                Colonia
              </label>
              <Form.Input
                type="text"
                name="suburb"
                id="suburb"
                value={formik.values.suburb}
                error={formik.errors.suburb}
                onChange={formik.handleChange}
                placeholder="La Floresta II Seccion"
              />
            </div>
            <div className="w-full mb-6 group">
              <label
                htmlFor="town"
                className="block font-bold text-xl text-gray-700"
              >
                Municipio
              </label>
              <Form.Input
                type="text"
                name="town"
                id="town"
                value={formik.values.town}
                error={formik.errors.town}
                onChange={formik.handleChange}
                placeholder="Tonalá"
              />
            </div>
            <div className="  w-full mb-6 group">
              <label
                htmlFor="number_int_address"
                className="block font-bold text-xl text-gray-700"
              >
                Número interior
              </label>
              <Form.Input
                type="text"
                name="number_int_address"
                id="number_int_address"
                value={formik.values.number_int_address}
                error={formik.errors.number_int_address}
                onChange={formik.handleChange}
                placeholder="Número interior (Opcional)"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="zip"
                className="block text-xl font-bold  text-gray-800 "
              >
                Código postal
              </label>
              <Form.Input
                type="text"
                id="zip"
                name="zip"
                value={formik.values.zip}
                onChange={formik.handleChange}
                error={formik.errors.zip}
                placeholder="45085"
              />
            </div>
            <div className=" w-full mb-6 group">
              <label
                htmlFor="state"
                className="block font-bold text-xl text-gray-700"
              >
                Estado
              </label>
              <Form.Dropdown
                id="state"
                placeholder="Seleciona un Estado"
                options={contriesOptions}
                value={formik.values.state}
                error={formik.errors.state}
                onChange={(_, data) =>
                  formik.setFieldValue("state", data.value)
                }
                fluid
                search
                selection
              />
            </div>
          </div>
          <div className=" grid xl:grid-cols-3 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="phone"
                className="block text-xl font-bold  text-gray-800 "
              >
                Número de télefono
              </label>
              <Form.Input
                type="text"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.errors.phone}
                placeholder="3398568457 "
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="birthday"
                className="block text-xl font-bold  text-gray-800 "
              >
                Fecha de nacimiento
              </label>
              <Form.Input
                type="date"
                id="birthday"
                min={minDate}
                max={today}
                name="birthday"
                value={formik.values.birthday}
                onChange={formik.handleChange}
                error={formik.errors.birthday}
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Usuario
              </label>
              <select
                value={formik.values.user}
                name="user"
                id="user"
                onChange={(data) =>
                  formik.setFieldValue("user", data.target.value, {
                    shouldValidate: true,
                  })
                }
              >
                {user?.id ? (
                  <option value="">
                  Confirmar usuario
                  </option>
                ) : (
                  <option value="">
                    Selecione un usuario para el paciente
                  </option>
                )}

                {user?.map((user) => (
                  <option key={user?.id} value={user?.id}>
                    {user?.email}
                  </option>
                ))}
              </select>
              {formik.errors.user && (
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
                  El campo es requerido.
                </p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={!formik.dirty}
            loading={loading}
            primary
          >
            {customer?.id ? "Editar" : "Guardar cambios"}
          </Button>
        </Form>
      </div>
    </>
  );
}

function initialValues(customer) {
  return {
    name: customer?.name ?? "",
    last: customer?.last ?? "",
    user: null,
    address: customer?.address ?? "",
    gender: customer?.gender ?? "",
    phone: customer?.phone ?? "",
    suburb: customer?.suburb ?? "",
    town: customer?.town ?? "",
    number_int_address: customer?.number_int_address ?? "",
    birthday: customer?.birthday ?? "",
    state: customer?.state ?? "",
    zip: customer?.zip ?? "",
  };
}
function validationSchema() {
  return {
    user: Yup.string().required(true),
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
    address: Yup.string().required("El campo es requerido."),
    gender: Yup.string().required("El campo es requerido."),
    phone: Yup.string()
      .required("El campo es requerido.")
      .matches(/^[0-9]+$/, "Deben ser solo dígitos")
      .min(10, "Debe tener exactamente 10 dígitos")
      .max(10, "Debe tener exactamente 10 dígitos"),
    zip: Yup.string()
      .matches(/^[0-9]+$/, "Deben ser solo dígitos")
      .required("El campo es requerido."),
    suburb: Yup.string()
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al final."
      )
      .required("El campo es requerido."),
    town: Yup.string()
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al final."
      )
      .required("El campo es requerido."),
    state: Yup.string().required("El campo es requerido."),
    birthday: Yup.string().required("El campo es requerido."),
  };
}
