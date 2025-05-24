import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-[#1a1a2e]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-white"
      >
        <h2 className="text-4xl font-bold mb-8 text-[#4cc9f0]">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#7209b7]">Background</h3>
            {/* TODO: Add your background story */}
            <p className="text-gray-300 mb-4">
              [Your compelling background story here]
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#7209b7]">Interests</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#252542] rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-[#4cc9f0]">Algorithms</h4>
                {/* TODO: Add your algorithmic interests */}
                <p className="text-gray-300">[Your algorithmic passions here]</p>
              </div>
              <div className="p-4 bg-[#252542] rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-[#4cc9f0]">Music</h4>
                {/* TODO: Add your music interests */}
                <p className="text-gray-300">[Your musical journey and preferences here]</p>
              </div>
              <div className="p-4 bg-[#252542] rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-[#4cc9f0]">Anime</h4>
                {/* TODO: Add your anime interests */}
                <p className="text-gray-300">[Your favorite anime and their influence here]</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;