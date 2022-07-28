import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getDoctorApi } from "../../api/admin/doctor";
import { getCustomerApi } from "../../api/admin/customer";
import { contriesOptions, options } from "../../api/data/data.js";
import {
  createPrescripApi,
  updatePrescripApi,
} from "../../api/admin/prescription";
import { toast } from "react-toastify";

export function FormPrescription({ prescription }) {
  const [doctor, setDoctor] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor);
      const customer = await getCustomerApi(logout);
      setCustomer(customer);
    })();
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(prescription),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSubmit(formData);
      console.log(formData);
    },
  });

  const handleSubmit = async (formData) => {
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    let respuesta;
    try {
      if (prescription?.id) {
        respuesta = await updatePrescripApi(
          prescription?.id,
          formDataTemp,
          logout
        );
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar el doctor, inténtelo mas tarde"
          );
        } else toast.success("Doctor actulizado correctamente");
        navigate("/admin/usuarios");
      } else {
        respuesta = await createPrescripApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning("Problemas con crear el doctor, inténtelo mas tarde");
        } else {
          toast.success("Doctor creado correctamente");
          navigate("/admin/usuarios");
        }
      }
      await respuesta.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="text-white bg-blue-600 font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/recetas`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {prescription?.id ? "Editar receta" : "Nuevo receta"}
        </h1>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-5 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="customer"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre del paciente
              </label>
              <select
                value={formik.values.customer}
                name="customer"
                id="customer"
                onChange={(data) =>
                  formik.setFieldValue("customer", data.target.value, {
                    shouldValidate: true,
                  })
                }
                onError={formik.errors.customer}
                onSelect
              >
                {prescription?.id ? (
                  <option value="">
                    Selecione un nuevo paciente para la receta si lo desea
                  </option>
                ) : (
                  <option value="">Selecione un Paciente para el receta</option>
                )}
                {customer?.map((customer) => (
                  <option key={customer?.id} value={customer?.id}>
                    {customer?.name} {customer?.last}
                  </option>
                ))}
              </select>
              {formik.errors.customer && (
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
                  El paciente es Obligatorio
                </p>
              )}
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="doctor"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre del doctor
              </label>
              <select
                value={formik.values.doctor}
                name="doctor"
                id="doctor"
                onChange={(data) =>
                  formik.setFieldValue("doctor", data.target.value, {
                    shouldValidate: true,
                  })
                }
                onError={formik.errors.doctor}
                onSelect
              >
                {prescription?.id ? (
                  <option value="">
                    Selecione un nuevo doctor para la receta si lo desea
                  </option>
                ) : (
                  <option value="">Selecione un doctor para la receta</option>
                )}
                {doctor?.map((doctor) => (
                  <option key={doctor?.id} value={doctor?.id}>
                    {doctor?.name} {doctor?.last}
                  </option>
                ))}
              </select>
              {formik.errors.doctor && (
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
                  El doctor es Obligatorio
                </p>
              )}
            </div>
            <div className="w-full mb-6 group">
              <label
                htmlFor="weight"
                className="block font-bold text-xl text-gray-700"
              >
                Peso del paciente
              </label>
              <Form.Input
                type="text"
                name="weight"
                id="weight"
                value={formik.values.weight}
                error={formik.errors.weight}
                onChange={formik.handleChange}
                placeholder="65 kg"
              />
            </div>
            <div className="w-full mb-6 group">
              <label
                htmlFor="size"
                className="block font-bold text-xl text-gray-700"
              >
                Altura del paciente
              </label>
              <Form.Input
                type="text"
                name="size"
                id="size"
                value={formik.values.size}
                error={formik.errors.size}
                onChange={formik.handleChange}
                placeholder="1.70 cm"
              />
            </div>
            <div className="w-full mb-6 group">
              <label
                htmlFor="allergies"
                className="block font-bold text-xl text-gray-700"
              >
                Alergias del paciente
              </label>
              <Form.Input
                type="text"
                name="allergies"
                id="allergies"
                value={formik.values.allergies}
                error={formik.errors.allergies}
                onChange={formik.handleChange}
                placeholder="penicilina"
              />
            </div>
          </div>
          <div className=" grid xl:grid-cols-2 xl:gap-6">
            <div className="w-full mb-6 group">
              <label
                htmlFor="observations"
                className="block font-bold text-xl text-gray-700"
              >
                Observaciones
              </label>
              <Form.TextArea
                type="text"
                name="observations"
                id="observations"
                value={formik.values.observations}
                error={formik.errors.observations}
                onChange={formik.handleChange}
                placeholder="Comentarios adicionales"
              />
            </div>
            <div className="w-full mb-6 group">
              <label
                htmlFor="treatment"
                className="block font-bold text-xl text-gray-700"
              >
                Tratamiento del paciente
              </label>
              <Form.TextArea
                type="text"
                name="treatment"
                id="treatment"
                value={formik.values.treatment}
                error={formik.errors.treatment}
                onChange={formik.handleChange}
                placeholder="Tratamiento solicitado"
              />
            </div>
          </div>
          <input
            type="submit"
            loading={loading}
            className=" text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value={prescription?.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </Form>
      </div>
    </>
  );
}

function initialValues(prescription) {
  return {
    customer: null,
    doctor: null,
    size: prescription?.size ?? "",
    allergies: prescription?.allergies ?? "",
    observations: prescription?.observations ?? "",
    treatment: prescription?.treatment ?? "",
    file_number:
      prescription?.file_number ?? Math.random().toString(36).substr(2),
    weight: prescription?.weight ?? "",
  };
}
function validationSchema() {
  return {
    customer: Yup.string().required(true),
    doctor: Yup.string().required(true),
    size: Yup.string().required(true),
    allergies: Yup.string().required(true),
    observations: Yup.string().required(true),
    weight: Yup.string().required(true),
    treatment: Yup.string().required(true),
  };
}
