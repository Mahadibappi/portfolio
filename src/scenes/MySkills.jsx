import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red">ME</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-lg">
            As a MERN stack developer I have worked on several projects using this technology stack I used technology for frontend(HTML5, CSS3, JavaScript, React, Redux, <br /> Tailwind, Bootstrap) and for the Backend (Node js, Express js,) and MongoDB for database management. I'm excited about the opportunity to bring my skills and experience to your team and contribute to the success of your projects.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="about"
                className="hover:filter rounded-lg  transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
                src="../assets/mahadi-2.png"
              />
            </div>
          ) : (
            <img alt="about" className="z-10" src="../assets/profile-1.jpg" />
          )}
        </div>
      </div>

    </section>
  );
};

export default About;
