import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/tools/hooks";
import { selectIsLoggedIn } from "../store/state/auth/selectors";

export interface RouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
