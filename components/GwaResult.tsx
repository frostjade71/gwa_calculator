"use client";

import { motion } from "framer-motion";
import { GwaResultProps } from "@/types";

export default function GwaResult({ gwa, totalUnits, isHidden = false, onShow }: GwaResultProps) {
  const displayGwa = isNaN(gwa) ? "0.00" : gwa.toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      id="gwa-result-card"
      className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl shadow-md p-4 md:p-8 text-white"
    >
      {/* Main Content */}
      <div className={`text-center ${isHidden ? 'blur-md select-none' : ''}`}>
        <h2 className="text-base md:text-2xl font-bold mb-3 md:mb-6">Your GWA Result</h2>
        
        <motion.div
          key={displayGwa}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-3 md:mb-6"
        >
          <div className="text-4xl md:text-7xl font-bold mb-1 md:mb-2">{displayGwa}</div>
          <div className="text-xs md:text-xl opacity-90">General Weighted Average</div>
        </motion.div>

        <div className="border-t border-white/30 pt-2 md:pt-4">
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs md:text-lg opacity-90">Total Units:</span>
            <motion.span
              key={totalUnits}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-lg md:text-2xl font-bold"
            >
              {totalUnits}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Show Button Overlay (when hidden) */}
      {isHidden && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShow}
            className="px-4 py-2 md:px-6 md:py-3 bg-white text-blue-600 rounded-md md:rounded-lg font-bold text-sm md:text-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Show Results
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
