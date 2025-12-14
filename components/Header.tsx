"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.svg" 
              alt="GWA Calculator Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900">
                GWA Calculator
              </h1>
              <p className="text-xs text-gray-500 hidden md:block">
                Calculate your grades with ease
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
              v1.0
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
