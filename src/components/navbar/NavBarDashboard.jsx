import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";

export function NavBarDashboard() {
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth, logout]);
  return (
    <>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky top-0 h-16 border-b bg-white lg:py-2.5">
          <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
              Bienvenido {user?.username}
            </h5>
            <button class="w-12 h-16 -mr-2  lg:hidden"></button>
            <div class="flex space-x-4">
              <img
                src={
                  user?.avatar
                    ? user?.avatar
                    : "https://via.placeholder.com/150"
                }
                alt="logo"
                class="h-10 w-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
