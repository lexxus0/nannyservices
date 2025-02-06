import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import PrivateRoute from "./routes/PrivateRoute";
import { useAppDispatch, useAppSelector } from "./store/tools/hooks";
import { lazy, useEffect } from "react";
import { selectTheme } from "./store/state/theme/selectors";
import { setTheme } from "./store/state/theme/slice";
import { ToastContainer } from "react-toastify";

const WelcomePage = lazy(() => import("./pages/welcomePage/WelcomePage"));
const NanniesPage = lazy(() => import("./pages/nanniesPage/NanniesPage"));
const FavouritesPage = lazy(
  () => import("./pages/favouritesPage/FavouritesPage")
);
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    dispatch(setTheme(theme));
  }, [dispatch, theme]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route
          path="/favorites"
          element={<PrivateRoute redirectTo="/" component={FavouritesPage} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
};

export default App;
