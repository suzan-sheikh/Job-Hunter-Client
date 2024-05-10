import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <div className="mb-24 md:mb-28">
                <Navbar/>
            </div>
            
            {/* outlet */}
            <div className="min-h-[calc(100vh-350px)]">
                <Outlet/>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Main;