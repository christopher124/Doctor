import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getCustomerApi } from "../../api/admin/customer";
import { getDoctorApi } from "../../api/admin/doctor";
import { createQuotesApi, updateQuotesApi } from "../../api/admin/quote";
import * as Yup from "yup";
import { roomsOptions, statusOptionsQuotes } from "../../api/data/data";
import { toast } from "react-toastify";

export function FormQuotes({ quotes }) {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [tableDoctor, SetTableDoctor] = useState([]);
  const [searchSpecialties, setSearchSpecialties] = useState("");
  const [loading, setLoading] = useState(false);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const customer = await getCustomerApi(logout);
      setCustomer(customer);
      const doctor = await getDoctorApi(logout);
      setDoctor(
        doctor
          .filter(
            (doctors) =>
              doctors.status === "Disponible" ||
              doctors.status === "En consulta"
          )
          .slice(0, 3)
      );
      SetTableDoctor(
        doctor
          .filter(
            (doctors) =>
              doctors.status === "Disponible" ||
              doctors.status === "En consulta"
          )
          .slice(0, 3)
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const formik = useFormik({
    initialValues: initialValues(quotes),
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
      setLoading(true);
      if (quotes?.id) {
        respuesta = await updateQuotesApi(quotes?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar la cita, inténtelo mas tarde."
          );
        } else toast.success("Datos actulizado correctamente.");
        navigate("/admin/citas");
      } else {
        respuesta = await createQuotesApi(formDataTemp, logout);
        if (!respuesta) {
          toast.warning("Problemas con crear la cita, inténtelo mas tarde.");
        } else {
          toast.success("Cita creada correctamente.");
          navigate("/admin/citas");
        }
      }
      await respuesta.json();
    } catch (err) {
      setLoading(false);
    }
  };

  const handleChangeSpecialties = (e) => {
    setSearchSpecialties(e.target.value);
    filtrarEspecially(e.target.value);
  };
  const filtrarEspecially = (searchUsers) => {
    let searchResult = tableDoctor.filter((elements) => {
      if (
        elements?.specialties
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase())
      ) {
        return elements;
      }
    });
    setDoctor(searchResult);
  };
  return (
    <>
      {" "}
      <button
        className="text-white bg-[#2185D0] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/citas`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>{" "}
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <div className="w-full mb-6 pt-3">
          <div className="shrink-0 space-x-2">
            <div className="inline-flex justify-start">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  placeholder="Búsqueda por especialidad"
                  value={searchSpecialties}
                  onChange={handleChangeSpecialties}
                />
              </div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
            <table
              id="tableDoctors"
              className="w-full border-collapse border border-slate-500 text-base text-center text-white"
            >
              <thead className="text-base uppercase bg-[#687584] text-white">
                <tr>
                  <th scope="col" className=" text-white py-3 px-6 text-center">
                    Nombre(s)
                  </th>
                  <th scope="col" className="text-white py-3 px-6 text-center">
                    Apellido(s)
                  </th>

                  <th scope="col" className="text-white py-3 px-6 text-center">
                    Especialidad
                  </th>
                  <th scope="col" className="text-white py-3 px-6 text-center">
                    Horarios disponibles
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctor?.map((doctorUser) => (
                  <tr className="border-b bg-cyan-800 border-white">
                    <th
                      scope="row"
                      className=" justify-center flex p-9 px-6 py-4 text-center"
                    >
                      <td className="text-white px-6 py-4 font-medium text-center">
                        {doctorUser?.name ? doctorUser?.name : "No hay datos"}
                      </td>
                    </th>
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                      {doctorUser?.last ? doctorUser?.last : "No hay datos"}
                    </td>
                    <td className="text-white font-medium px-6 py-4 text-center">
                      {doctorUser?.specialties
                        ? doctorUser?.specialties
                        : "No hay datos"}
                    </td>
                    <td className="text-white font-medium px-6 py-4 text-center">
                      {doctorUser?.workdates[1]} / {doctorUser?.workdates[2]}
                    </td>
                  </tr>
                ))}{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {quotes?.id ? "Editar Cita" : "Crear Cita"}
        </h1>

        <Form onSubmit={formik.handleSubmit} className="mt-10">
          <div className=" grid xl:grid-cols-4 xl:gap-6">
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
                    {customer?.name} {customer?.last} / {customer?.user?.email}
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
                    {doctor?.name} {doctor?.last} / {doctor?.user?.email}
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
                Fecha y hora
              </label>
              <Form.Input
                type="datetime-local"
                name="date"
                min={new Date().toISOString()}
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.errors.date}
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="date"
                className="block text-xl font-bold  text-gray-800 "
              >
                Estatus
              </label>
              <Form.Dropdown
                placeholder="Estatus"
                fluid
                search
                selection
                options={statusOptionsQuotes}
                value={formik.values.status}
                onChange={(_, data) =>
                  formik.setFieldValue("status", data.value)
                }
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
          <Button
            disabled={!formik.dirty}
            loading={loading}
            type="submit"
            primary
          >
            {doctor?.id ? "Editar" : "Guardar Cambios"}
          </Button>
        </Form>
      </div>
    </>
  );
}
function initialValues(quotes) {
  return {
    customer: null,
    doctor: null,
    room: quotes?.room ?? "",
    service: quotes?.service ?? "",
    date: quotes?.date ?? "",
    status: quotes?.status ?? "En Proceso",
  };
}
function validationSchema() {
  return {
    customer: Yup.string().required(true),
    doctor: Yup.string().required(true),
  };
}
