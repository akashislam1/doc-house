import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isHeaderFooter =
    location?.pathname.includes("/login") ||
    location?.pathname.includes("/signup");
  return (
    <div className="w-full">
      {isHeaderFooter || <NavBar></NavBar>}
      <div className=" md:min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      {isHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
