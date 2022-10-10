import React from 'react'
import './About.scss';
import { motion} from 'framer-motion';

export default function About() {
  return (
    <motion.div className="m-50 bg-warning text-white" initial={{ width: 0 }} animate={{ width: '100%'}} exit={{ x: window.innerWidth,transition:{duration:0.5}}}>
            <h1>About</h1></motion.div>
  )
}
