"use client";

import { motion } from "framer-motion";
import { GwaResultProps } from "@/types";

export default function GwaResult({ gwa, totalUnits }: GwaResultProps) {
  const displayGwa = isNaN(gwa) ? "0.00" : gwa.toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      id="gwa-result-card"
      className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl shadow-md p-6 md:p-8 text-white"
    >
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Your GWA Result</h2>
        
        <motion.div
          key={displayGwa}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4 md:mb-6"
        >
          <div className="text-5xl md:text-7xl font-bold mb-2">{displayGwa}</div>
          <div className="text-base md:text-xl opacity-90">General Weighted Average</div>
        </motion.div>

        <div className="border-t border-white/30 pt-3 md:pt-4">
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm md:text-lg opacity-90">Total Units:</span>
            <motion.span
              key={totalUnits}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-xl md:text-2xl font-bold"
            >
              {totalUnits}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
