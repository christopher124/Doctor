import { Route } from "react-router-dom";
import { DashboardView } from "../../pages/dashboard/DashboardView";
import { LoginView } from "../../pages/LoginView";
export function PrivateRoute({ Component, ...rest }) {
  let auth = localStorage.getItem("token");
  return (
    <div>
      <Route {...rest}>{auth ? <Component /> : <LoginView />}</Route>
    </div>
  );
}
