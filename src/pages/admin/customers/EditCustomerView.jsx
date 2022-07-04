import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneCustomerApi } from "../../../api/admin/customer";
import { FormCustumer } from "../../../components/form/FormCustumer";
export function EditCustomerView() {
  const [customer, setCustumer] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const customer = await getOneCustomerApi(id, logout);
      setCustumer(customer);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);
  return (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Editar Usuario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {customer?.name ? (
        <FormCustumer customer={customer} cargando={cargando} />
      ) : (
        <p>Cliente ID no Valido</p>
      )}
    </div>
  );
}
