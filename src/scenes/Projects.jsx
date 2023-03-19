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
        <p className="mt-10 mb-10 text-2xl">
          Using my stack i have developed these full stack projects please click the link below to see details
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        
        <motion.div
          className="sm:grid gap-5 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        <div className="text-3xl text-center "
        style={{
        backgroundImage: `url(${"../assets/project-01.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px',
        width: '400px',
            }}>
            <div className="mb-40"></div>
            
            <button class="bg-blue-500 hover:bg-rose-500 text-green-500 font-bold py-2 px-4 border border-red rounded">
              <a  target="_blank" href="https://pinvent-app.vercel.app/" rel="noreferrer">View App</a>
          </button>
          
          </div>
          
        <div className="text-3xl text-center "
        style={{
        backgroundImage: `url(${"../assets/project-02.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px',
            }}>
             <div className="mb-40"></div>            
             <button class="bg-blue-500 hover:bg-rose-500 text-green-500 font-bold py-2 px-4 border border-red rounded">
              <a  target="_blank" href="https://social-media-client-one.vercel.app"  rel="noreferrer">View App</a>
          </button>
          </div>
          
      <div className="text-3xl text-center"
        style={{
        backgroundImage: `url(${"../assets/project-03.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px',
       
      }}
      >
          <div className="mb-40"></div>
                <button class="bg-blue-500 hover:bg-rose-500 text-green-500 font-bold py-2 px-4 border border-red rounded">
              <a  target="_blank" href="https://moonlit-licorice-b83791.netlify.app"   rel="noreferrer">View App</a>
          </button>
            
         </div>
        

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
