import React from "react";
import { FormUser } from "../../../components/form/FormUser";

export function NewUserView() {
  return (
    <div className="w-full min-h-screen p-4">
      <div className="w-full mb-6 pt-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-col">
            <div className="text-base font-bold text-gray-500 uppercase">
              <span className="text-gray-600">Vista General</span>
              <div className="text-xl font-bold">
                <span className="text-gray-600">Nuevo Usuario</span>
              </div>
            </div>
          </div>
        </div>
        <FormUser />
      </div>
    </div>
  );
}
