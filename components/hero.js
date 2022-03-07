import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="full-h-page flex justify-center items-center">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="mb-20 flex flex-col mx-auto font-black text-6xl sm:text-8xl w-[250px] sm:w-[400px]">
            <span className="">Hello.</span>
            {/* <span className="self-start">Hello </span>
            <span className="self-end text-slate-600 dark:text-slate-400">Friend.</span> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="text-slate-600 dark:text-slate-200">My name is <span className="font-bold">Anshul Kanwar</span> and I ❤️ computers.</div>
        </motion.div>
      </div>
    </div>
  );
}
