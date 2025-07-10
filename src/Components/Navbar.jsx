// import React, { useState, useEffect, useRef } from 'react';
// import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import icono from '../Components/Images/logo2.png'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import CloseIcon from '@mui/icons-material/Close';
// function Navbar({ onMenuClick, windowWidth }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     onMenuClick(!menuOpen); // Pasa el estado del menú a la función del padre
//   };
//   return (
//     <AppBar className='bg_navbar' position="fixed" elevation={0} style={{ zIndex: 1000, background: '#b8bedd' }}>
//       <Toolbar className="justify-between ">
//         {windowWidth &&
//           <IconButton edge="start" color="black" aria-label="menu" onClick={toggleMenu}>
//             {menuOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>}

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src={icono} alt="Icono" style={{ width: '25px', height: '25px', marginRight: "6px" }} />
//           <h1 className="text-black" style={{ fontSize: '1rem', marginRight: '8px' }}>MEπA</h1>
//         </div>
//         <div>
//           <IconButton
//             edge="start"
//             color="black"
//             aria-label="facebook"
//             component="a"
//             href="https://www.facebook.com/profile.php?id=61558164045743"
//             target="_blank"
//           >
//             <FacebookIcon style={{ fontSize: 25 }} />
//           </IconButton>
//           <IconButton
//             edge="start"
//             color="black"
//             aria-label="instagram"
//             component="a"
//             href="https://www.instagram.com/academia_de_arte_educativo/"
//             target="_blank"
//           >
//             <InstagramIcon style={{ fontSize: 25 }} />
//           </IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

// components/Navbar.jsx
// Mejorado: Navbar responsivo con íconos de redes y sidebar ocultable
import React, { useState } from "react";
import { Link } from "react-router-dom";
import icono from "../Components/Images/logo2.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (key) => {
    setDropdownOpen(dropdownOpen === key ? null : key);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-white shadow-md z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={icono} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold text-gray-800">Academia Meπa</h1>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/"  onClick={handleLinkClick} className="hover:text-red-500 text-sm">Inicio</Link>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("nosotros")}
              className="hover:text-red-500 text-sm"
            >
              Nosotros
            </button>
            {dropdownOpen === "nosotros" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
                <Link to="/misionyvision" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Misión y Visión</Link>
                <Link to="/infraestructura" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Nuestras Instalaciones</Link>
                <Link to="/profesores" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Instructores de Carrera</Link>
              </div>
            )}

          </div>

          <Link to="/cursos" onClick={handleLinkClick} className="hover:text-red-500 text-sm">Cursos</Link>
          <Link to="/contactos" onClick={handleLinkClick}>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-sm px-4 py-2 rounded-md">Contacto</button>
          </Link>
          <div className="flex space-x-2 text-xl">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61558164045743" className="hover:text-blue-600"><FacebookIcon /></a>
            <a target="_blank" href="https://www.instagram.com/academia_de_arte_educativo/" className="hover:text-pink-500"><InstagramIcon /></a>
          </div>
        </div>

        {/* Botón Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <a href="#" className="text-xl hover:text-blue-600"><FacebookIcon /></a>
          <a href="#" className="text-xl hover:text-pink-500"><InstagramIcon /></a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Inicio</Link>

          <button
            onClick={() => toggleDropdown("nosotros")}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Nosotros
          </button>
          {dropdownOpen === "nosotros" && (
            <div className="pl-4">
              <Link to="/misionyvision" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Misión y Visión</Link>
              <Link to="/infraestructura" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Nuestras Instalaciones</Link>
              <Link to="/profesores" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Instructores</Link>
            </div>
          )}

          <Link to="/cursos" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Cursos</Link>
          <Link to="/contactos" onClick={handleLinkClick} className="block px-4 py-2 text-sm hover:bg-gray-100">Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
