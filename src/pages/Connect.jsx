import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import React, {useRef, useState} from "react";
import useAlert from "../hooks/useAlert.js";
import emailjs from "@emailjs/browser";
const Connect = () => {

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

  const socialLinks = [
    { name: "Work Email", url: "mailto:Devarakonda.Pradyun@iiitb.ac.in", icon: <SiGmail /> },
    {name: "Gmail", url: "mailto:pradyundevarakonda24@gmail.com", icon: <SiGmail />},
    { name: "GitHub", url: "https://github.com/pradyunuydarp", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pradyun-devarakonda/", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://www.instagram.com/pradyunuydarp/", icon: <FaInstagram /> },

    // { name: "Twitter", url: "#" },
    // Add more social links...
  ];

  return (
    <section id="connect" className="min-h-screen py-20 px-4 bg-[#1a1a2e] relative">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Sparkles
            count={300}
            scale={[10, 10, 10]}
            size={1}
            speed={1}
            color="#4cc9f0"
          />
          <Sparkles
              count={50}
              scale={[8, 8, 8]}
              size={2}
              speed={0.5}
              color="#7209b7"
          />
        </Canvas>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl  text-center font-bold text-gray-200 mb-12">Let's connect 📞</h2>
        
        <div className="bg-[#252542]/80 p-8 rounded-lg backdrop-blur-lg">
          <p className="text-white-600 text-lg mb-8">
            I’m open to learning, working on projects and internships, and contributing to technology.
            Please feel free to reach out to me if you have any questions, suggestions, or just want to say hi!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#4cc9f0] mb-4">My Social Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    whileHover={{ scale: 1.05 }}
                    className="block p-4 bg-[#1a1a2e] rounded-lg text-white hover:text-[#4cc9f0] transition-colors"
                  >
                    {link.name}
                    {/*<span className="ml-2 inline-block">{link.icon}</span>*/}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#4cc9f0] mb-4">Contact Form</h3>
              <form ref={formRef} onSubmit={handleSubmit}  className="space-y-4">
                {/*<input*/}
                {/*    type="text"*/}
                {/*    placeholder="Your Name"*/}
                {/*    className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"*/}
                {/*/>*/}
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"
                    placeholder="Your Name"
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"
                    placeholder="Your Email"
                />
                {/*<input*/}
                {/*  type="email"*/}
                {/*  placeholder="Your Email"*/}
                {/*  className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"*/}
                {/*/>*/}
                {/*<textarea*/}
                {/*  placeholder="Your Message"*/}
                {/*  rows={4}*/}
                {/*  className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"*/}
                {/*/>*/}
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"
                    placeholder="Share your thoughts or inquiries..."
                />
                {/*<button*/}
                {/*  type="submit"*/}
                {/*  className="w-full p-3 bg-[#4cc9f0] text-white rounded-lg hover:bg-[#4cc9f0] transition-colors"*/}
                {/*>*/}
                {/*  Send Message*/}
                {/*</button>*/}
                  <button className="w-full p-3 bg-[#4cc9f0] text-white rounded-lg hover:bg-[#4cc9f0] transition-colors" type="submit" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}

                      {/*<img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />*/}
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;