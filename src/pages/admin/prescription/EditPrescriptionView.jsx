import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { getOnePrescripApi } from "../../../api/admin/prescription";
import { FormPrescription } from "../../../components/form/FormPrescription";
import { Spinner } from "../../../components/spinner/Spinner";
import Img404 from "../../../assets/img/story-404.svg";

export function EditPrescriptionView() {
  const [prescription, setPrescription] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const prescription = await getOnePrescripApi(id, logout);
      setPrescription(prescription);
    })(
      setTimeout(() => {
        setCargando(!cargando);
      }, 1000)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return cargando ? (
    <Spinner />
  ) : Object.keys(prescription).length === 0 ? (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-xs font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista general</span>
              <div className="justify-center flex p-9">
                <img className="" src={Img404} />
              </div>
              <p className="text-center">No se encontraron resultados</p>
            </div>
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
                <span className="text-gray-600 ">Editar Usuario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormPrescription
        prescription={prescription}
        cargando={cargando}
        setCargando={setCargando}
      />
    </div>
  );
}
