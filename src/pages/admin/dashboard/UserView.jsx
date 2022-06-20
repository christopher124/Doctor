import React from "react";

export function UserView() {
  return (
    <>
      <h1 className="font-black text-2xl text-blue-400">Usuario</h1>
      <div className="bg-orange-700 ite mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <div className="flex flex-wrap justify-start">
          <h1 className="font-black text-2xl text-blue-400">Editar Usuario</h1>
          <form className="mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="nombre">
                Nombre:{" "}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
