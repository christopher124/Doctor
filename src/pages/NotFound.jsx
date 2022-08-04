import { NavBar } from "../components/navbar/NavBar";
import notfound from "../assets/img/Not-found.png"

export function NotFound() {
  return (
    <div>
      <NavBar />
      <img src={notfound} className=" ml-auto mr-auto -mt-64 "></img>
    </div>
  );
}
