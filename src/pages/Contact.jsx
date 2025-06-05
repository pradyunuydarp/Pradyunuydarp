// // src/pages/Contact.jsx
// import React from 'react';
// import Contact from '../components/Contact.jsx';
//
// const ContactPage = () => (
//     <main className="bg-[#1a1a2e] text-white py-20 px-6 min-h-screen">
//         <section className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold mb-8 text-[#4cc9f0]">Get in Touch</h2>
//             <Contact />
//         </section>
//     </main>
// );
//
// export default ContactPage;

import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import Footer from "../sections/Footer.jsx";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import FloatingParticles from "../models/FloatingParticles.jsx";

const Contact = () => {
    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Pradyun Devarakonda',
                    from_email: form.email,
                    to_email: 'pradyun.devarakonda@24.gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [3000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: 'danger',
                    });
                },
            );
    };

    return (
        <section  className={"relative"} id="contact">
        {/*<section className="min-h-screen w-full flex items-center justify-center relative" id="contact">*/}
        {/*<section*/}
        {/*    id="contact"*/}
        {/*    className="relative min-h-screen w-full flex items-center justify-center bg-[#1a1a2e] overflow-hidden"*/}
        {/*>*/}
        {/*>*/}

            {alert.show && <Alert {...alert} />}
            {/*<div className="h-full w-full">*/}
            {/*<div className="h-screen w-full sticky overflow-y-auto mt-8 pt-5 sm:mt-20 md:mt-12 scroll-mt-20">*/}
            <div className="h-screen w-full relative mt-4 mb-8">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }} >
                <ambientLight intensity={100} />
                <pointLight position={[10, 10, 10]} intensity={1000} />
                <FloatingParticles />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
            {/*</div>*/}
            {/*<Canvas*/}
            {/*    camera={{ position: [0, 0, 8], fov: 75 }}*/}
            {/*    className="h-full w-full -z-10 bg-[#1a1a2e]"*/}
            {/*>*/}
            {/*    <ambientLight intensity={0.5} />*/}
            {/*    <pointLight position={[10, 10, 10]} intensity={1000} />*/}
            {/*    <FloatingParticles />*/}
            {/*    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />*/}
            {/*</Canvas>*/}
            {/*<Canvas className="fixed inset-0 -z-10 bg-red-500">*/}
            {/*    <ambientLight />*/}
            {/*    <mesh>*/}
            {/*        <boxGeometry />*/}
            {/*        <meshStandardMaterial color="white" />*/}
            {/*    </mesh>*/}
            {/*</Canvas>*/}

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            {/*<div className="space-x-20 flex justify-center mb-8">*/}
            {/*    <a*/}
            {/*        href="https://www.linkedin.com/in/your-profile"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*        aria-label="LinkedIn"*/}
            {/*        className="inline-block p-3 rounded-md bg-[#1a1a2e]] hover:bg-[#62646C] transition duration-300"*/}
            {/*    >*/}
            {/*        <FaLinkedin size={24} color="#fff" />*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        href="https://github.com/your-username"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*        aria-label="GitHub"*/}
            {/*        className="inline-block p-3 rounded-md bg-[#1a1a2e]] hover:bg-[#62646C] transition duration-300"*/}
            {/*/!*    >*!/*/}
            {/*        <FaGithub size={24} color="#fff" />*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        href="https://instagram.com/your-username"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*        aria-label="Instagram"*/}
            {/*        className="inline-block p-3 rounded-md bg-[#1a1a2e]] hover:bg-[#62646C] transition duration-300"*/}
            {/*    >*/}
            {/*        <FaInstagram size={24} color="#fff" />*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/*<img src="assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />*/}
                {/**/}
                <div className="contact-container">
                    <div className="mb-12">
                        <h2 className="
    text-4xl sm:text-5xl font-bold text-gray-200
  ">
                            Let's connect 📞
                        </h2>
                    </div>
                    {/*<h3 className="head-text">Let's connect 📞</h3>*/}
                    <p className="text-lg text-white-600 mt-3">
                        I’m open to learning, working on projects and internships, and contributing to technology.
                        Please feel free to reach out to me if you have any questions, suggestions, or just want to say hi!
                        {/*Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to*/}
                        {/*life, I’m here to help.*/}
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
                {/*<span>*/}
                {/*<Canvas camera={{ position: [3, 3, 3], fov: 75 }} className="bg-[#1a1a2e]">*/}
                {/*    <ambientLight intensity={100} />*/}
                {/*    <pointLight position={[10, 10, 10]} intensity={1000} />*/}
                {/*    <FloatingParticles />*/}
                {/*    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />*/}
                {/*</Canvas>*/}
                {/*</span>*/}
            </div>
            {/*<Footer/>*/}
            </div>
        </section>
    );
};

export default Contact;