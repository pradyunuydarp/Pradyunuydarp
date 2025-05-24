import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Connect from "./components/Connect.jsx";

const App = () => {
    return (
        <main className="bg-[#1a1a2e] min-h-screen">
            <Navbar/>
            <Hero />
            <About />
            <Projects />
            <Publications />
            <Connect />
        </main>
    )
}
export default App;