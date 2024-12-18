import Footer from "./Footer";
import Navbar from "./Nav";
import Head from "next/head";


const Layout = ({ children }: any) => {
    return (
        <div>
    
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;