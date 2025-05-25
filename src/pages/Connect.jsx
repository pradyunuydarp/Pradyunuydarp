import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

const Connect = () => {
  // TODO: Add your social links
  const socialLinks = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    // Add more social links...
  ];

  return (
    <section id="connect" className="min-h-screen py-20 px-4 bg-[#1a1a2e] relative">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Sparkles
            count={100}
            scale={[10, 10, 10]}
            size={1}
            speed={0.2}
            color="#4cc9f0"
          />
        </Canvas>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-[#4cc9f0] mb-12">Let's Connect</h2>
        
        <div className="bg-[#252542]/80 p-8 rounded-lg backdrop-blur-lg">
          <p className="text-white text-lg mb-8">
            {/* TODO: Add your connection message */}
            [Your inviting message to connect]
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#7209b7] mb-4">Social Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    whileHover={{ scale: 1.05 }}
                    className="block p-4 bg-[#1a1a2e] rounded-lg text-white hover:text-[#4cc9f0] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#7209b7] mb-4">Contact Form</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-[#1a1a2e] rounded-lg text-white"
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-[#7209b7] text-white rounded-lg hover:bg-[#4cc9f0] transition-colors"
                >
                  Send Message
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