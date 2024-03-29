import React from 'react';
import { motion } from 'framer-motion';

import '../styles/About.scss';

const About = () => {
  return (
    <motion.div 
      className='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      About
    </motion.div>
  )
}

export default About