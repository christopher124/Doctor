import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOneQuotesApi } from "../../../api/admin/quote";
import { Spinner } from "../../../components/spinner/Spinner";
import Img404 from "../../../assets/img/story-404.svg";

import { FormQuotes } from "../../../components/form/FormQuotes";

export function EditQuotesView() {
  const [quotes, setQuotes] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const quotes = await getOneQuotesApi(id, logout);
      setQuotes(quotes);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return cargando ? (
    <Spinner />
  ) : Object.keys(quotes).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col"></div>
        </div>
      </div>
      <div className="text-base font-bold text-gray-500 uppercase">
        <span className="text-gray-600">Vista general</span>
        <div className="text-xl font-bold">
          <span className="text-gray-600">Editar Doctores</span>
        </div>
        <div className="justify-center flex p-5">
          <img className="ui centered image w-96 h-96" src={Img404} />
        </div>
        <p className="text-center">No se encontraron resultados</p>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600 ">Editar Usuario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormQuotes
        quotes={quotes}
        cargando={cargando}
        setCargando={setCargando}
      />
    </div>
  );
}
