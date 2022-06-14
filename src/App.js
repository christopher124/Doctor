import { useMemo, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import { setToken, getToken, removeToken } from "./api/token.jsx";
import AuthContext from "./context/AuthContext";
import { AppRouter } from "./components/navigation/AppRouter";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(undefined);
  const [realoadUser, setReloadUser] = useState(false);
  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token),
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [setReloadUser]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      navigate("/login");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <AppRouter />
    </AuthContext.Provider>
  );
}
