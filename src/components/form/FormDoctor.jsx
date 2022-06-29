import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { createDoctorApi } from "../../api/admin/doctor";
import { options, contriesOptions } from "../../api/data/data.js";
import * as Yup from "yup";
import { toast } from "react-toastify";
export function FormDoctor() {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      createDoctor(formData);
    },
  });

  const createDoctor = async (formData) => {
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    const newDoctor = await createDoctorApi(formDataTemp, logout);

    if (!newDoctor) {
      toast.warning("Error al crear el doctor");
    } else {
      toast.success("Doctor creado correctamente");
      navigate("/admin/doctores");
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Nuevo Doctor
      </h1>
      <Form onSubmit={formik.handleSubmit} className="mt-10">
        <div className=" grid xl:grid-cols-3 xl:gap-6">
          <div className="text-lg w-full mb-6 group">
            <text
              htmlFor="name"
              className="block text-xl font-bold  text-gray-800 "
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
          <div className="  w-full mb-6 group">
            <text
              htmlFor="last"
              className="block font-bold text-xl  text-gray-700"
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
              className="block font-bold text-xl text-gray-700"
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
              className="block font-bold text-xl text-gray-700"
            >
              Calle y Numero
            </text>
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
            <text
              htmlFor="number_int_address"
              className="block font-bold text-xl text-gray-700"
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
              className="block font-bold text-xl text-gray-700"
            >
              Codigo postal
            </text>
            <Form.Input
              type="text"
              name="zip"
              id="zip"
              value={formik.values.zip}
              error={formik.errors.zip}
              onChange={formik.handleChange}
              placeholder="Codigo postal "
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="state"
              className="block font-bold text-xl text-gray-700"
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
              className="block font-bold text-xl text-gray-700"
            >
              Numero de Telefono
            </text>
            <Form.Input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              error={formik.errors.phone}
              onChange={formik.handleChange}
              placeholder="Telefono"
            />
          </div>
          <div className="  w-full mb-6 group">
            <text
              htmlFor="birthday"
              className="block font-bold text-xl text-gray-700"
            >
              Fecha de cumpleaños
            </text>
            <Form.Input
              type="date"
              value={formik.values.birthday}
              error={formik.errors.birthday}
              onChange={formik.handleChange}
              name="birthday"
              id="birthday"
            />
          </div>
          <div className=" w-full mb-6 group">
            <text
              htmlFor="star"
              className="block font-bold text-xl text-gray-700"
            >
              Puntuacion del doctor
            </text>
            <Form.Input
              type="text"
              value={formik.values.star}
              error={formik.errors.star}
              onChange={formik.handleChange}
              name="star"
              id="star"
              placeholder="5.0 "
            />
          </div>
        </div>
        {/* <div className="grid xl:grid-cols-3 xl:gap-6">
          <div className="  w-full mb-6 group">
            <text
              htmlFor="phone"
              className="block font-bold text-xl text-gray-700"
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
              className="block font-bold text-xl text-gray-700"
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
              className="block font-bold text-xl text-gray-700"
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
        </div> */}

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
    name: "",
    last: "",
    address: "",
    gender: "",
    phone: "",
    number_int_address: "",
    birthday: "",
    star: parseFloat("0"),
    state: "",
    zip: "",
    // user: {},
    // // condition: {},
    // // specialite: {},
  };
}
function validationSchema() {
  return {
    name: Yup.string()
      .min(3, "El Nombre es muy corto")
      .max(50, "El Nombre es muy largo")
      .required("El Nombre del Doctor es Obligatorio"),
    last: Yup.string()
      .min(3, "El Nombre es muy corto")
      .max(50, "El Nombre es muy largo")
      .required("El Nombre del Doctor es Obligatorio"),
    address: Yup.string().required("La dirección del doctor es Obligatorio"),
    gender: Yup.string().required(true),
    phone: Yup.string().min(10).max(10).required("El tefono es requerido"),
    birthday: Yup.string().required(true),
    state: Yup.string().required(true),
    zip: Yup.string().required(true),
    star: Yup.number().positive(true).min(0).max(5.0),
  };
}
