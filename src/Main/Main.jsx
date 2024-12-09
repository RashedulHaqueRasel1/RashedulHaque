import { Outlet } from "react-router-dom";
import Navbar from "../component/Common/Navbar/Navbar";
import Footer from "../component/Common/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;