"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white border-t border-gray-200 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
              About GWA Calculator
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              A simple and efficient tool to calculate your General Weighted Average.
              Perfect for students tracking their academic performance.
            </p>
          </div>

          {/* Formula Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
              How It Works
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              Formula: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">GWA = Σ(grade × units) / Σ(units)</code>
            </p>
            <p className="text-xs text-gray-500">
              Enter your subjects with grades (1.0-5.0) and units to calculate your GWA automatically.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Framer Motion</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-xs md:text-sm text-gray-500">
              © {currentYear} GWA Calculator. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Made with ❤️ for students
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
