import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
          offset: 200, 
          once: true 
        });
      }, []);

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