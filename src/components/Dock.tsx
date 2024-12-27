import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IDock {}

const Dock: React.FC<IDock> = () => {
  return (
    <>
      <style>{`
    .dock{
        background: rgba(255,255,255,0.1);
        width: auto;
        height: 50px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        gap: 12px
    }

    .dock__item{
        width: 52px;
        height: 52px;
        background: rgba(255,255,255,0.3);
    }
    `}</style>
      <motion.div className="dock">
        <motion.div className="dock__item item-1">1</motion.div>
        <motion.div className="dock__item item-2">2</motion.div>
        <motion.div className="dock__item item-3">3</motion.div>
        <motion.div className="dock__item item-4">4</motion.div>
        <motion.div className="dock__item item-5">5</motion.div>
      </motion.div>
    </>
  );
};

export default Dock;
