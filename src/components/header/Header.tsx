import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/tools/hooks";
import { selectIsLoggedIn } from "../../store/state/auth/selectors";
import AuthorizedHeaderMenu from "./authorizedHeaderMenu/AuthorizedHeaderMenu";
import UnauthorizedHeaderMenu from "./unauthorizedHeaderMenu/UnauthorizedHeaderMenu";

const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();

  const header = location.pathname !== "/";

  return (
    <header
      className={`text-[#fbfbfb] absolute z-10 w-[1440px] border-b-[1px] border-[rgba(251,251,251,0.4)] ${
        header ? "bg-[var(--color)] relative mb-16" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center py-4 ${
          isLoggedIn ? "px-[128px]" : "px-[96px]"
        }`}
      >
        <NavLink
          to="/"
          className="font-medium text-2xl text-[#fbfbfb] cursor-pointer"
        >
          Nanny.services
        </NavLink>
        <nav className={`flex gap-10 ${header ? "ml-[100px]" : "ml-[400px]"}`}>
          <NavLink to="/" className="relative group">
            Home
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-2 h-2 rounded-full ${
                location.pathname === "/" ? "bg-white" : "hidden"
              }`}
            ></div>
          </NavLink>

          <NavLink to="/nannies" className="relative group">
            Nannies
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-2 h-2 rounded-full ${
                location.pathname === "/nannies" ? "bg-white" : "hidden"
              }`}
            ></div>
          </NavLink>

          {isLoggedIn && (
            <NavLink to="/favorites" className="relative group">
              Favorites
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-2 h-2 rounded-full ${
                  location.pathname === "/favorites" ? "bg-white" : "hidden"
                }`}
              ></div>
            </NavLink>
          )}
        </nav>
        {isLoggedIn ? <AuthorizedHeaderMenu /> : <UnauthorizedHeaderMenu />}
      </div>
    </header>
  );
};

export default Header;
