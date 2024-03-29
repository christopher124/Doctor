import { useState, useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { Form, Dropdown, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { getUserApi } from "../../api/admin/user";
import { createDoctorApi, updateDoctorApi } from "../../api/admin/doctor";
import {
  options,
  contriesOptions,
  specialtiesOptions,
  statusOptions,
  DateOptions,
} from "../../api/data/data.js";
import { Spinner } from "../spinner/Spinner";
import * as Yup from "yup";
import { toast } from "react-toastify";

export function FormDoctor({ doctor, cargando }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues(doctor),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleSubmit(formData);
    },
  });
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const user = await getUserApi(logout);
      setUser(user.filter((user) => user?.role?.name === "Doctor"));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleSubmit = async (formData) => {
    const formDataTemp = {
      ...formData,
    };
    let respuesta;
    try {
      setLoading(true);
      if (doctor?.id) {
        respuesta = await updateDoctorApi(doctor?.id, formDataTemp, logout);
        if (!respuesta) {
          toast.warning(
            "Problemas con actualizar el doctor, inténtelo mas tarde"
          );
        } else toast.success("Datos actualizados correctamente");
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
  function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    date.setHours(hour);
    return date;
  }

  return cargando ? (
    <Spinner />
  ) : (
    <>
      <button
        className="text-white bg-[#1678C2] font-bold py-2 px-4 rounded-xl"
        onClick={() => navigate(`/admin/doctores`)}
      >
        <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
        Regresar
      </button>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-xl md:w-4/2 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          {doctor?.id ? "Editar Doctor" : " Nuevo Doctor"}
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
                placeholder="Nombres"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="last"
                className="block font-bold text-xl  text-gray-700"
              >
                Apellido (s)
              </label>
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
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="gender"
                className="block font-bold text-xl text-gray-700"
              >
                Género
              </label>

              <Form.Dropdown
                id="gender"
                placeholder="Seleciona un Género"
                options={options}
                value={formik.values.gender}
                error={formik.errors.gender}
                onChange={(_, data) =>
                  formik.setFieldValue("gender", data.value)
                }
                selection
              />
            </div>
          </div>
          <div className="grid xl:grid-cols-6 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
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
            <div className="text-lg w-full mb-6 group">
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
            <div className="text-lg w-full mb-6 group">
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
            <div className="text-lg w-full mb-6 group">
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
                placeholder="G-204"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="zip"
                className="block font-bold text-xl text-gray-700"
              >
                Código postal
              </label>
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
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="state"
                className="block font-bold text-xl text-gray-700"
              >
                Estado
              </label>
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
          <div className="grid xl:grid-cols-3 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="phone"
                className="block font-bold text-xl text-gray-700"
              >
                Número de télefono
              </label>
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
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="birthday"
                className="block font-bold text-xl text-gray-700"
              >
                Fecha de nacimiento
              </label>
              <Form.Input
                type="date"
                min={minDate}
                max={today}
                value={formik.values.birthday}
                error={formik.errors.birthday}
                onChange={formik.handleChange}
                name="birthday"
                id="birthday"
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="user"
                className="block text-xl font-bold text-gray-800 "
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
                onError={formik.errors.user}
                onSelect
              >
                {doctor?.id ? (
                  <option value="">Confirmar usuario</option>
                ) : (
                  <option value="">Selecione un usuario para el doctor</option>
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
          <div className="grid xl:grid-cols-4 xl:gap-6">
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="birthday"
                className="block font-bold text-xl text-gray-700"
              >
                Especialidad
              </label>
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
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="status"
                className="block font-bold text-xl text-gray-700"
              >
                Estatus
              </label>
              <Form.Dropdown
                id="status"
                placeholder="Seleciona un Estatus"
                options={statusOptions}
                value={formik.values.status}
                error={formik.errors.status}
                search
                onChange={(_, data) =>
                  formik.setFieldValue("status", data.value)
                }
                selection
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="workdates"
                className="block font-bold text-xl text-gray-700"
              >
                Días de trabajo
              </label>
              <Dropdown
                placeholder="Días de trabajo"
                fluid
                multiple
                search
                selection
                options={DateOptions}
                value={formik.values.workdates}
                onChange={(_, data) =>
                  formik.setFieldValue("workdates", data.value)
                }
              />
            </div>
            <div className="text-lg w-full mb-6 group">
              <label
                htmlFor="cellule"
                className="block font-bold text-xl text-gray-700"
              >
                Cedula Profesional
              </label>
              <Form.Input
                type="tex"
                name="cellule"
                id="cellule"
                value={formik.values.cellule}
                error={formik.errors.cellule}
                onChange={formik.handleChange}
                placeholder="PEJ360477"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={!formik.dirty}
            loading={loading}
            primary
          >
            {doctor?.id ? "Editar" : "Guardar cambios"}
          </Button>
        </Form>
      </div>
    </>
  );
}

function initialValues(doctor) {
  return {
    name: doctor?.name ?? "",
    last: doctor?.last ?? "",
    user: null,
    workdates: doctor?.workdates ?? "",
    cellule: doctor?.cellule ?? "",
    address: doctor?.address ?? "",
    gender: doctor?.gender ?? "",
    phone: doctor?.phone ?? "",
    suburb: doctor?.suburb ?? "",
    town: doctor?.town ?? "",
    number_int_address: doctor?.number_int_address ?? "",
    birthday: doctor?.birthday ?? "",
    state: doctor?.state ?? "",
    zip: doctor?.zip ?? "",
    specialties: doctor?.specialties ?? "",
    status: doctor?.status ?? "",
  };
}
function validationSchema() {
  return {
    user: Yup.string().required(true),
    name: Yup.string()
      .min(3, "El Nombre es muy corto.")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al final."
      )
      .max(50, "El Nombre es muy largo.")
      .required("El campo es requerido."),
    last: Yup.string()
      .min(2, "El Nombre es muy corto.")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Ingrese solo letras y sin espacios al fina."
      )
      .max(50, "El Nombre es muy largo.")
      .required("El campo es requerido."),
    address: Yup.string().required("El campo es requerido."),
    cellule: Yup.string().required("El campo es requerido."),
    gender: Yup.string().required("El campo es requerido."),
    specialties: Yup.string().required("El campo es requerido."),
    status: Yup.string().required("El campo es requerido."),
    phone: Yup.string()
      .required("El campo es requerido.")
      .matches(/^[0-9]+$/, "Deben ser solo dígitos.")
      .min(10, "Debe tener exactamente 10 dígitos.")
      .max(10, "Debe tener exactamente 10 dígitos."),
    birthday: Yup.string().required("El campo es requerido."),
    state: Yup.string().required("El campo es requerido."),
    zip: Yup.string().required("El campo es requerido."),
    suburb: Yup.string().required("El campo es requerido."),
    town: Yup.string().required("El campo es requerido."),
  };
}
