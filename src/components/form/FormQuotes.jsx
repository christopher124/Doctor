import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getCustomerApi } from "../../api/admin/customer";
import { getDoctorApi } from "../../api/admin/doctor";
import { createQuotesApi } from "../../api/admin/quote";
import * as Yup from "yup";
import { roomsOptions, specialtiesOptions } from "../../api/data/data";
import { toast } from "react-toastify";

export function FormQuotes() {
  const [customer, setCustomer] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const customer = await getCustomerApi(logout);
      setCustomer(customer);
      const doctor = await getDoctorApi(logout);
      setDoctor(doctor);
    })();
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(doctor),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSutmit(formData);
      console.log(formData);
    },
  });
  const navigate = useNavigate();
  const handleSutmit = async (formData) => {
    const quotes = await createQuotesApi(formData, logout);
    if (!quotes) {
      toast.warning("Problemas con actualizar al doctor, Inténtelo más tarde.");
    } else if (formData.quotes.date === undefined) {
      toast.success("Doctor actualizado correctamente.");
      navigate("/admin/citas");
    }
  };

  return (
    <>
      {" "}
      <button
        className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/citas`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>{" "}
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          Nueva Cita
        </h1>
        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-3 xl:gap-6">
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
              >
                {customer?.id ? (
                  <option value="">
                    Selecione un nuevo paciente para la cita
                  </option>
                ) : (
                  <option value="">Selecione un paciente para la cita</option>
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
              >
                {doctor?.id ? (
                  <option value="">
                    Selecione un nuevo doctor para la cita.
                  </option>
                ) : (
                  <option value="">Selecione un doctor para la cita.</option>
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
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="date"
                className="block text-xl font-bold  text-gray-800 "
              >
                Fecha y hora de la cita
              </label>
              <Form.Input
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.errors.date}
              />
            </div>
          </div>
          <div className=" grid xl:grid-cols-2 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="room"
                className="block text-xl font-bold  text-gray-800 "
              >
                Consultorio
              </label>
              <Form.Dropdown
                id="room"
                placeholder="Selecione un consultorio"
                options={roomsOptions}
                value={formik.values.room}
                error={formik.errors.room}
                search
                onChange={(_, data) => formik.setFieldValue("room", data.value)}
                selection
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="service"
                className="block font-bold text-xl text-gray-700"
              >
                Información de la cita
              </label>
              <Form.TextArea
                type="text"
                name="service"
                id="service"
                value={formik.values.service}
                error={formik.errors.service}
                onChange={formik.handleChange}
                placeholder="Servicios..."
              />
            </div>
          </div>
          <Button disabled={!formik.dirty} type="submit" primary>
            {doctor?.id ? "Editar Doctor" : "Crear Doctor"}
          </Button>
        </Form>
      </div>
    </>
  );
}
function initialValues() {
  return {
    customer: null,
    doctor: null,
    room: "",
    service: "",
    date: "",
  };
}
function validationSchema() {
  return {
    customer: Yup.string().required(true),
    doctor: Yup.string().required(true),
  };
}
