import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    return (
        <div>
          <div>
            <Header />
          </div>
          <div className="content">
            <Outlet />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      );
}

export default Layout;