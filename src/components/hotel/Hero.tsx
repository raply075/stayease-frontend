import Container from "../layout/Container";
import heroImage from "../../assets/images/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-center h-[600px] text-white max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Find Your Dream Hotel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 text-xl text-gray-200"
          >
            Discover luxury hotels, resorts, and villas at the best prices.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className="mt-8 w-fit bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
          >
            Book Now
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
