import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="full-h-page flex justify-center items-center">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 5 }}
        >
          <p className="text-8xl font-bold tracking-tight">Hello.</p>
          <p className="mt-8 text-xl font-light">
            My name is <span className="font-bold">Anshul Kanwar</span> and I
            love{" "}
            <span className="underline decoration-from-font">computers</span>,{" "}
            <span className="underline decoration-from-font">
              web designing
            </span>
            , and{" "}
            <span className="underline decoration-from-font">
              graphics programming.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
