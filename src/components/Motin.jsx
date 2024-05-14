import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } }}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } }}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } } }}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default Motion;
