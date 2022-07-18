import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { createDoctorApi, updateDoctorApi } from "../../api/admin/doctor";
import {
  options,
  contriesOptions,
  specialtiesOptions,
  statusOptions,
} from "../../api/data/data.js";
import { Spinner } from "../spinner/Spinner";
import * as Yup from "yup";
import { toast } from "react-toastify";
export function FormDoctor({ doctor, cargando, setCargando }) {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues(doctor),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSutmit(formData);
    },
  });
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleSutmit = async (formData) => {
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    let respuesta;
    try {
      if (doctor?.id) {
        respuesta = await updateDoctorApi(doctor?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar el doctor, inténtelo mas tarde"
          );
        } else toast.success("Doctor actulizado correctamente");
        navigate("/admin/doctores");
      } else {
        respuesta = await createDoctorApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning("Problemas con crear el doctor, inténtelo mas tarde");
        } else {
          toast.success("Doctor creado correctamente");
          navigate("/admin/doctores");
        }
      }
      await respuesta.json();
    } catch (err) {
      console.log(err);
    }
  };

  return cargando ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {doctor?.id ? "Editar Doctor" : " Nuevo Doctor"}
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
              placeholder="Nombres"
            />
          </div>
          <div className="w-full mb-6 group">
            <p
              htmlFor="last"
              className="block font-bold text-xl  text-gray-700"
            >
              Apellidos
            </p>
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
            <p
              htmlFor="gender"
              className="block font-bold text-xl text-gray-700"
            >
              Género
            </p>

            <Form.Dropdown
              id="gender"
              placeholder="Seleciona un Género"
              options={options}
              value={formik.values.gender}
              error={formik.errors.gender}
              onChange={(_, data) => formik.setFieldValue("gender", data.value)}
              selection
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-6 xl:gap-6">
          <div className="w-full mb-6 group">
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
            <p htmlFor="town" className="block font-bold text-xl text-gray-700">
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
              Número interior
            </p>
            <Form.Input
              type="text"
              name="number_int_address"
              id="number_int_address"
              placeholder="Numero Interior (Opcional)"
            />
          </div>
          <div className=" w-full mb-6 group">
            <p htmlFor="zip" className="block font-bold text-xl text-gray-700">
              Código postal
            </p>
            <Form.Input
              type="text"
              name="zip"
              id="zip"
              value={formik.values.zip}
              error={formik.errors.zip}
              onChange={formik.handleChange}
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
            <p
              htmlFor="phone"
              className="block font-bold text-xl text-gray-700"
            >
              Número de télefono
            </p>
            <Form.Input
              type="tel"
              name="phone"
              id="phone"
              value={formik.values.phone}
              error={formik.errors.phone}
              onChange={formik.handleChange}
              placeholder="3317751433"
            />
          </div>
          <div className="  w-full mb-6 group">
            <p
              htmlFor="birthday"
              className="block font-bold text-xl text-gray-700"
            >
              Fecha de cumpleaños
            </p>
            <Form.Input
              type="date"
              value={formik.values.birthday}
              error={formik.errors.birthday}
              onChange={formik.handleChange}
              name="birthday"
              id="birthday"
            />
          </div>
          <div className="w-full mb-6 group">
            <p htmlFor="star" className="block font-bold text-xl text-gray-700">
              Puntuación del doctor
            </p>
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
        <div className="grid xl:grid-cols-3 xl:gap-6">
          <div className="text-lg w-full mb-6 group">
            <p
              htmlFor="user"
              className="block text-xl font-bold text-gray-800 "
            >
              Usuario
            </p>
            <select
              value={formik.values.user}
              name="user"
              id="user"
              onChange={(data) =>
                formik.setFieldValue("user", data.target.value)
              }
              onError={formik.errors.user}
              onSelect
            >
              {doctor?.id ? (
                <option value="">Selecione un nuevo rol para el doctor</option>
              ) : (
                <option value="">Selecione un rol para el doctor</option>
              )}
              {user?.map((user) => (
                <option onSelect={user?.email} key={user?.id} value={user?.id}>
                  {user?.email}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full mb-6 group">
            <p
              htmlFor="birthday"
              className="block font-bold text-xl text-gray-700"
            >
              Especialidad
            </p>
            <Form.Dropdown
              id="specialties"
              placeholder="Seleciona una especialidad"
              options={specialtiesOptions}
              value={formik.values.specialties}
              error={formik.errors.specialties}
              search
              onChange={(_, data) =>
                formik.setFieldValue("specialties", data.value)
              }
              selection
            />
          </div>
          <div className=" w-full mb-6 group">
            <p
              htmlFor="status"
              className="block font-bold text-xl text-gray-700"
            >
              Estatus del doctor
            </p>
            <Form.Dropdown
              id="status"
              placeholder="Seleciona un Estatus del Doctor"
              options={statusOptions}
              value={formik.values.status}
              error={formik.errors.status}
              search
              onChange={(_, data) => formik.setFieldValue("status", data.value)}
              selection
            />
          </div>
        </div>

        <input
          type="submit"
          value={doctor?.id ? "Editar Doctor" : "Crear Doctor"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
      </Form>
    </div>
  );
}

function initialValues(doctor) {
  return {
    name: doctor?.name ?? "",
    last: doctor?.last ?? "",
    user: doctor?.user?.email ?? null,
    address: doctor?.address ?? "",
    gender: doctor?.gender ?? "",
    phone: doctor?.phone ?? "",
    suburb: doctor?.suburb ?? "",
    town: doctor?.town ?? "",
    number_int_address: doctor?.number_int_address ?? "",
    birthday: doctor?.birthday ?? "",
    star: doctor?.star ?? 0,
    state: doctor?.state ?? "",
    zip: doctor?.zip ?? "",
    specialties: doctor?.specialties ?? "",
    status: doctor?.status ?? "",
  };
}
function validationSchema() {
  return {
    name: Yup.string()
      .min(5, "El Nombre es muy corto")
      .max(50, "El Nombre es muy largo")
      .required("El Nombre del Doctor es Obligatorio"),
    last: Yup.string()
      .min(5, "El Nombre es muy corto")
      .max(50, "El Nombre es muy largo")
      .required("El Nombre del doctor es obligatorio"),
    address: Yup.string().required("La dirección del doctor es obligatorio"),
    gender: Yup.string().required("El género del doctor es obligatorio"),
    specialties: Yup.string().required(
      "La especialidad del doctor es obligatorio"
    ),
    status: Yup.string().required("El estatus del doctor es obligatorio"),
    phone: Yup.string()
      .required("El numero de teléfono del doctor es obligatorio")
      .matches(/^[0-9]+$/, "Deben ser solo dígitos")
      .min(10, "Debe tener exactamente 10 dígitos")
      .max(10, "Debe tener exactamente 10 dígitos"),
    birthday: Yup.string().required("La fecha de cumpleaños es obligatorio"),
    state: Yup.string().required("El estado es obligatorio"),
    zip: Yup.string().required("El código postal es obligatorio"),
    star: Yup.number().positive(true).min(0).max(5.0),
    suburb: Yup.string().required("La colonia del doctor es obligatorio"),
    town: Yup.string().required("El municipio del doctor es obligatorio"),
  };
}
