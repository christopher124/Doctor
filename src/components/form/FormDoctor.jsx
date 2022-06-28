import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { getDoctorApi } from "../../api/admin/doctor";
import * as Yup from "yup";
import { Spinner } from "../spinner/Spinner";
import { ListDoctorView } from "../doctor/ListDoctorView";
export function FormDoctor() {
  const [user, setUser] = useState([]);
  const getOptions = () => {
    const name = getDoctorApi(logout);
    return { key: name, text: name, value: name };
  };
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getDoctorApi(logout);
      setUser(user);
    })();
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
    },
  });

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Nuevo Doctor
      </h1>
      <Form onSubmit={formik.handleSubmit} className="mt-10">
        <div className="grid xl:grid-cols-3 xl:gap-6">
          <div className=" w-full mb-6 group">
            <text
              htmlFor="name"
              className="block text-sm font-bold  text-gray-800 "
            >
              Nombres
            </text>
            <Form.Input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
              placeholder="Nombres"
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="last"
              className="block text-sm font-medium text-gray-700"
            >
              Apellidos
            </text>
            <Form.Input
              type="text"
              name="last"
              id="last"
              value={formik.values.last}
              onChange={formik.handleChange}
              error={formik.errors.last}
              placeholder="Apellidos"
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Genero
            </text>

            <Form.Dropdown
              id="gender"
              placeholder="Seleciona un Genero"
              options={options}
              value={formik.values.gender}
              error={formik.errors.gender}
              onChange={(_, data) => formik.setFieldValue("gender", data.value)}
              selection
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-4 xl:gap-6">
          <div className="  w-full mb-6 group">
            <text
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Calle y Numero
            </text>
            <Form.Input
              type="text"
              name="address"
              id="address"
              value={formik.values.adress}
              error={formik.errors.adress}
              placeholder="AV. San pedro"
            />
          </div>
          <div className="  w-full mb-6 group">
            <text
              htmlFor="number_int_address"
              className="block text-sm font-medium text-gray-700"
            >
              Numero interior (Opcional)
            </text>
            <Form.Input
              type="text"
              name="number_int_address"
              id="number_int_address"
              placeholder="Numero interior (Opcional)"
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Codigo postal
            </text>
            <Form.Input
              type="text"
              name="zip"
              id="zip"
              placeholder="Codigo postal "
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              Estado
            </text>
            <Dropdown
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
        <div className="grid xl:grid-cols-3 xl:gap-6">
          <div className="  w-full mb-6 group">
            <text
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Numero de Telefono
            </text>
            <Form.Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Telefono"
            />
          </div>
          <div className="  w-full mb-6 group">
            <text
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha de cumpleaños
            </text>
            <Form.Input type="date" name="birthday" id="birthday" />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="star"
              className="block text-sm font-medium text-gray-700"
            >
              Puntuacion del doctor
            </text>
            <Form.Input
              type="number"
              name="star"
              id="star"
              placeholder="5.0 "
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-3 xl:gap-6">
          <div className="  w-full mb-6 group">
            <text
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Usuarios
            </text>
            <Dropdown
              placeholder="Seleciona un Usuario"
              fluid
              search
              value={formik.values.state}
              error={formik.errors.state}
              onChange={(_, data) => formik.setFieldValue("user", data.value)}
              selection
            />
          </div>
          <div className="  w-full mb-6 group">
            <text
              htmlFor="birthday"
              className="block text-sm font-medium text-gray-700"
            >
              Especialidad
            </text>
            <Dropdown
              placeholder="Seleciona una Especialidad"
              fluid
              search
              selection
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="condition"
              className="block text-sm font-medium text-gray-700"
            >
              Estatus del doctor
            </text>
            <Dropdown
              placeholder="Seleciona un Estatus"
              fluid
              search
              selection
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear Doctor
        </button>
      </Form>
    </div>
  );
}

function initialValues() {
  return {
    user: {},
    name: "",
    last: "",
    address: "",
    gender: "",
    phone: "",
    condition: [],
    specialite: [],
    star: 0,
    birthday: "",
    state: "",
    number_int_address: "",
    zip: "",
  };
}
function validationSchema() {
  return {
    name: Yup.string().required(true),
    last: Yup.string().required(true),
    address: Yup.string().required(true),
    gender: Yup.string().required(true),
    zip: Yup.string().required(true),
    star: Yup.number().required(true),
  };
}

const options = [
  { key: "hombre", value: "hombre", text: "Masculino" },
  { key: "mujer", value: "mujer", text: "Femenino" },
];
const contriesOptions = [
  { key: "Baja California", value: "Baja California", text: "Baja California" },
  {
    key: "Baja California Sur",
    value: "Baja California Sur",
    text: "Baja California Sur",
  },
  { key: "Campeche", value: "Campeche", text: "Campeche" },
  { key: "Coahuila", value: "Coahuila", text: "Coahuila" },
  { key: "Colima", value: "Colima", text: "Colima" },
  { key: "Chiapas", value: "Chiapas", text: "Chiapas" },
  { key: "Chihuahua", value: "Chihuahua", text: "Chihuahua" },
  { key: "Durango", value: "Durango", text: "Durango" },
  {
    key: "Distrito Federal",
    value: "Distrito Federal",
    text: "Distrito Federal",
  },
  { key: "Guanajuato", value: "Guanajuato", text: "Guanajuato" },
  { key: "Hidalgo", value: "Hidalgo", text: "Hidalgo" },
  { key: "Jalisco", value: "Jalisco", text: "Jalisco" },
  { key: "México", value: "México", text: "México" },
  { key: "Morelos", value: "Morelos", text: "Morelos" },
  { key: "Nayarit", value: " Nayarit", text: "Nayarit" },
  { key: "Nuevo León", value: "Nuevo León", text: "Nuevo León" },
  { key: "Oaxaca", value: "Oaxaca", text: "Oaxaca" },
  { key: "Puebla", value: "Puebla", text: "Puebla" },
  { key: "Querétaro", value: "Querétaro", text: "Querétaro" },
  { key: "Quintana Roo", value: "Quintana Roo", text: "Quintana Roo" },
  { key: "San Luis Potosí", value: "San Luis Potosí", text: "San Luis Potosí" },
  { key: "Sinaloa", value: "Sinaloa", text: "Sinaloa" },
  { key: "Sonora", value: "Sonora", text: "Sonora" },
  { key: "Tabasco", value: "Tabasco", text: "Tabasco" },
  { key: "Tamaulipas", value: "Tamaulipas", text: "Tamaulipas" },
  { key: "Tlaxcala", value: "Tlaxcala", text: "Tlaxcala" },
  { key: "Veracruz", value: "Veracruz", text: "Veracruz" },
  { key: "Yucatán", value: "Yucatán", text: "Yucatán" },
  { key: "Zacatecas", value: "Zacatecas", text: "Zacatecas" },
];
