import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Inicio from "../Pages/Inicio/Inicio";
import MisionYVision from "../Pages/Nosotros/misionyvision";
import Infraestructura from "../Pages/Nosotros/infraestructa";
import Profesores from "../Pages/Nosotros/profesores";
import Cursos from "../Pages/Cursos/Cursos";
import Contactos from "../Pages/Contactos/contactos";
import CursoDetalle from "../Pages/Cursos/Cursodetalle";
import ScrollToTop from "./ComponentsCustom/Scrolltop";

function NavPage() {
    return (
        <React.Fragment>
            <section className="pt-16">
                <ScrollToTop />
                <Routes>

                    <Route path="/" element={<Inicio />} />
                    <Route path="/contactos" element={<Contactos />} />
                    <Route path="/misionyvision" element={<MisionYVision />} />
                    <Route path="/infraestructura" element={<Infraestructura />} />
                    <Route path="/profesores" element={<Profesores />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/curso/:slug" element={<CursoDetalle />} />

                </Routes>
            </section>
        </React.Fragment>
    );
};

export default NavPage;
