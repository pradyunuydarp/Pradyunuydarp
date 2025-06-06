// // // import React from 'react'
// // //
// // // const Navbar = () => {
// // //     return (
// // //         <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
// // //             <div className={"max-w-7xl mx-auto"}>
// // //                 <div className="flex justify-between items-center py-5 mx-auto c-space">
// // //                     <a href={"/"} className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
// // //                         Pradyun Devarakonda
// // //                     </a>
// // //                     <button>
// // //                         <img src={"assets/menu.svg"} alt="menu toggle" className = {"w-8 h-8"} />
// // //
// // //                     </button>
// // //
// // //
// // //
// // //                 </div>
// // //                 <nav className="flex justify-between items-center py-5 mx-auto c-space">
// // //                 </nav>
// // //             </div>
// // //         </header>
// // //     )
// // // }
// // // export default Navbar
// //
// // import { useState } from 'react';
// //
// // import { navLinks } from '../constants/index.js';
// //
// // const NavItems = ({ onClick = () => {} }) => (
// //     <ul className="nav-ul">
// //         {navLinks.map((item) => (
// //             <li key={item.id} className="nav-li">
// //                 <a href={item.href} className="nav-li_a" onClick={onClick}>
// //                     {item.name}
// //                 </a>
// //             </li>
// //         ))}
// //     </ul>
// // );
// //
// // const Navbar = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //
// //     const toggleMenu = () => setIsOpen(!isOpen);
// //     const closeMenu = () => setIsOpen(false);
// //
// //     return (
// //         <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
// //             <div className="max-w-7xl mx-auto">
// //                 <div className="flex justify-between items-center py-5 mx-auto c-space">
// //                     <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
// //                         Pradyun Devarakonda
// //                     </a>
// //
// //                     <button
// //                         onClick={toggleMenu}
// //                         className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
// //                         aria-label="Toggle menu">
// //                         <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
// //                     </button>
// //
// //                     <nav className="sm:flex hidden">
// //                         <NavItems />
// //                     </nav>
// //                 </div>
// //             </div>
// //
// //             <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
// //                 <nav className="p-5">
// //                     <NavItems onClick={closeMenu} />
// //                 </nav>
// //             </div>
// //         </header>
// //     );
// // };
// //
// // export default Navbar;
//
//
// import { useState } from 'react';
// import { navLinks } from '../constants/index.js';
//
// const NavItems = ({ onClick = () => {} }) => (
//     <ul className="nav-ul">
//         {navLinks.map((item) => (
//             <li key={item.id} className="nav-li">
//                 <a href={item.href} className="nav-li_a" onClick={onClick}>
//                     {item.name}
//                 </a>
//             </li>
//         ))}
//     </ul>
// );
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggleMenu = () => setIsOpen(!isOpen);
//     const closeMenu = () => setIsOpen(false);
//
//     return (
//         <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex justify-between items-center py-5 mx-auto c-space">
//                     {/* Logo / Name */}
//                     <a
//                         href="/"
//                         className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
//                     >
//                         Pradyun Devarakonda
//                     </a>
//
//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={toggleMenu}
//                         className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
//                         aria-label="Toggle menu"
//                     >
//                         <img
//                             src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
//                             alt="toggle"
//                             className="w-6 h-6"
//                         />
//                     </button>
//
//                     {/* Desktop Nav */}
//                     <nav className="sm:flex hidden">
//                         <NavItems />
//                     </nav>
//                 </div>
//             </div>
//
//             {/* Mobile Sidebar Nav */}
//             <div
//                 className={`nav-sidebar transition-all duration-300 ease-in-out overflow-hidden ${
//                     isOpen ? 'max-h-screen' : 'max-h-0'
//                 } sm:hidden`}
//             >
//                 <nav className="p-5">
//                     <NavItems onClick={closeMenu} />
//                 </nav>
//             </div>
//         </header>
//     );
// };
//
// export default Navbar;


// src/sections/Navbar.jsx
import { useState } from 'react';
// import {Link, useNavigate} from 'react-router-dom';
import { navLinks } from '../constants/index.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



// const ScrollToSections = (href, section) => {
//     const navigate = useNavigate();
//     // if (location.pathname !== "/") {
//     //     navigate("/"); // navigate to home
//         // After navigation, scroll must be triggered — use effect or a delay
//         // This can be tricky; simplest is to add a scroll handler on the home component
//     // } else {
//         navigate(href); // navigate to the page
//         const el = document.getElementById(section);
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//     // }
// };
// const NavItems = ({ onClick = () => {} }) => (
//     <ul className="nav-ul flex flex-col sm:flex-row gap-4">
//         {navLinks.map((item) => (
//             <li key={item.id} className="nav-li">
//                 <Link
//                     to={item.href}
//                     className="nav-li_a"
//                     onClick={ScrollToSections(item.href,item.section)}
//                 >
//                     {item.name}
//                 </Link>
//             </li>
//         ))}
//     </ul>
// );

const NavItems = ({ onClick = () => {} }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (href, section) => (e) => {
        e.preventDefault(); // Prevent default link behavior

        if (location.pathname !== '/'+href) {
            navigate(href); // Navigate to home (or target route)

            // Wait for route to load, then scroll
            setTimeout(() => {
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100); // Small delay to ensure DOM updates
        }
        else {
            // Already on the correct page
            const el = document.getElementById(section);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        onClick(); // trigger mobile menu close if needed
    };

    return (
        <ul className="nav-ul flex flex-col sm:flex-row gap-4">
            {navLinks.map((item) => (
                <li key={item.id} className="nav-li">
                    <Link
                        to={item.href}
                        className="nav-li_a"
                        onClick={handleNavigation(item.href, item.section)}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu  = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
                <Link to="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Pradyun Devarakonda
                </Link>

                {/* Mobile button */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-neutral-400 hover:text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <img
                        src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
                        alt="menu"
                        className="w-6 h-6"
                    />
                </button>

                {/* Desktop nav */}
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
            </div>

            {/* Mobile sidebar */}
            <div
                className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <nav className="px-4 pb-4">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
