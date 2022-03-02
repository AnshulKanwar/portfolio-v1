import { motion } from "framer-motion";

export default function Section({ children, title, id }) {
  return (
    <motion.section
      className={`min-h-screen last:min-h-[calc(100vh-2*theme(spacing.20))] text-center rounded-2xl flex justify-center`}
      id={id}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-x-2 gap-y-14 self-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-4xl font-bold flex-none lg:text-left">{title}</h1>
        <div>{children}</div>
      </motion.div>
    </motion.section>
  );
}
