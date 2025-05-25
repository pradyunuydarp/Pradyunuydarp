// src/pages/Home.jsx
import React from 'react';

const Home = () => (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-800">
        <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-bold mb-4">Pradyun Devarakonda</h1>
            <p className="text-lg">
                Software engineer &amp; 3D-enthusiast. Building interactive experiences on the web.
            </p>
            {/* add a simple nav/button to About */}
            <a
                href="/src/pages/About"
                className="inline-block mt-8 px-6 py-3 bg-[#4cc9f0] text-white rounded-lg hover:bg-opacity-90 transition"
            >
                Learn More About Me
            </a>
        </div>
    </main>
);

export default Home;
