import React from 'react'
import './Home.scss';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div className="m-50 bg-black text-white" initial={{ width: 0 }} animate={{ width: '100%'}} exit={{ x: window.innerWidth, transition:{duration:0.5} }}>
            <h1>Home</h1>
        </motion.div>
    )
}
