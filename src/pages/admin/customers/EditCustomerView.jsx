import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneCustomerApi } from "../../../api/admin/customer";
import { FormCustumer } from "../../../components/form/FormCustumer";
import { Spinner } from "../../../components/spinner/Spinner";
import Img404 from "../../../assets/img/story-404.svg";

export function EditCustomerView() {
  const [customer, setCustumer] = useState({});
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const { auth, logout } = useAuth();
  console.log(auth);
  useEffect(() => {
    (async () => {
      const customer = await getOneCustomerApi(id, logout);
      setCustumer(customer);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth, id, logout]);
  if (!auth) {
    navigate("/");
    return null;
  }
  return cargando ? (
    <Spinner />
  ) : Object.keys(customer).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Editar Paciente</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs font-bold text-gray-500 uppercase">
          <div className="justify-center flex p-5">
            <img
              className="ui centered image w-96 h-96"
              src={Img404}
              alt="Logo"
            />
          </div>
          <p className="text-center">No se encontraron resultados</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Editar Paciente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormCustumer
        customer={customer}
        cargando={cargando}
        setCargando={setCargando}
      />
    </div>
  );
}
