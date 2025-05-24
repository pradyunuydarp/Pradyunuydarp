import { motion } from 'framer-motion';

const Publications = () => {
  // TODO: Add your publications data
  const publications = [
    {
      title: "[Publication Title]",
      authors: "[Authors]",
      journal: "[Journal/Conference Name]",
      year: "[Year]",
      link: "#"
    },
    // Add more publications...
  ];

  return (
    <section id="publications" className="min-h-screen py-20 px-4 bg-[#1a1a2e]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#4cc9f0] mb-12">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#252542] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-[#7209b7] mb-2">{pub.title}</h3>
              <p className="text-gray-300 mb-2">{pub.authors}</p>
              <p className="text-[#4cc9f0]">{pub.journal}, {pub.year}</p>
              <a
                href={pub.link}
                className="inline-block mt-4 text-white hover:text-[#4cc9f0] transition-colors"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;