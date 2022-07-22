import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { Form } from "semantic-ui-react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { contriesOptions, options } from "../../api/data/data.js";
import { createCustomerApi, updateCustomerApi } from "../../api/admin/customer";
import { toast } from "react-toastify";
import { DoctorView } from "../Admin/doctor/DoctorView";

export function FormCustumer({ customer }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user);
      console.log(user);
    })();
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
      user: auth.idUser,
    };
    let respuesta;
    try {
      setLoading(true);
      if (customer?.id) {
        respuesta = await updateCustomerApi(customer?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actulizar al usaurio, intentelo mas tarde"
          );
        } else toast.success("Usuario actulizado correctamente");
        navigate("/admin/clientes");
      } else {
        respuesta = await createCustomerApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning("El nombre de usuario y el correo ya estan utilizados");
        } else {
          toast.success("Usuario creado correctamente");
          navigate("/admin/clientes");
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
  let minDate = "1922-01-01";

  return (
    <>
      <button
        className="text-white bg-blue-700 font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/clientes`)}
      >
        <i class="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {customer?.id ? "Editar Paciente" : "Nuevo Paciente"}
        </h1>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-3 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <p
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombres
              </p>
              <Form.Input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
                placeholder="Nombres... "
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <p
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Apellidos
              </p>
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
              <p
                htmlFor="state"
                className="block font-bold text-xl text-gray-700"
              >
                Género
              </p>
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
              <p
                htmlFor="address"
                className="block font-bold text-xl text-gray-700"
              >
                Calle y Número
              </p>
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
              <p
                htmlFor="suburb"
                className="block font-bold text-xl text-gray-700"
              >
                Colonia
              </p>
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
            <div className="  w-full mb-6 group">
              <p
                htmlFor="town"
                className="block font-bold text-xl text-gray-700"
              >
                Municipio
              </p>
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
              <p
                htmlFor="number_int_address"
                className="block font-bold text-xl text-gray-700"
              >
                Número Interior
              </p>
              <Form.Input
                type="text"
                name="number_int_address"
                id="number_int_address"
                placeholder="Numero Interior (Opcional)"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <p
                htmlFor="zip"
                className="block text-xl font-bold  text-gray-800 "
              >
                Código Postal
              </p>
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
              <p
                htmlFor="state"
                className="block font-bold text-xl text-gray-700"
              >
                Estado
              </p>
              <Form.Dropdown
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
              <p
                htmlFor="phone"
                className="block text-xl font-bold  text-gray-800 "
              >
                Número de télefono
              </p>
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
              <p
                htmlFor="birthday"
                className="block text-xl font-bold  text-gray-800 "
              >
                Fecha de Cumpleaños
              </p>
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
              <p
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Usuario
              </p>
              <select
                value={formik.values.user}
                name="user"
                id="user"
                onChange={(data) =>
                  formik.setFieldValue("user", data.target.value, {
                    shouldValidate: true,
                  })
                }
                onError={formik.errors.user}
                onSelect
              >
                {customer?.id ? (
                  <option value="">
                    Selecione un nuevo usuario para el Paciente
                  </option>
                ) : (
                  <option value="">
                    Selecione un usuario para el Paciente
                  </option>
                )}
                {user?.map((user) => (
                  <option key={user?.id} value={user?.id}>
                    {user?.email}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input
            type="submit"
            loading={loading}
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value={customer?.id ? "Editar Paciente" : "Agregar Paciente"}
          />
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
    name: Yup.string().required(true),
    last: Yup.string().required(true),
    address: Yup.string().required(true),
    gender: Yup.string().required(true),
    phone: Yup.string().required(true),
    zip: Yup.string().required(true),
    state: Yup.string().required(true),
    birthday: Yup.string().required(true),
  };
}
