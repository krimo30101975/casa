import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
        <Navbar />
        <main>
            <Outlet /> {/* Affiche ici le contenu de la page */}
        </main>
        <Footer />
    </>
  );
}

export default MainLayout;
