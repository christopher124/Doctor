import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/admin/user";

export function NavBarDashboard() {
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
      console.log("Desde navnardas" + response);
    })();
  }, [auth]);
  return (
    <>
      <div className="ml-auto mb-6 ">
        <div className="sticky top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Bienvenido {user?.username}
            </h5>
            <button className="w-12 h-16 -mr-2  lg:hidden"></button>
            <div className="flex space-x-4">
              <Link to="/admin/usuario">
                <img
                  src={
                    user?.url
                      ? user?.url
                      : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                  }
                  alt="logo"
                  className="h-10 w-10 rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
