import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Avatar from "avvvatars-react";
import { getMeApi } from "../../api/admin/user";

export function NavBarDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { auth, logout } = useAuth();
  console.log(user);
  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth, logout]);

  if (user === undefined) {
    return null;
  }
  if (!auth && !user) {
    navigate("/");
    return null;
  }

  return (
    <>
      <div className="font-noto ml-auto mb-6 ">
        <div className="font-noto sticky top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="font-noto px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className=" text-2xl text-gray-600 font-medium lg:block">
              Bienvenido, {user?.username}
            </h5>
            <div className="flex space-x-4">
              <Link to="/admin/micuenta">
                {/* style="shape" */}
                <Avatar
                  value={user?.username}
                  border={true}
                  shadow={true}
                  size={40}
                  borderColor="#12374B"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
