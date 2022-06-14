import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";
import { NavBarDashboard } from "../../components/navbar/NavBarDashboard";
import SideBar from "../../components/sidebar/SideBar";
export function DashboardView() {
  const [user, setUser] = useState(undefined);
  const { auth, logout } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  return (
    <>
      <SideBar />
      <div>
        <NavBarDashboard />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="px-6  2xl:container">
            <div class="px-0 flex items-center justify-between space-x-4 2xl:container">
              <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
                Dashboard
              </h5>
            </div>
            <div className="flex justify-center items-center h-[80vh] border-2 border-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
