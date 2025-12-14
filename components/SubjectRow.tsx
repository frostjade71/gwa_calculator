"use client";

import { motion } from "framer-motion";
import { SubjectRowProps } from "@/types";

export default function SubjectRow({ subject, onUpdate, onRemove }: SubjectRowProps) {
  const gradeNum = typeof subject.grade === 'string' ? parseFloat(subject.grade) : subject.grade;
  const unitsNum = typeof subject.units === 'string' ? parseInt(subject.units) : subject.units;
  
  const gradeError = !isNaN(gradeNum) && gradeNum !== 0 && (gradeNum < 1.0 || gradeNum > 5.0);
  const unitsError = !isNaN(unitsNum) && unitsNum !== 0 && unitsNum < 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-3 md:p-4 mb-2 md:mb-3"
    >
      <div className="grid grid-cols-12 gap-2 md:gap-3">
        {/* Subject Name */}
        <div className="col-span-12 md:col-span-5">
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Subject Name
          </label>
          <input
            type="text"
            value={subject.name}
            onChange={(e) => onUpdate(subject.id, "name", e.target.value)}
            placeholder="e.g., Mathematics"
            className="w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Grade */}
        <div className="col-span-5 md:col-span-3">
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Grade
          </label>
          <input
            type="text"
            inputMode="decimal"
            value={subject.grade}
            onChange={(e) => onUpdate(subject.id, "grade", e.target.value)}
            placeholder="1.0"
            className={`w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base bg-white border text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              gradeError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {gradeError && (
            <p className="text-xs text-red-500 mt-1">1.0 - 5.0</p>
          )}
        </div>

        {/* Units */}
        <div className="col-span-5 md:col-span-2">
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
            Units
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={subject.units}
            onChange={(e) => onUpdate(subject.id, "units", e.target.value)}
            placeholder="3"
            className={`w-full px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base bg-white border text-gray-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              unitsError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {unitsError && (
            <p className="text-xs text-red-500 mt-1">Min 1</p>
          )}
        </div>

        {/* Remove Button - Symbol Only */}
        <div className="col-span-2 md:col-span-2 flex items-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onRemove(subject.id)}
            className="w-full px-2 py-1.5 md:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-bold text-lg md:text-xl flex items-center justify-center"
            title="Remove subject"
          >
            ×
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
