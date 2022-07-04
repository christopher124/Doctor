import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { contriesOptions, options } from "../../api/data/data.js";
import { createCustomerApi, updateCustomerApi } from "../../api/admin/customer";
import { toast } from "react-toastify";

export function FormCustumer({ customer, cargando }) {
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
    let respuesta;
    try {
      setLoading(true);
      if (customer?.id) {
        respuesta = await updateCustomerApi(customer?.id, formData, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actulizar al usaurio, intentelo mas tarde"
          );
        } else toast.success("Usuario actulizado correctamente");
        navigate("/admin/clientes");
      } else {
        respuesta = await createCustomerApi(formData, logout);
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

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {customer?.id ? "Editar Cliente" : "Nuevo cliente"}
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
              placeholder="Nombres "
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
              Genero
            </p>
            <Form.Dropdown
              placeholder="Seleciona un Genero"
              options={options}
              value={formik.values.gender}
              error={formik.errors.gender}
              onChange={(_, data) => formik.setFieldValue("gender", data.value)}
              fluid
              search
              selection
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-4 xl:gap-6">
          <div className="  w-full mb-6 group">
            <p
              htmlFor="address"
              className="block font-bold text-xl text-gray-700"
            >
              Calle y Numero
            </p>
            <Form.Input
              type="text"
              name="address"
              id="address"
              value={formik.values.address}
              error={formik.errors.address}
              onChange={formik.handleChange}
              placeholder="AV. San pedro"
            />
          </div>
          <div className="  w-full mb-6 group">
            <p
              htmlFor="number_int_address"
              className="block font-bold text-xl text-gray-700"
            >
              Numero interior (Opcional)
            </p>
            <Form.Input
              type="text"
              name="number_int_address"
              id="number_int_address"
              placeholder="Numero interior (Opcional)"
            />
          </div>
          <div className="text-lg w-full mb-6 group">
            <p
              htmlFor="zip"
              className="block text-xl font-bold  text-gray-800 "
            >
              Codigo postal
            </p>
            <Form.Input
              type="text"
              id="zip"
              name="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.errors.zip}
              placeholder="Codigo postal"
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
              onChange={(_, data) => formik.setFieldValue("state", data.value)}
              fluid
              search
              selection
            />
          </div>
        </div>
        <div className=" grid xl:grid-cols-2 xl:gap-6">
          <div className="text-lg w-full mb-6 group">
            <p
              htmlFor="name"
              className="block text-xl font-bold  text-gray-800 "
            >
              Telefono
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
          {/* <div className="  w-full mb-6 group">
            <p
              htmlFor="name"
              className="block text-xl font-bold  text-gray-800 "
            >
              Usuarios
            </p>
            <Dropdown
              placeholder="Seleciona un usuario"
              value={formik.values.user}
              error={formik.errors.user}
              onChange={(_, data) => formik.setFieldValue("user", data.value)}
              fluid
              search
              selection
            >
              <Dropdown.Menu>
                {user.map((user) => (
                  <Dropdown.Item key={user.id} value={user?.username}>
                    {user?.username}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
        </div>
        <input
          type="submit"
          loading={loading}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          value={customer?.id ? "Editar Cliente" : "Agregar cliente"}
        />
      </Form>
    </div>
  );
}

function initialValues(customer) {
  return {
    // user: {},
    name: customer?.name ?? "",
    last: customer?.last ?? "",
    address: customer?.address ?? "",
    gender: customer?.gender ?? "",
    phone: customer?.phone ?? "",
    state: customer?.state ?? "",
    zip: customer?.zip ?? "",
    number_int_address: customer?.number_int_address ?? "",
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
  };
}