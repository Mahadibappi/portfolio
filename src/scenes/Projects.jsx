import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};




const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Using advanced technologies i have developed some full stack projects please see details
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        
        <motion.div
          className="sm:grid gap-4 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-4xl">
            <a target="_blank" href="https://pinvent-app.vercel.app/" rel="noreferrer">Inventory Management app</a>
         </div>
          <div className="text-4xl">
            <a target="_blank" href="https://social-media-client-one.vercel.app" rel="noreferrer">Social Media app</a>
         </div>
          <div className="text-4xl">
            <a target="_blank" href="https://pinvent-app.vercel.app/" rel="noreferrer">Expense Tracker app</a>
         </div>
        

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
