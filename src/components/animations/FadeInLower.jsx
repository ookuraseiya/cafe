import { motion } from 'framer-motion';

export const FadeInLower = (props) => {
  return (
    <>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {props.children}
      </motion.div>
    </>
  );
};
