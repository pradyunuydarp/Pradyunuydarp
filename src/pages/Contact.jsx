// src/pages/Contact.jsx
import React from 'react';
import Contact from '../components/Contact.jsx';

const ContactPage = () => (
    <main className="bg-[#1a1a2e] text-white py-20 px-6 min-h-screen">
        <section className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#4cc9f0]">Get in Touch</h2>
            <Contact />
        </section>
    </main>
);

export default ContactPage;
