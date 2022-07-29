import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getCustomerApi } from "../../api/admin/customer";
import { getDoctorApi } from "../../api/admin/doctor";
import { createQuotesApi } from "../../api/admin/quote";
import * as Yup from "yup";
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
    },
  });
  const navigate = useNavigate();
  const handleSutmit = async (formData) => {
    const hola = await createQuotesApi(formData, logout);
    if (!hola && customer.status === false) {
      toast.warning("Problemas con actulizar al doctor, intentelo mas tarde");
    } else toast.success("Doctor actulizado correctamente");
    navigate("/admin/citas");
  };

  return (
    <>
      {" "}
      <button
        className="text-white bg-blue-600 font-bold py-2 px-4 rounded-xl"
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
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre del Cliente
              </label>
              <select
                value={formik.values.customer}
                name="customer"
                id="customer"
                onChange={(data) =>
                  formik.setFieldValue("customer", data.target.value)
                }
              >
                <option>Selecione un usuario</option>

                {customer?.map((customer) => (
                  <option key={customer?.id} value={customer?.id}>
                    {customer?.name} {customer?.last}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="name"
                className="block text-xl font-bold  text-gray-800 "
              >
                Nombre del doctor
              </label>
              <select
                value={formik.values.doctor}
                onChange={(data) =>
                  formik.setFieldValue("doctor", data.target.value)
                }
                name="doctor"
                id="doctor"
              >
                <option>Selecione un doctor</option>
                {doctor?.map((doctor) => (
                  <option key={doctor?.id} value={doctor?.id}>
                    {doctor?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="date"
                className="block text-xl font-bold  text-gray-800 "
              >
                Fecha y hora de la cita
              </label>
              <Form.Input
                type="datetime-local"
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.errors.date}
              />
            </div>
          </div>

          <input
            type="submit"
            value={doctor?.id ? "Editar Doctor" : "Crear Doctor"}
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </Form>
      </div>
    </>
  );
}
function initialValues() {
  return {
    customer: null,
    doctor: null,
    date: "",
  };
}
function validationSchema() {
  return {};
}
