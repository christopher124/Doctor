import React from "react";
import { ChangeEmailForm } from "./ChangeEmailForm";
import { ChangeNameForm } from "./ChangeNameForm";
import { useNavigate } from "react-router-dom";
import { ChangePasswordForm } from "./ChangePasswordForm";

export function AccountView() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="w-full min-h-screen p-4">
          <div className="w-full mb-6 pt-3">
            <div className="flex flex-row items-center justify-between mb-4">
              <div className="flex flex-col">
                <div className="text-xs font-bold text-gray-500 uppercase">
                  <span className="font-mont  text-gray-600">
                    Vista General
                  </span>
                  <div className="text-xl font-bold">
                    <span className="font-mont text-gray-600">Mi Cuenta</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-white bg-blue-600 font-bold py-2 px-4 rounded-xl"
              onClick={() => navigate(`/admin/dashboard`)}
            >
              <i className="fas fa-arrow-left text-white mr-2 text-lg"></i>
              Regresar
            </button>
          </div>{" "}
          <ChangeNameForm />
          <ChangeEmailForm />
          <ChangePasswordForm />
        </div>
      </div>
    </>
  );
}
