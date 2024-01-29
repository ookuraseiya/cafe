import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

export const FadeIn = (props) => {
  return (
    <>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
      >
        <Header />
        {props.children}
        <Footer />
      </motion.div>
    </>
  );
};
