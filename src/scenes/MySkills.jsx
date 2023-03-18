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
             As an enthusiastic and creative MERN stack developer past 7 months i  have designed, developed three  full stack projects using my stack including JavaScript, HTML5, CSS/Bootstrap,node js, express js , mongoDB etc. I have also designed 7-10 projects using my stack.I can clean and understanding code based on the client requirements.
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
                className="z-10 rounded-lg w-3/4"
                src="../assets/mahadi.jpg"
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
//  {/* about */}
//       <div className="md:flex md:justify-between mt-16 gap-32">
//         {/* EXPERIENCE */}
//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">01</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Experience
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
//             morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
//             odio sit sagittis,
//           </p>
//         </motion.div>

//         {/* INNOVATIVE */}
//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">02</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Innovative
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
//             amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
//             nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
//             faucibus a
//           </p>
//         </motion.div>
//         {/* IMAGINATIVE */}
//         <motion.div
//           className="md:w-1/3 mt-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >
//           <div className="relative h-32">
//             <div className="z-10">
//               <p className="font-playfair font-semibold text-5xl">03</p>
//               <p className="font-playfair font-semibold text-3xl mt-3">
//                 Imaginative
//               </p>
//             </div>
//             <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
//           </div>
//           <p className="mt-5">
//             Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
//             curabitur. Lectus libero, egestas enim aliquam quis felis amet.
//             Sagittis, amet netus fringilla netus lobortis odio sed platea.
//             Bibendum.
//           </p>
//         </motion.div>
//       </div>