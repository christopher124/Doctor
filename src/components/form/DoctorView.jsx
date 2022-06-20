import { Spinner } from "../spinner/Spinner";
export function DoctorView({ doctor }) {
  const { name, last, adress, condition, phone } = doctor;
  console.log(doctor);
  return (
    <>
      <div className="flex items-center justify-start p-2 space-x-4">
        <div className="shrink-0 w-8">
          <img
            className="h-8 w-full shadow-lg rounded-full ring"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            alt="icon"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-sm font-bold text-white">
            Nombre y Apelido: {name + " " + last}
          </div>

          <div className="text-sm text-white">Direccion: {adress}</div>
          <div className="text-sm text-white">Telefono: {phone}</div>
          <div className="flex flex-row items-center justify-around">
            <div className="relative flex flex-row w-full text-center text-xs items-center h-1"></div>
          </div>
          <div className="text-white whitespace-nowrap">
            <span className=" p-2 uppercase font-bold inline-flex text-center bg-green-700 text-pink-100 rounded-lg text-xs px-2 py-0">
              {condition?.name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
