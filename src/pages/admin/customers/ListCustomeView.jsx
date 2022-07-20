import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { deleteCustomerApi, getCustomerApi } from "../../../api/admin/customer";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../components/spinner/Spinner";
import { ListCustomersView } from "../../../components/Admin/customers/ListCustomersView.jsx";
import Excel from "react-html-table-to-excel";
import Swal from "sweetalert2";

export function ListCustomeView() {
  const navigate = useNavigate();
  const [customer, setCustumer] = useState([]);
  const [tableCustomer, SetTableCustomer] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [searchUser, setSearchUser] = useState("");
  const [searchState, setSearchState] = useState("");

  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const customer = await getCustomerApi(logout);
      setCustumer(customer);
      SetTableCustomer(customer);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
  }, [auth]);

  const handleDelited = async (id) => {
    Swal.fire({
      title: " ¿Estas seguro de eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "¡No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteCustomerApi(id, logout);
        if (response) {
          Swal.fire(
            "¡Eliminado!",
            "El registro ha sido eliminado correctamente.",
            "success"
          );
          const arrayCustomer = customer.filter((doctor) => doctor.id !== id);
          setCustumer(arrayCustomer);
        }
      }
    });
  };

  const handleChangeUsers = (e) => {
    setSearchUser(e.target.value);
    filtrarUser(e.target.value);
  };

  const handleChangeState = (e) => {
    setSearchState(e.target.value);
    filterState(e.target.value);
  };

  const filtrarUser = (searchUsers) => {
    let searchResult = tableCustomer.filter((elements) => {
      if (
        elements?.name
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase()) ||
        elements?.last
          .toString()
          .toLowerCase()
          .includes(searchUsers.toLowerCase())
      ) {
        return elements;
      }
    });
    setCustumer(searchResult);
  };

  const filterState = (searchState) => {
    let searchResult = tableCustomer.filter((elements) => {
      if (
        elements?.town
          .toString()
          .toLowerCase()
          .includes(searchState.toLowerCase())
      ) {
        return elements;
      }
    });
    setCustumer(searchResult);
  };

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
                <span className="text-gray-600">Pacientes</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  {customer.id
                    ? "No hay usuarios registrados"
                    : "Usuario no encontrado"}
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 space-x-2">
            <button
              onClick={() => navigate("/admin/nuevo/cliente")}
              className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
            >
              <i className="fa fa-solid fa-plus"></i>
              <span>Nuevo Registro</span>
            </button>
          </div>
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
                <span className="text-gray-600">Pacientes</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 space-x-2 ">
            <div className="inline-flex rounded-md shadow-sm">
              <Excel
                id="buttonExcel"
                className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
                table="tableCustomers"
                filename="tableCustomers"
                sheet="pagina 1"
                buttonText="Exportar a excel"
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => navigate("/admin/nuevo/cliente")}
                type="button"
                className="flex flex-row items-center justify-center px-4 py-2 text-xs font-bold text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 space-x-1"
              >
                <span className="p-1">Nuevo Registro</span>
              </button>
            </div>
          </div>
        </div>
        <div className="shrink-0 space-x-2">
          <div className="inline-flex justify-start">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch  w-full mb-4">
                <input
                  type="search"
                  value={searchState}
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Busqueda por Estado"
                  aria-label="Search"
                  onChange={handleChangeState}
                  aria-describedby="button-addon2"
                />
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                <input
                  type="search"
                  value={searchUser}
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Busqueda por nombres y apellidos"
                  aria-label="Search"
                  onChange={handleChangeUsers}
                  aria-describedby="button-addon2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          id="tableCustomers"
          className="w-full text-sm text-left text-gray-500 text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase  bg-gray-500 ">
            <tr>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Nombre
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Apellido
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Dirección
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Codigo postal
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Estado
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Colonia
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Municipio
              </th>
              <th scope="col" className=" text-white py-3 px-6 text-left">
                Género
              </th>
              <th scope="col" className="text-white py-3 px-6 text-left">
                Teléfono
              </th>{" "}
              <th scope="col" className="text-white py-3 px-6 text-left">
                Estatus del Cliente
              </th>
              <th
                scope="col"
                className="text-white font-bold py-3 px-6 text-left "
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <ListCustomersView
                handleDelited={handleDelited}
                key={customer.id}
                customer={customer}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
