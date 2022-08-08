import { NavBar } from "../components/navbar/NavBar";
import notfound from "../assets/img/Not-found.png";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";
export function NotFound() {
  const { auth } = useAuth();

  return (
    <div>
      {auth ? null : <NavBar />}

      {auth ? null : (
        <div>
          <img
            src={notfound}
            className=" mx-[auto] -mt-52"
            alt="logo"
          ></img>
          <div className=" items-center -mt-72 ">
            <li className="flex items-center mx-[49%]  text-xl">
              <Link
                className={
                  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full text-center" +
                  (window.location.href.indexOf("/login") !== -1
                    ? "text-black-700 hover:text-blue-100 text-center "
                    : "text-blue-700 hover:text-white ")
                }
                to="/"
              >
                Inicio
              </Link>
            </li>
            <p className="text-2xl text-center ml-[90px] mt-4">Parece que no se encontró la página</p>
          </div>
        </div>
      )}
    </div>
  );
}
