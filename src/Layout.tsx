import { Suspense } from "react";
import Header from "./components/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
