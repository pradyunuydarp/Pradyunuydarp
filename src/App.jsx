// // import React from 'react';
// // import Navbar from "./sections/Navbar.jsx";
// // import Hero from "./components/Hero.jsx";
// // import About from "./components/About.jsx";
// // import Projects from "./components/Projects.jsx";
// // import Publications from "./components/Publications.jsx";
// // import Connect from "./components/Connect.jsx";
// //
// // const App = () => {
// //     return (
// //         <main className="bg-[#1a1a2e] min-h-screen">
// //             <Navbar/>
// //             <Hero />
// //             <About />
// //             <Projects />
// //             <Publications />
// //             <Connect />
// //         </main>
// //     )
// // }
// // export default App;
//
// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//
// import Navbar from "./sections/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import Projects from "./components/Projects.jsx";
// import Publications from "./components/Publications.jsx";
// import Connect from "./components/Connect.jsx";
// import About from "./pages/About.jsx"; // moved About to a separate page
//
// const App = () => {
//     return (
//         <Router>
//             <main className="bg-[#1a1a2e] min-h-screen">
//                 <Navbar />
//
//                 <Routes>
//                     <Route
//                         path="/"
//                         element={
//                             <>
//                                 <Hero />
//                                 <Projects />
//                                 <Publications />
//                                 <Connect />
//                             </>
//                         }
//                     />
//                     <Route path="/about" element={<About />} />
//                 </Routes>
//             </main>
//         </Router>
//     );
// };
//
// export default App;

// src/App.jsx
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar    from './sections/Navbar.jsx';
import Hero      from './components/Hero.jsx';
// import Projects  from './components/Projects.jsx';
import Projects   from './pages/Projects.jsx';
import Publications from './pages/Publications.jsx';
import Connect   from './pages/Connect.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume';

import Footer  from "./sections/Footer.jsx";


const App = () => (
    <Router>
        <Navbar />
        <main className="bg-[#1a1a2e] pt-20 min-h-screen">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            {/*<section id="projects" >*/}
                                <Projects/>
                            {/*</section>*/}
                            <Publications />
                            <section id="resume">
                                <Resume />
                            </section>
                            <section id="skills">
                                <Skills />
                            </section>
                            {/*<div id={"blank"} className="max-h-screen">*/}
                            {/*</div>*/}
                            {/*<section id="contact" className={"mt-20"}>*/}
                            {/*    <Contact/>*/}
                            {/*</section>*/}
                            {/*<section id="connect" >*/}
                                <Connect/>
                            {/*</section>*/}
                            <Footer/>
                        </>
                    }
                />
                {/*<Route path="/resume" element={<Resume />} />*/}
                {/*<Route path="/projects" element={<Projects />} />*/}
                {/*<Route path="/publications" element={<Publications />} />*/}
                <Route path="/about"   element={<AboutPage />} />
                {/*<Route path="/connect" element={<Connect />} />*/}
                {/*<Route path="/contact" element={<ContactPage />} />*/}
            </Routes>
        </main>
    </Router>
);

export default App;
