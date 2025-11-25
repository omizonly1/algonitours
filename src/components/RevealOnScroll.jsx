import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, delay = 0, width = "100%" }) => {
    return (
        <div style={{ width, overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealOnScroll;
