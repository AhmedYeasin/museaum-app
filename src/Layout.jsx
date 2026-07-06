import { Outlet } from "react-router";
import Footer from "./Components/Shared/Footer.jsx";
import Navbar from "./Components/Shared/Navbar.jsx";

export default function Layout(){
    return(
       <>
       <Navbar/>
       <Outlet/>
       <Footer/>
       </>
    )
}